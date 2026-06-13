from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import sys
import os

# Add root to sys path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import config
from src.recommendation_model import RecommendationEngine
from src.pricing_optimizer import PricingOptimizer
from src.urgency_engine import UrgencyEngine

app = FastAPI(title="Customer Segmentation with Conversion Engine API")

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all origins for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Models
rec_engine = RecommendationEngine()
pricing_opt = PricingOptimizer()
urgency_engine = UrgencyEngine()

# Load Data
try:
    catalog = pd.read_pickle(os.path.join(config.DATA_DIR, "product_catalog.pkl"))
    dataset = pd.read_parquet(os.path.join(config.DATA_DIR, "transactions_sample.parquet"))
except Exception as e:
    catalog = pd.DataFrame()
    dataset = pd.DataFrame()
    print(f"Failed to load data: {e}")

@app.get("/")
def health_check():
    return {"status": "ok", "models_ready": rec_engine.is_ready and pricing_opt.is_ready}

@app.get("/api/users")
def get_users():
    if dataset.empty:
        raise HTTPException(status_code=404, detail="Data not loaded")
    sample_users = dataset['user_id'].dropna().unique()[:50].tolist()
    return {"users": sample_users}

@app.get("/api/recommendations/{user_id}")
def get_recommendations(user_id: str):
    if not rec_engine.is_ready:
        raise HTTPException(status_code=503, detail="Model not ready")
        
    rec_ids = rec_engine.get_recommendations(user_id, n=4)
    if not rec_ids:
        return {"recommendations": []}
        
    # Get urgency cluster and message
    cluster = pricing_opt.get_user_cluster(user_id)
    urgency_message = urgency_engine.get_urgency_message(cluster)
    
    recommendations = []
    for p_id in rec_ids:
        item_df = catalog[catalog['product_id'] == p_id]
        if item_df.empty:
            continue
        item = item_df.iloc[0]
        
        optimal_discount = pricing_opt.get_optimal_discount(user_id, item['category'])
        original_price = float(item['price'])
        discounted_price = original_price * (1 - (optimal_discount / 100))
        
        recommendations.append({
            "product_id": str(item['product_id']),
            "brand": str(item['brand']),
            "category": str(item['category']),
            "subcategory": str(item['subcategory']),
            "rating": float(item['rating']),
            "original_price": original_price,
            "discounted_price": discounted_price,
            "discount_percentage": optimal_discount,
            "urgency_message": urgency_message
        })
        
    return {"recommendations": recommendations, "cluster": cluster}

@app.get("/api/seller/metrics")
def get_seller_metrics():
    if dataset.empty or catalog.empty:
        raise HTTPException(status_code=404, detail="Data not loaded")
        
    total_sales = float(dataset['final_price'].sum())
    avg_discount = float(dataset['discount'].mean())
    return_rate = float((dataset['is_returned'].sum() / len(dataset)) * 100)
    
    # Simple summary data for charts
    avg_cat_price = catalog.groupby('category')['price'].mean().reset_index().to_dict('records')
    
    return {
        "total_revenue": total_sales,
        "avg_discount": avg_discount,
        "return_rate": return_rate,
        "active_products": len(catalog),
        "category_prices": avg_cat_price
    }

@app.get("/api/segments")
def get_segments_data():
    if dataset.empty:
        raise HTTPException(status_code=404, detail="Data not loaded")
        
    try:
        user_sensitivity = pd.read_pickle(os.path.join(config.DATA_DIR, "user_sensitivity.pkl"))
        
        # Calculate cluster sizes
        raw_counts = user_sensitivity['sensitivity_cluster'].value_counts().to_dict()
        cluster_counts = {int(k): int(v) for k, v in raw_counts.items()}
        
        # Merge dataset with sensitivity to get average discount per cluster
        df_merged = dataset.merge(user_sensitivity[['user_id', 'sensitivity_cluster']], on='user_id', how='left')
        raw_discounts = df_merged.groupby('sensitivity_cluster')['discount'].mean().fillna(0).to_dict()
        cluster_discounts = {int(k): float(v) for k, v in raw_discounts.items()}
        
        return {
            "cluster_counts": cluster_counts,
            "cluster_avg_discounts": cluster_discounts
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
