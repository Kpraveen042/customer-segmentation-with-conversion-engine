import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
DATA_PATH = os.path.join(DATA_DIR, "amazon_ecommerce_1M.csv")

# Model hyperparams
N_RECOMMENDATIONS = 5
SVD_COMPONENTS = 20
N_CLUSTERS = 3  # For price sensitivity clustering
