import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const API_URL = 'http://localhost:8000/api'

export default function CustomerSegments() {
  const [segmentData, setSegmentData] = useState(null)

  useEffect(() => {
    axios.get(`${API_URL}/segments`)
      .then(res => setSegmentData(res.data))
      .catch(err => console.error("Failed to fetch segments data", err))
  }, [])

  if (!segmentData) {
    return <div style={{padding: '2rem'}}>Loading segment analytics...</div>
  }

  // 0: Low, 1: Medium, 2: High
  const counts = segmentData.cluster_counts
  
  const pieData = {
    labels: ['Low Sensitivity (Premium)', 'Medium Sensitivity', 'High Sensitivity (Urgency)'],
    datasets: [
      {
        data: [counts[0] || 0, counts[1] || 0, counts[2] || 0],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)', // Green
          'rgba(56, 189, 248, 0.8)', // Blue
          'rgba(244, 63, 94, 0.8)',  // Red
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(56, 189, 248, 1)',
          'rgba(244, 63, 94, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: { color: '#f8fafc' }
      }
    }
  }

  return (
    <div>
      <h1 style={{fontSize: '2.5rem', marginBottom: '8px'}}>Customer Segments 👥</h1>
      <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
        K-Means price-sensitivity cluster analytics.
      </p>

      <div className="charts-grid">
        <div className="glass-card" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h3 style={{fontSize: '1.2rem', marginBottom: '20px'}}>User Distribution by Sensitivity</h3>
          <div style={{width: '80%'}}>
             <Pie data={pieData} options={pieOptions} />
          </div>
        </div>

        <div className="glass-card" style={{padding: '2rem'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '16px'}}>Cluster Analysis</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <div style={{background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '16px', borderRadius: '4px'}}>
              <strong>Low Sensitivity (Cluster 0)</strong><br/>
              Users who are brand-loyal and willing to pay premium prices. The Urgency Engine targets them with "Premium Quality" messaging rather than deep discounts.
            </div>
            <div style={{background: 'rgba(56, 189, 248, 0.1)', borderLeft: '4px solid #38bdf8', padding: '16px', borderRadius: '4px'}}>
              <strong>Medium Sensitivity (Cluster 1)</strong><br/>
              The majority of users. They respond well to standard discounts and social proof ("Trending: 12 bought this").
            </div>
            <div style={{background: 'rgba(244, 63, 94, 0.1)', borderLeft: '4px solid #f43f5e', padding: '16px', borderRadius: '4px'}}>
              <strong>High Sensitivity (Cluster 2)</strong><br/>
              Deal-hunters. The engine triggers high discounts and extreme urgency ("Flash Sale: 15 mins left!") to secure conversions.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
