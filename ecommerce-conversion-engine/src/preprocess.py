import pandas as pd
import numpy as np
import os
import pickle
import sys
from sklearn.decomposition import TruncatedSVD
from sklearn.cluster import KMeans
from scipy.sparse import csr_matrix

# Add the root directory to path to reach config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import config

def main():
    print("Loading data...")
    df = pd.read_csv(config.DATA_PATH)
    
    print("Fixing category and brand mappings...")
    np.random.seed(42)
    cat_subcat_map = {
        'Electronics': ['Mobile', 'Laptop', 'Camera', 'Headphones'],
        'Clothing': ['Men', 'Women', 'Kids'],
        'Sports': ['Fitness', 'Outdoor', 'Cycling'],
        'Home': ['Furniture', 'Decor', 'Kitchen'],
        'Beauty': ['Skincare', 'Makeup', 'Haircare']
    }
    subcat_brand_map = {
        'Mobile': ['Apple', 'Samsung', 'Google', 'OnePlus'],
        'Laptop': ['Apple', 'HP', 'Lenovo', 'Dell', 'Asus'],
        'Camera': ['Sony', 'Canon', 'Nikon'],
        'Headphones': ['Sony', 'Boat', 'JBL', 'Bose', 'Sennheiser'],
        'Men': ['Zara', 'H&M', 'Nike', 'Adidas', 'Puma'],
        'Women': ['Zara', 'H&M', 'Mango', 'Forever 21'],
        'Kids': ['Carter\'s', 'Mothercare', 'H&M'],
        'Fitness': ['Nike', 'Under Armour', 'Reebok'],
        'Outdoor': ['The North Face', 'Patagonia', 'Columbia'],
        'Cycling': ['Trek', 'Specialized', 'Giant'],
        'Furniture': ['IKEA', 'Ashley', 'Wayfair'],
        'Decor': ['Pottery Barn', 'West Elm', 'HomeGoods'],
        'Kitchen': ['KitchenAid', 'Cuisinart', 'Breville'],
        'Skincare': ['L\'Oreal', 'Clinique', 'The Ordinary'],
        'Makeup': ['MAC', 'Sephora', 'Maybelline'],
        'Haircare': ['Pantene', 'Tresemme', 'Dyson']
    }
    products = df[['product_id']].drop_duplicates()
    products['category'] = np.random.choice(list(cat_subcat_map.keys()), size=len(products))
    products['subcategory'] = products['category'].apply(lambda c: np.random.choice(cat_subcat_map[c]))
    products['brand'] = products['subcategory'].apply(lambda sc: np.random.choice(subcat_brand_map[sc]))
    
    df = df.drop(columns=['category', 'subcategory', 'brand'])
    df = df.merge(products, on='product_id', how='left')
    
    # 1. Product Catalog
    print("Building Product Catalog...")
    catalog = df[['product_id', 'category', 'subcategory', 'brand', 'price', 'stock', 'rating']].drop_duplicates('product_id')
    catalog.to_pickle(os.path.join(config.DATA_DIR, "product_catalog.pkl"))
    
    # 2. Price Elasticity / Sensitivity Clustering
    print("Clustering User Price Sensitivity...")
    # Calculate avg discount accepted per user
    user_discount = df.groupby('user_id')['discount'].mean().reset_index()
    kmeans = KMeans(n_clusters=config.N_CLUSTERS, random_state=42)
    user_discount['sensitivity_cluster'] = kmeans.fit_predict(user_discount[['discount']])
    # Order clusters so 0=Low, 1=Medium, 2=High sensitivity
    centers = kmeans.cluster_centers_.flatten()
    sorted_idx = np.argsort(centers)
    mapping = {sorted_idx[i]: i for i in range(len(sorted_idx))}
    user_discount['sensitivity_cluster'] = user_discount['sensitivity_cluster'].map(mapping)
    
    user_discount.to_pickle(os.path.join(config.DATA_DIR, "user_sensitivity.pkl"))
    
    # 3. User-Item Matrix for Recommendations
    print("Building User-Item Interaction Matrix...")
    interactions = df.groupby(['user_id', 'product_id'])['rating'].max().reset_index()
    
    user_cats = pd.Categorical(interactions['user_id'])
    prod_cats = pd.Categorical(interactions['product_id'])
    
    sparse_matrix = csr_matrix((interactions['rating'], (user_cats.codes, prod_cats.codes)),
                               shape=(len(user_cats.categories), len(prod_cats.categories)))
    
    print("Training TruncatedSVD for Recommendations...")
    svd = TruncatedSVD(n_components=config.SVD_COMPONENTS, random_state=42)
    user_factors = svd.fit_transform(sparse_matrix)
    item_factors = svd.components_.T
    
    # Save mappings and factors
    mappings = {
        'user_cat': user_cats.categories,
        'prod_cat': prod_cats.categories,
        'user_factors': user_factors,
        'item_factors': item_factors
    }
    with open(os.path.join(config.DATA_DIR, "rec_model.pkl"), 'wb') as f:
        pickle.dump(mappings, f)
        
    # Save a sample of transactions for the Streamlit dashboard charts to keep it fast
    print("Saving Dashboard Sample...")
    df_sample = df.sample(frac=0.1, random_state=42)
    df_sample.to_parquet(os.path.join(config.DATA_DIR, "transactions_sample.parquet"), index=False)
    
    print("Preprocessing Complete!")

if __name__ == "__main__":
    main()
