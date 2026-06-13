import { useState } from 'react'
import { ShoppingBag, BarChart3, Users, Zap, Lock, LogOut } from 'lucide-react'
import ShopperView from './components/ShopperView'
import SellerDashboard from './components/SellerDashboard'
import CustomerSegments from './components/CustomerSegments'
import AdminLogin from './components/AdminLogin'

function App() {
  const [activeView, setActiveView] = useState('shopper')
  const [loggedIn, setLoggedIn] = useState(false)

  const renderContent = () => {
    if (activeView === 'shopper') return <ShopperView />
    if (activeView === 'login') return <AdminLogin onLogin={(success) => { if(success) { setLoggedIn(true); setActiveView('seller'); } }} />
    
    // Protected routes
    if (!loggedIn) return <AdminLogin onLogin={(success) => { if(success) { setLoggedIn(true); setActiveView(activeView); } }} />
    
    if (activeView === 'seller') return <SellerDashboard />
    if (activeView === 'segments') return <CustomerSegments />
  }

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="brand">
          QUAD.AI<br/><span style={{fontSize:'0.9rem', fontWeight:400, color:'#94a3b8'}}>Customer Segmentation<br/>with Conversion Engine</span>
        </div>
        
        <nav>
          <a 
            className={`nav-link ${activeView === 'shopper' ? 'active' : ''}`}
            onClick={() => setActiveView('shopper')}
          >
            <ShoppingBag size={20} /> Shopper Experience
          </a>
          
          <div style={{margin: '1.5rem 0 0.5rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', padding: '0 16px'}}>
            Admin
          </div>

          {!loggedIn ? (
            <a 
              className={`nav-link ${activeView === 'login' ? 'active' : ''}`}
              onClick={() => setActiveView('login')}
            >
              <Lock size={20} /> Admin Login
            </a>
          ) : (
            <>
              <a 
                className={`nav-link ${activeView === 'seller' ? 'active' : ''}`}
                onClick={() => setActiveView('seller')}
              >
                <BarChart3 size={20} /> Seller Dashboard
              </a>
              <a 
                className={`nav-link ${activeView === 'segments' ? 'active' : ''}`}
                onClick={() => setActiveView('segments')}
              >
                <Users size={20} /> Customer Segments
              </a>
              <a 
                className="nav-link"
                style={{marginTop: '1rem', color: '#ef4444'}}
                onClick={() => { setLoggedIn(false); setActiveView('shopper'); }}
              >
                <LogOut size={20} /> Logout
              </a>
            </>
          )}
        </nav>
        
        <div style={{marginTop: 'auto', textAlign: 'center', color: '#64748b', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px'}}>
          <Zap size={14} style={{display:'inline', marginBottom:'-3px', color:'#38bdf8'}}/> POWERED BY QUAD.AI
        </div>
      </aside>
      
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
