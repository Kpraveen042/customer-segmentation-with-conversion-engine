import { useState } from 'react'
import { Lock } from 'lucide-react'

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Hardcoded credentials just like the Streamlit version
    if (username === 'admin' && password === 'Pravee9a') {
      onLogin(true)
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh'}}>
      <div className="glass-card" style={{width: '100%', maxWidth: '400px', padding: '3rem 2rem'}}>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1.5rem'}}>
          <div style={{background: 'linear-gradient(135deg, #38bdf8, #818cf8)', padding: '16px', borderRadius: '50%'}}>
            <Lock size={32} color="#0f172a" />
          </div>
        </div>
        
        <h2 style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem'}}>Admin Login</h2>
        
        {error && (
          <div style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '12px', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center', fontSize: '0.9rem'}}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Username</label>
            <input 
              type="text" 
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(15, 23, 42, 0.6)', color: 'white', outline: 'none'}}
              placeholder="admin"
            />
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(15, 23, 42, 0.6)', color: 'white', outline: 'none'}}
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" className="add-btn" style={{marginTop: '1rem'}}>
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}
