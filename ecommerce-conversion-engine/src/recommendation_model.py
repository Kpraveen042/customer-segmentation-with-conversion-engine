import os
import pickle
import numpy as np
import sys

# Add the root directory to path to reach config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import config

class RecommendationEngine:
    def __init__(self):
        try:
            with open(os.path.join(config.DATA_DIR, "rec_model.pkl"), 'rb') as f:
                mappings = pickle.load(f)
                
            self.user_cat = list(mappings['user_cat'])
            self.prod_cat = list(mappings['prod_cat'])
            
            # Map for fast lookups
            self.user_idx = {u: i for i, u in enumerate(self.user_cat)}
            self.prod_idx = {p: i for i, p in enumerate(self.prod_cat)}
            
            self.user_factors = mappings['user_factors']
            self.item_factors = mappings['item_factors']
            
            self.is_ready = True
        except Exception:
            self.is_ready = False
            
    def get_recommendations(self, user_id, n=5):
        if not self.is_ready or user_id not in self.user_idx:
            # Return random items if user not found or model not ready
            return np.random.choice(self.prod_cat, size=n, replace=False).tolist() if hasattr(self, 'prod_cat') and self.prod_cat else []
            
        u_idx = self.user_idx[user_id]
        u_vec = self.user_factors[u_idx]
        
        # Dot product of user vector with all item vectors
        scores = self.item_factors.dot(u_vec)
        
        # Get top indices
        top_indices = np.argsort(scores)[::-1][:n]
        
        return [self.prod_cat[i] for i in top_indices]
