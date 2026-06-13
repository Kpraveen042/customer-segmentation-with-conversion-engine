import random

class UrgencyEngine:
    def __init__(self):
        # Define the urgency messages based on the user's price sensitivity cluster
        # 0: Low sensitivity (Premium focus)
        # 1: Medium sensitivity (Social Proof)
        # 2: High sensitivity (High Urgency / Scarcity)
        
        self.messages = {
            0: [
                "Premium Selection",
                "Top Rated by Verified Buyers",
                "Exclusive Item",
                "Highest Quality Guarantee"
            ],
            1: [
                "Trending: 12 people bought this today",
                "Limited Stock Available",
                "Highly sought after this week",
                "Popular Choice"
            ],
            2: [
                "Flash Sale: Deal expires in 15:00 minutes!",
                "Only 1 left at this price!",
                "Price drops end today!",
                "High Demand: Selling Fast!"
            ]
        }
        
    def get_urgency_message(self, cluster: int) -> str:
        """
        Returns a randomly selected urgency message appropriate for the user's cluster.
        If cluster is unknown, defaults to a neutral message.
        """
        if cluster in self.messages:
            return random.choice(self.messages[cluster])
        return "Special Offer Just For You"
