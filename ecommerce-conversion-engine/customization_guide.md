# Developer Customization Guide

This document provides exact file paths so you can quickly find and modify key aspects of the **Customer Segmentation with Conversion Engine** application under the new React and FastAPI architecture.

---

## 1. Changing the Branding & Project Name
If you want to rename the project or change the team name ("QUAD.AI") to your own name, you need to update the React frontend files:

**`frontend/src/App.jsx`**
- Change the Sidebar Header text and branding inside the `<aside className="sidebar">` block.
- Change the Sidebar Developer Name at the bottom of the sidebar (`POWERED BY FASTAPI & REACT`).

**`frontend/src/components/AdminLogin.jsx`**
- Change the Login Page Header: `<h2>Admin Login</h2>` to your preferred title.

**`frontend/src/components/SellerDashboard.jsx`**
- Change the dashboard title: `<h1>Seller Dashboard 📈</h1>`.

---

## 2. Changing Admin Login Credentials
The admin authentication is currently handled directly in the frontend for demonstration purposes. It can be modified here:

**`frontend/src/components/AdminLogin.jsx`**
- Locate the `handleLogin` function.
- Change the hardcoded condition: `if (username === 'admin' && password === 'Pravee9a')` to match your desired credentials.

---

## 3. Changing Colors & Styling (CSS)
The premium glassmorphic UI is built entirely using Vanilla CSS. If you want to modify the background colors, text colors, or hover effects, you can edit the global stylesheet:

**`frontend/src/index.css`**
- At the very top of the file, locate the `:root` block. 
- You can change all the core CSS variables here, such as `--bg-color`, `--accent-blue`, and `--accent-emerald`.
- To modify the background gradients, edit the `body` background-image properties.

---

## 4. Changing Machine Learning Hyperparameters
If you want to tweak how the machine learning algorithms behave (e.g., number of recommendations shown, clustering sensitivity), edit the global configuration file in the Python backend:

**`config.py`**
- `N_RECOMMENDATIONS = 5` (Change this to display more or fewer products to the shopper).
- `SVD_COMPONENTS = 20` (Change the complexity of the Recommendation model. Higher = more accurate but slower; Lower = faster but less accurate).
- `N_CLUSTERS = 3` (Change the number of price sensitivity segments. For example, change to `4` if you want a 4th customer tier). 
*Note: You must re-run `python src\preprocess.py` and restart your FastAPI server after changing this.*

---

## 5. Customizing the Psychological Urgency Engine
The Urgency Engine dynamically injects marketing nudges based on a user's price-sensitivity cluster. 

**`src/urgency_engine.py`**
- Locate the `self.messages` dictionary.
- Modify the lists of strings under `0`, `1`, and `2` to test different psychological triggers (e.g., changing "Flash Sale!" to "Clearance Event!").
*Note: Restart your FastAPI server for the new strings to take effect.*

---

## 6. Using a Different Dataset
If you want to use a different CSV file instead of `amazon_ecommerce_1M.csv`:

**`config.py`**
- `DATA_PATH = os.path.join(DATA_DIR, "your_new_dataset.csv")`

**`src/preprocess.py`**
- If your new dataset has different column names (e.g., `user_id` instead of `user_session`), you must update the column mapping sections in this file to match your new schema.
- Specifically, pay attention to the `cat_subcat_map` and `subcat_brand_map` dictionaries to ensure your new synthetic mappings align with your new dataset categories.
- *Note: You must re-run `python src\preprocess.py` and restart your FastAPI server after changing data sources!*

---

## 7. Adding a New Sidebar Menu Option
To add a new page/view to the React dashboard:

**`frontend/src/App.jsx`**
1. Import your new component at the top: `import MyNewPage from './components/MyNewPage'`.
2. Add a new navigation link `<a onClick={() => setActiveView('mynewpage')}>` inside the `<nav>` block.
3. Update the `renderContent()` function to render your new component: 
```javascript
if (activeView === 'mynewpage') return <MyNewPage />
```
