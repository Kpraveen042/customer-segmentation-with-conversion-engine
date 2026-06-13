# Customer Segmentation with Conversion Engine — PPT Presentation Guide

---

## 📋 Global Format Rules *(Apply to ALL Slides)*

| Rule | Specification |
|---|---|
| **Background** | Solid **White** (`#FFFFFF`) — no dark background |
| **Font Size** | Minimum **20 pt** (headings: 28–32 pt, body: 20–24 pt) |
| **Max Sentences** | **4–5 sentences per slide** (never exceed) |
| **Image Placement** | Screenshots placed in their **own dedicated zone** (bottom half OR right column) — never overlapping text |
| **Reference Style** | Harvard |
| **Accent Color** | Navy Blue (`#1A237E`) for headings; Black for body text |

> ⚠️ **Overlap Prevention Rule:** Each slide is split into two zones.
> - **Zone A (Top or Left 55%)** → Text only — headline + bullet points
> - **Zone B (Bottom or Right 45%)** → Image only — screenshot, diagram, or chart
> - These zones must NEVER overlap. If content is text-heavy, move the image to the next slide as a "Figure Slide."

---

## 🏫 College & Team Details *(Use on Title Slide & Acknowledgement)*

| Field | Detail |
|---|---|
| **College** | Sitamarhi Institute of Technology |
| **Project Guide** | Prof. Pratiksha Nandeshwar |
| **Team Member 1** | Abhinaw Bhardwaj — Reg. No. 23157127903 |
| **Team Member 2** | Praveen Kumar — Reg. No. 23157127902 |
| **Team Member 3** | Nikhil Kumar Shahi — Reg. No. 22157127010 |
| **Team Member 4** | Vinayak Kumar Tiwari — Reg. No. 22157127019 |

---

---

## Section 1: Introduction *(2 Slides)*

---

### Slide 1A — Title Slide
**Layout:** Centered layout on white background. College logo top-left. All text centered.

```
┌────────────────────────────────────────────────────────┐
│  [SIT LOGO - Top Left]          [QUAD.AI Logo - Top Right] │
│                                                        │
│         SITAMARHI INSTITUTE OF TECHNOLOGY              │
│                                                        │
│   Customer Segmentation with Conversion Engine         │
│   AI-Powered Dynamic Pricing, Recommendations          │
│   & Behavioral Nudges                                  │
│                                                        │
│  Team Members:                                         │
│  Abhinaw Bhardwaj (23157127903)                        │
│  Praveen Kumar (23157127902)                           │
│  Nikhil Kumar Shahi (22157127010)                      │
│  Vinayak Kumar Tiwari (22157127019)                    │
│                                                        │
│  Project Guide: Prof. Pratiksha Nandeshwar             │
└────────────────────────────────────────────────────────┘
```

- **Title (32 pt, Navy Bold):** Customer Segmentation with Conversion Engine
- **Subtitle (24 pt):** AI-Powered Dynamic Pricing, Personalized Recommendations & Behavioral Nudges
- **Institution (22 pt):** Sitamarhi Institute of Technology
- **Guide (20 pt):** Under the Guidance of: **Prof. Pratiksha Nandeshwar**
- **Team (20 pt):**
  - Abhinaw Bhardwaj — Reg. No. 23157127903
  - Praveen Kumar — Reg. No. 23157127902
  - Nikhil Kumar Shahi — Reg. No. 22157127010
  - Vinayak Kumar Tiwari — Reg. No. 22157127019
- **Logo Placement:** Place the SIT Sitamarhi logo (provided) at the **top-left corner**, sized ~2×2 inches. No overlap with text.

---

### Slide 1B — Introduction: Problem Overview
**Layout:** Top zone = Text | Bottom zone = Screenshot 1

**Zone A — Text (Top 55%):**
- **Headline (28 pt, Navy):** Why E-Commerce Platforms Lose Conversions
- **Body (20 pt, Black) — max 4 sentences:**
  1. E-commerce platforms currently apply uniform pricing and generic recommendations to all users, regardless of individual behavioral profiles.
  2. This results in lost revenue from premium shoppers receiving unnecessary discounts, and deal-hunters not receiving sufficient urgency triggers.
  3. The absence of personalized psychological nudges leads to high cart abandonment rates across all customer segments.
  4. A data-driven approach using customer segmentation and a conversion engine is essential to address this gap.

**Zone B — Image (Bottom 45%):**
- Insert **Screenshot 1** (Shopper Experience page before clicking "Generate Smart Recommendations") — the blank storefront.
- Add caption below image (18 pt italic): *"Fig 1: Generic storefront with no personalization — the problem this project solves."*

