import os
import pandas as pd
import sys

# Add the root directory to path to reach config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import config

class PricingOptimizer:
    def __init__(self):
        try:
            self.user_sensitivity = pd.read_pickle(os.path.join(config.DATA_DIR, "user_sensitivity.pkl"))
            self.user_cluster_map = dict(zip(self.user_sensitivity['user_id'], self.user_sensitivity['sensitivity_cluster']))
            self.is_ready = True
        except Exception:
            self.is_ready = False
            
    def get_user_cluster(self, user_id):
        if not self.is_ready or user_id not in self.user_cluster_map:
            return 1 # Default to medium sensitivity
        return self.user_cluster_map[user_id]
        
    def get_optimal_discount(self, user_id, base_category="Default"):
        """
        Returns the optimal discount for a user and category.
        0: Low sensitivity, give low discount.
        1: Medium sensitivity.
        2: High sensitivity, give high discount.
        """
        if not self.is_ready or user_id not in self.user_cluster_map:
            return 10.0 # Default fallback discount
            
        cluster = self.user_cluster_map[user_id]
        
        # Base discounts depending on category (as modeled in dataset dynamics)
        category_base_discount = {
            "Electronics": 5.0,
            "Clothing": 20.0,
            "Beauty": 10.0,
            "Home": 15.0,
            "Sports": 10.0
        }
        
        base = category_base_discount.get(base_category, 10.0)
        
        if cluster == 0:
            return round(base * 0.5, 1)  # Less discount needed
        elif cluster == 1:
            return round(base * 1.0, 1)  # Standard
        else:
            return round(base * 2.0, 1)  # Needs deep discount
