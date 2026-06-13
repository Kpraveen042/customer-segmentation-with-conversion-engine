import { useState, useEffect } from 'react'
import axios from 'axios'
import { AlertCircle, Zap, Star } from 'lucide-react'

const API_URL = 'http://localhost:8000/api'

export default function ShopperView() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState('')
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(false)
  const [cluster, setCluster] = useState(null)

  useEffect(() => {
    // Fetch sample users on mount
    axios.get(`${API_URL}/users`)
      .then(res => {
        setUsers(res.data.users)
        if (res.data.users.length > 0) {
          setSelectedUser(res.data.users[0])
        }
      })
      .catch(err => console.error("Failed to fetch users", err))
  }, [])

  const generateRecommendations = async () => {
    if (!selectedUser) return;
    setLoading(true)
    try {
      const res = await axios.get(`${API_URL}/recommendations/${selectedUser}`)
      setRecommendations(res.data.recommendations)
      setCluster(res.data.cluster)
    } catch (err) {
      console.error("Failed to generate recommendations", err)
    } finally {
      setLoading(false)
    }
  }

  const getUrgencyIcon = (clusterId) => {
    if (clusterId === 2) return <Zap size={16} fill="currentColor" />
    if (clusterId === 1) return <AlertCircle size={16} />
    return <Star size={16} fill="currentColor" />
  }

  const getUrgencyClass = (clusterId) => {
    if (clusterId === 2) return "urgency-badge"
    if (clusterId === 1) return "urgency-badge trending"
    return "urgency-badge premium"
  }

  return (
    <div>
      <h1 style={{fontSize: '2.5rem', marginBottom: '8px'}}>Shopper Experience 🛒</h1>
      <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
        Select a user profile to simulate their personalized, dynamic shopping experience.
      </p>

      <div className="glass-card user-selector">
        <label style={{fontWeight: 600}}>Select User ID Profile:</label>
        <div style={{display:'flex', gap:'16px'}}>
          <select 
            value={selectedUser} 
            onChange={(e) => setSelectedUser(e.target.value)}
            style={{flex: 1, maxWidth: '300px'}}
          >
            {users.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
          <button 
            className="add-btn" 
            onClick={generateRecommendations}
            disabled={loading}
            style={{marginTop: 0, padding: '12px 24px'}}
          >
            {loading ? "Analyzing Behavior..." : "Generate Smart Recommendations"}
          </button>
        </div>
      </div>

      {recommendations.length > 0 && (
        <>
          <h2 style={{fontSize: '1.8rem', marginBottom: '1.5rem', display:'flex', alignItems:'center', gap:'12px'}}>
            <span style={{background: 'linear-gradient(135deg, #f43f5e, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              ✨ Recommended Just For You
            </span>
          </h2>
          
          <div className="products-grid">
            {recommendations.map(item => (
              <div className="product-card" key={item.product_id}>
                <div className="category-badge">{item.category}</div>
                <div className="brand-title">{item.brand}</div>
                <div className="product-meta">
                  {item.subcategory} • Rating: {item.rating}⭐
                </div>
                
                <div className="price-row">
                  <span className="original-price">${item.original_price.toFixed(2)}</span>
                  <span className="discounted-price">${item.discounted_price.toFixed(2)}</span>
                </div>

                <div className={getUrgencyClass(cluster)}>
                  {getUrgencyIcon(cluster)}
                  {item.urgency_message}
                </div>

                <button className="add-btn">Add to Cart</button>
              </div>
            ))}
          </div>
          
          <div style={{marginTop: '2rem', padding: '16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', color: 'var(--accent-emerald)', fontWeight: 600}}>
            ✓ These discounts and behavioral nudges are dynamically optimized to maximize purchase likelihood for this specific user segment.
          </div>
        </>
      )}
    </div>
  )
}