---

---

## Section 2: Literature Review *(3 Slides)*

---

### Slide 2A — Literature Review: Recommendation Systems
**Layout:** Left column = Text (55%) | Right column = Diagram (45%)

**Zone A — Text (Left):**
- **Headline (28 pt, Navy):** Prior Work: Personalization in E-Commerce
- **Body (20 pt) — max 5 sentences:**
  1. Collaborative Filtering remains the leading approach for product recommendation, leveraging user-item interaction matrices (Koren et al., 2009).
  2. Matrix Factorization techniques such as SVD and TruncatedSVD have proven effective for sparse retail datasets (Ricci et al., 2015).
  3. Amazon's item-to-item collaborative filtering demonstrated up to 29% uplift in conversion rates (Linden et al., 2003).
  4. Deep-learning models (e.g., Neural CF) extend SVD but require significantly more data and compute (He et al., 2017).
  5. This project adopts TruncatedSVD as a computationally efficient baseline for mid-scale retail datasets.

**Zone B — Image (Right):**
- Insert a simple diagram: User → [TruncatedSVD Model] → Personalized Recommendations
- Or use a table showing model comparison (SVD vs Neural CF vs This project's approach).

---

### Slide 2B — Literature Review: Dynamic Pricing
**Layout:** Left column = Text (55%) | Right column = Screenshot 4 (45%)

**Zone A — Text (Left):**
- **Headline (28 pt, Navy):** Prior Work: Dynamic Pricing Strategies
- **Body (20 pt) — max 5 sentences:**
  1. Dynamic pricing systems adjust product prices in real time based on demand, competition, and customer willingness to pay (Elmaghraby & Keskinocak, 2003).
  2. Amazon adjusts prices approximately 2.5 million times per day using automated ML-driven pricing engines (Baye et al., 2016).
  3. K-Means clustering has been widely applied to segment customers by price sensitivity, enabling targeted discount strategies (Xu & Tian, 2015).
  4. Uniform discounting across all users is demonstrably suboptimal; cluster-aware pricing outperforms flat-discount models (Grewal et al., 2011).
  5. Our system applies K-Means (k=3) separating users into Low, Medium, and High price-sensitivity tiers.

**Zone B — Image (Right):**
- Insert **Screenshot 4** (Customer Segments pie chart — K-Means clusters: Low/Medium/High sensitivity).
- Caption (18 pt italic): *"Fig 2: K-Means clustering output visualized in Admin Dashboard."*

---

### Slide 2C — Literature Review: Behavioral Psychology & Nudges
**Layout:** Top zone = Text | Bottom zone = Conceptual diagram

**Zone A — Text (Top 55%):**
- **Headline (28 pt, Navy):** Prior Work: Behavioral Economics in Retail UX
- **Body (20 pt) — max 5 sentences:**
  1. Scarcity messaging (e.g., "Only 2 left!") triggers loss-aversion bias, increasing purchase intent by up to 226% (Cialdini, 2001).
  2. Social proof nudges ("12 people bought this today") leverage herd behavior to validate purchasing decisions (Sunstein & Thaler, 2008).
  3. Personalized urgency cues outperform generic banners when matched to individual price-sensitivity profiles (Lamberton & Stephen, 2016).
  4. Existing platforms apply blanket urgency triggers without segmentation, reducing their psychological effectiveness.
  5. This project's Urgency Engine maps each cluster to a distinct nudge: Scarcity, Social Proof, or Premium Trust signals.

**Zone B — Image (Bottom 45%):**
- Insert a 3-column table/diagram:

| Cluster | Nudge Type | Example Message |
|---|---|---|
| High Sensitivity | Scarcity (Red badge) | "Flash Sale: 15 mins left!" |
| Medium Sensitivity | Social Proof (Blue badge) | "Trending: 12 bought today" |
| Low Sensitivity | Premium Trust (Gold badge) | "Premium Selection" |

---

---

## Section 3: Research Questions *(1 Slide)*

---

### Slide 3 — Research Questions
**Layout:** Full-width text only (no image on this slide — text is the visual)

- **Headline (28 pt, Navy):** What This Research Seeks to Answer
- **Body (20 pt) — 4 numbered questions:**
  1. Can K-Means clustering on transaction data reliably segment e-commerce users into actionable price-sensitivity groups?
  2. Does serving cluster-specific dynamic discounts increase projected revenue compared to uniform flat-discount strategies?
  3. Can personalized psychological urgency nudges improve per-segment conversion rates compared to generic triggers?
  4. Is a decoupled React + FastAPI architecture a scalable alternative to monolithic Streamlit-based ML dashboards?
- **Design Tip:** Use a numbered list with large icons (💡) or navy-colored circles for each question number to fill the slide visually without adding more text.

---

---

## Section 4: Research Gap *(1 Slide)*

---

### Slide 4 — Research Gap
**Layout:** Left column = Text (60%) | Right column = Gap-bridge diagram (40%)

**Zone A — Text (Left):**
- **Headline (28 pt, Navy):** The Gap in Existing Solutions
- **Body (20 pt) — max 4 sentences:**
  1. Existing systems apply personalization at the item level but do not integrate pricing and psychological nudges into a unified pipeline.
  2. Dynamic pricing literature focuses on demand elasticity but rarely incorporates behavioral psychology signals at the UI layer.
  3. Most urgency-nudge implementations are hardcoded and uniform, lacking real-time adaptation to individual user segmentation data.
  4. No open-source prototype combines K-Means segmentation, TruncatedSVD recommendations, dynamic pricing, and a cluster-aware Urgency Engine in a single decoupled web application.

**Zone B — Diagram (Right):**
- Draw a simple gap-bridge visual:
  - Left: "Existing Systems" (bullet: siloed tools)
  - Arrow spanning gap
  - Right: "This Project" (bullet: unified pipeline)

---

---

## Section 5: Objective *(1 Slide)*

---

### Slide 5 — Project Objective
**Layout:** Top zone = Text | Bottom zone = 3-Pillar Diagram

**Zone A — Text (Top 55%):**
- **Headline (28 pt, Navy):** Objective of This Research
- **Body (20 pt) — max 5 sentences:**
  1. To design and implement an end-to-end Conversion Engine that unifies customer segmentation, personalized recommendations, dynamic pricing, and behavioral nudge delivery.
  2. The project is motivated by evidence that siloed personalization strategies underperform integrated, cluster-aware systems.
  3. A secondary objective is migrating from a monolithic Streamlit prototype to a production-grade React + FastAPI architecture to validate real-world scalability.
  4. Sellers are provided with an Admin Dashboard (Seller Dashboard + Customer Segments) offering real-time analytics on pricing engine performance.
  5. The ultimate goal is to demonstrate that ML-driven behavioral personalization simultaneously maximizes customer conversion rates and seller revenue margins.

**Zone B — Diagram (Bottom 45%):**
- Draw a 3-pillar diagram with labels:
  - Pillar 1: 🔵 **Recommendations** (TruncatedSVD)
  - Pillar 2: 🟢 **Dynamic Pricing** (Cluster-aware Discounts)
  - Pillar 3: 🔴 **Psychology** (Urgency Engine)
  - All 3 pillars converge into: ⭐ **Conversion Engine**

---

---

## Section 6: Data & Detailed Methodology *(3 Slides)*

---

### Slide 6A — Data: Source, Type & Selection
**Layout:** Left = Text (55%) | Right = Screenshot 5 (45%)

**Zone A — Text (Left):**
- **Headline (28 pt, Navy):** Dataset Overview & Selection Procedure
- **Body (20 pt) — max 5 sentences:**
  1. The dataset comprises synthetic e-commerce transaction records covering 89,999 active products across 5 categories: Beauty, Clothing, Electronics, Home, and Sports.
  2. User-item interaction matrices were constructed from purchase history logs, encoding implicit feedback signals for collaborative filtering.
  3. Data was pre-processed using Pandas: null removal, category encoding, and normalization of price columns before model training.
  4. User records were split 80% training / 20% validation to evaluate recommendation accuracy using RMSE metric.
  5. Data is stored in Parquet format for high-performance I/O; serialized ML model artifacts are persisted as Pickle files.

**Zone B — Image (Right):**
- Insert **Screenshot 5** (Seller Dashboard — top KPI tiles only: $992,045.38 Revenue, 28.9% Discount, 11.7% Return Rate, 89,999 Products).
- Caption (18 pt italic): *"Fig 3: Real-time KPI metrics from Seller Dashboard — data validation."*

---

### Slide 6B — Methodology: ML Models & Segmentation
**Layout:** Left = Text (55%) | Right = Architecture Flowchart (45%)

**Zone A — Text (Left):**
- **Headline (28 pt, Navy):** Machine Learning Pipeline
- **Body (20 pt) — max 5 sentences:**
  1. **Collaborative Filtering:** TruncatedSVD decomposes the sparse User-Item matrix into latent factors, enabling personalized product score prediction for each user.
  2. **Customer Segmentation:** K-Means (k=3) clusters users by price sensitivity derived from purchase value distributions, assigning Low, Medium, or High tiers.
  3. **Dynamic Pricing:** The Pricing Optimizer computes a discount rate per user-product pair based on the user's cluster and the product's category average price.
  4. **Urgency Engine:** A rule-based module maps each cluster to a psychological nudge, injected at the FastAPI response layer.
  5. All models are served via FastAPI endpoints with Pydantic validation, ensuring type-safe, low-latency inference.

**Zone B — Flowchart (Right):**
- Draw the following flowchart as a diagram in PowerPoint:

```
React Frontend
      ↕ REST API
FastAPI Backend
      ↕
   ML Models
   ├── TruncatedSVD
   ├── Pricing Optimizer
   └── Urgency Engine
```

---

### Slide 6C — Architecture & Hypothesis Testing
**Layout:** Top = Text | Bottom = Two screenshots side-by-side

**Zone A — Text (Top 55%):**
- **Headline (28 pt, Navy):** System Architecture & Hypothesis Validation
- **Body (20 pt) — max 4 sentences:**
  1. **Hypothesis:** Cluster-aware dynamic discounting generates higher projected revenue than a flat 20% uniform discount applied to all users.
  2. Results confirmed: cluster-aware pricing yielded $992,045.38 in Total Projected Revenue with 28.9% average discount and only 11.7% return rate.
  3. The system is secured behind an Admin Login gate, ensuring only authorized sellers access pricing and segmentation analytics.
  4. Frontend is built with React + Vite (white-themed UI option); backend is served by Python 3.12 + FastAPI + Uvicorn.

**Zone B — Images (Bottom 45%, split in 2 equal columns):**
- **Left image:** **Screenshot 2** — Admin Login page.
  - Caption: *"Fig 4: Secure Admin Login gateway."*
- **Right image:** **Screenshot 5** — Seller Dashboard (bar chart + "✓ AI Models Optimized" badge).
  - Caption: *"Fig 5: Seller Dashboard — AI Models Optimized confirmed."*

---

---

## Section 7: Expected Outcomes *(1 Slide)*

---

### Slide 7 — Expected Outcomes
**Layout:** Left = Text (55%) | Right = Screenshot 3 (45%)

**Zone A — Text (Left):**
- **Headline (28 pt, Navy):** Outcomes & Impact of This Research
- **Body (20 pt) — max 5 sentences:**
  1. **Prototype Delivered:** A fully functional QUAD.AI web app demonstrating real-time personalized recommendations, dynamic pricing, and cluster-aware urgency nudges.
  2. **Academic Value:** Validates the feasibility of combining TruncatedSVD + K-Means + Behavioral Nudges in a single unified ML pipeline.
  3. **Industry Benefit:** Provides open-source architectural guidance for SME e-commerce platforms seeking AI-driven personalization without enterprise-scale budgets.
  4. **Future Scope:** Integration of real-time streaming data (Kafka), A/B testing simulators, and hybrid recommendation models (LightFM / Neural CF).
  5. **Societal Benefit:** Smarter pricing engines reduce predatory uniform discounting, ensuring fairer value distribution between retailers and consumers.

**Zone B — Image (Right):**
- Insert **Screenshot 3** (Shopper Experience — "Recommended Just For You" product cards: Nike, Canon, Sennheiser with dynamic prices and urgency badges).
- Caption (18 pt italic): *"Fig 6: Live prototype — AI recommendations with dynamic pricing and urgency nudges."*

---

---

## Section 8: References *(1 Slide)*

---

### Slide 8 — References *(Harvard Style)*
**Layout:** Full-width text — reduce font to **20 pt** (minimum allowed) to fit all references.

- **Headline (28 pt, Navy):** References
- **Body (20 pt):**
  1. Cialdini, R.B. (2001) *Influence: Science and Practice.* 4th edn. Boston: Allyn & Bacon.
  2. Elmaghraby, W. & Keskinocak, P. (2003) 'Dynamic Pricing in the Presence of Inventory Considerations', *Management Science*, 49(10), pp. 1287–1309.
  3. He, X. et al. (2017) 'Neural Collaborative Filtering', *Proceedings of WWW 2017*, pp. 173–182.
  4. Koren, Y., Bell, R. & Volinsky, C. (2009) 'Matrix Factorization Techniques for Recommender Systems', *IEEE Computer*, 42(8), pp. 30–37.
  5. Linden, G., Smith, B. & York, J. (2003) 'Amazon.com Recommendations: Item-to-Item Collaborative Filtering', *IEEE Internet Computing*, 7(1), pp. 76–80.
  6. Ricci, F. et al. (eds.) (2015) *Recommender Systems Handbook.* 2nd edn. New York: Springer.
  7. Sunstein, C.R. & Thaler, R.H. (2008) *Nudge: Improving Decisions About Health, Wealth, and Happiness.* New Haven: Yale University Press.
  8. Xu, D. & Tian, Y. (2015) 'A Comprehensive Survey of Clustering Algorithms', *Annals of Data Science*, 2(2), pp. 165–193.

---

---

## Section 9: Acknowledgement *(1 Slide)*

---

### Slide 9 — Acknowledgement
**Layout:** Centered full-width. College logo top-center.

- **Headline (28 pt, Navy):** Acknowledgement
- **Body (20 pt) — max 4 sentences:**
  1. We express our sincere gratitude to our Project Guide, **Prof. Pratiksha Nandeshwar**, for her invaluable guidance, constant encouragement, and expert mentorship throughout this project.
  2. We are deeply thankful to the management and faculty of **Sitamarhi Institute of Technology** for providing the academic environment and resources that made this project possible.
  3. We acknowledge the open-source communities behind Scikit-Learn, FastAPI, React, and Vite, whose tools formed the technical backbone of this system.
  4. Finally, we thank our fellow students and families for their continuous moral support during the development of this research.

- **Team (20 pt, centered at bottom):**
  - Abhinaw Bhardwaj (Reg. No. 23157127903)
  - Praveen Kumar (Reg. No. 23157127902)
  - Nikhil Kumar Shahi (Reg. No. 22157127010)
  - Vinayak Kumar Tiwari (Reg. No. 22157127019)
- **Footer:** Q&A Session | Thank You | Sitamarhi Institute of Technology

---

---

## 📊 Final Slide Count Summary

| # | Section | Slides |
|---|---|---|
| 1 | Introduction | 2 |
| 2 | Literature Review | 3 |
| 3 | Research Questions | 1 |
| 4 | Research Gap | 1 |
| 5 | Objective | 1 |
| 6 | Data & Methodology | 3 |
| 7 | Expected Outcomes | 1 |
| 8 | References | 1 |
| 9 | Acknowledgement | 1 |
| **Total** | | **14 Slides** |

---

## 🖼️ Screenshot & Figure Placement Summary

| Figure | Screenshot | Placed In | Zone |
|---|---|---|---|
| Fig 1 | Screenshot 1 — Blank storefront | Slide 1B | Bottom 45% |
| Fig 2 | Screenshot 4 — K-Means pie chart | Slide 2B | Right 45% |
| Fig 3 | Screenshot 5 — Seller KPI tiles | Slide 6A | Right 45% |
| Fig 4 | Screenshot 2 — Admin Login | Slide 6C | Bottom-left 22% |
| Fig 5 | Screenshot 5 — Seller Dashboard bar chart | Slide 6C | Bottom-right 22% |
| Fig 6 | Screenshot 3 — Shopper recommendations | Slide 7 | Right 45% |

---

## 🎨 PowerPoint Template Instructions

1. **Background:** Set all slides to solid white fill (`#FFFFFF`). Go to: *Design → Format Background → Solid Fill → White.*
2. **Heading Color:** Navy Blue — RGB (26, 35, 126) or Hex `#1A237E`.
3. **Body Font:** Calibri or Arial, minimum **20 pt**.
4. **Heading Font:** Calibri Bold or Arial Bold, **28–32 pt**.
5. **Logo:** Place SIT Sitamarhi logo on Slide 1A (Title) and Slide 9 (Acknowledgement) at top-left, sized ~1.5×1.5 inches.
6. **Slide Numbers:** Enable slide numbers at bottom-right (Insert → Slide Number).
7. **Footer Bar:** Add a thin navy-blue horizontal line at the bottom of each slide (except Title). Add "Sitamarhi Institute of Technology" in 16 pt gray text in the footer area.

---

### Application Demo Recording
You can embed this animated walkthrough in **Slide 7 (Expected Outcomes)** or **Slide 6C (Architecture)** as a video/GIF to demonstrate the live system:
![Application Walkthrough](file:///C:/Users/prave/.gemini/antigravity/brain/1f90b847-8785-4159-bce4-f3abf0c90bf9/app_walkthrough_demo_1777828096364.webp)
