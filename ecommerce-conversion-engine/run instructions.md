# Customer Segmentation with Conversion Engine (QUAD.AI)

## Quick Start Guide

The application runs on a modern decoupled architecture: a **FastAPI (Python)** backend serving the Machine Learning models, and a **React (Vite)** frontend for the user interface.

---

### 1. First-Time Setup *(Skip if already done)*

**Open Command Prompt (cmd)** and navigate to the project folder:
```cmd
cd C:\Users\prave\Desktop\PROJECT\ecommerce-conversion-engine
```

**Activate the Virtual Environment**:
```cmd
venv\Scripts\activate.bat
```

**Install Backend Dependencies** *(first time only)*:
```cmd
pip install -r requirements.txt
```

**Run Preprocessing** *(first time only — model `.pkl` files must exist in `data\`)*:
```cmd
python src\preprocess.py
```

> ✅ **Already done** — `data\` folder contains all required `.pkl` model files and the CSV dataset. You can skip preprocessing unless you reset the data folder.

---

### 2. Start the FastAPI Backend

In a Command Prompt with the venv activated, run:
```cmd
cd C:\Users\prave\Desktop\PROJECT\ecommerce-conversion-engine
venv\Scripts\activate.bat
venv\Scripts\uvicorn.exe backend.main:app --host 0.0.0.0 --port 8000
```
*Backend API will be available at `http://localhost:8000`*

---

### 3. Start the React Frontend

Open a **new** Command Prompt window (keep the backend running), then run:
```cmd
cd C:\Users\prave\Desktop\PROJECT\ecommerce-conversion-engine\frontend
npm run dev
```

> ✅ **`npm install` already done** — `node_modules` folder exists. No need to reinstall unless you add new packages.

*The app will open at `http://localhost:5173`*

---

## Admin Credentials
| Username | Password |
|---|---|
| `admin` | `Pravee9a` |

*Click **"Admin Login"** in the sidebar to access the Seller Dashboard and Customer Segments.*

---

## App Navigation
- **Shopper Experience (Public):** AI-powered product recommendations and dynamic pricing, featuring the Psychological Urgency Engine.
- **Seller Dashboard (Admin):** Interactive revenue, return rates, and pricing analytics using Chart.js.
- **Customer Segments (Admin):** K-Means price-sensitivity cluster analytics and breakdown.

---

## Quick Troubleshooting
| Issue | Fix |
|---|---|
| `preprocess.py` fails | Ensure `amazon_ecommerce_1M.csv` is in the `data\` folder |
| Frontend fails to start | Ensure Node.js is installed; run `npm install` inside `frontend\` |
| Models not loading in UI | Ensure FastAPI backend is running on port 8000 simultaneously |
| `uvicorn` not found | Make sure the venv is activated before running the backend command |
