import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const API_URL = 'http://localhost:8000/api'

export default function SellerDashboard() {
  const [metrics, setMetrics] = useState(null)

  useEffect(() => {
    axios.get(`${API_URL}/seller/metrics`)
      .then(res => setMetrics(res.data))
      .catch(err => console.error("Failed to fetch metrics", err))
  }, [])

  if (!metrics) {
    return <div style={{padding: '2rem'}}>Loading analytics...</div>
  }

  const categoryLabels = metrics.category_prices.map(c => c.category)
  const categoryData = metrics.category_prices.map(c => c.price)

  const chartData = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Average Price ($)',
        data: categoryData,
        backgroundColor: 'rgba(129, 140, 248, 0.6)',
        borderColor: 'rgba(129, 140, 248, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#f8fafc' }
      },
      title: {
        display: true,
        text: 'Average Original Price by Category',
        color: '#f8fafc',
        font: { size: 16, family: 'Outfit' }
      },
    },
    scales: {
      y: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      },
      x: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      }
    }
  }

  return (
    <div>
      <h1 style={{fontSize: '2.5rem', marginBottom: '8px'}}>Seller Dashboard 📈</h1>
      <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
        Analyze platform metrics, return rates, and the impact of dynamic discounting strategies.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">${metrics.total_revenue.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
          <div className="stat-label">Total Projected Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{metrics.avg_discount.toFixed(1)}%</div>
          <div className="stat-label">Avg Platform Discount</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{background: 'linear-gradient(135deg, #f43f5e, #fb923c)', WebkitBackgroundClip: 'text'}}>{metrics.return_rate.toFixed(1)}%</div>
          <div className="stat-label">Platform Return Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{metrics.active_products}</div>
          <div className="stat-label">Active Products</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="glass-card" style={{padding: '1.5rem'}}>
          <Bar data={chartData} options={chartOptions} />
        </div>
        
        <div className="glass-card" style={{padding: '2rem', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '16px'}}>Pricing Engine Status</h3>
          <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>
            The <strong>Dynamic Pricing Engine</strong> is currently active. It uses the metrics displayed here to ensure high-value items are not systematically undersold, while aggressive discounts are only leveraged on sensitive user segments.
          </p>
          <div style={{marginTop: '24px', padding: '16px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '12px', color: 'var(--accent-blue)', fontWeight: 600}}>
            ✓ AI Models Optimized
          </div>
        </div>
      </div>
    </div>
  )
}
