# Task 2 – Modern E-Commerce Product Page (ShopEase)

A modern, responsive, and feature-rich e-commerce product web application built from scratch with **pure HTML5, CSS3, and Vanilla JavaScript (ES6+)**. Designed with a premium aesthetic inspired by Apple, Nike, and Amazon, localized for **Indian Rupee (INR – ₹)** currency.

---

## 🌟 Live Demo Preview & Key Highlights

- **Pure Vanilla Stack**: Built without React, Bootstrap, Tailwind, or external frontend frameworks.
- **Localized for India (INR – ₹)**: Accurate Indian currency formatting using the native JavaScript `Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })` API.
- **Realistic Indian Pricing**: Calibrated catalog pricing (e.g. Headphones at ₹24,990.00, Smartwatch at ₹4,999.00, Sneakers at ₹3,499.00, etc.).
- **Ultra-Responsive**: Seamless experience tailored for mobile devices, tablets, and wide desktop displays.
- **Dynamic Shopping Cart**: Slide-out drawer with quantity controls, subtotal/shipping calculations, promo code application, and `localStorage` persistence with automatic currency migration.
- **Product Details Modal**: High-resolution image preview, star ratings, in-depth feature specifications, and interactive quantity selectors.
- **Multi-Filter & Real-Time Search**: Filter by category (Electronics, Fashion, Accessories, Lifestyle), search by keyword, and sort by Price (Low/High), Ratings, or Discounts.
- **Interactive Wishlist**: Save favorite items with persistent local storage and instant "Move to Cart" action.
- **Free Shipping Progress Meter**: Live visual progress bar motivating customers toward the ₹999 free delivery threshold.
- **Simulated Checkout Flow**: Full checkout form with UPI/Card simulation and receipt confirmation with order ID.

---

## 📁 Project Directory Structure

```text
ecommerce-product-page/
│
├── index.html       # Semantic HTML5 markup, accessible landmarks, and modal templates
├── style.css        # Modern CSS3 layout with Grid, Flexbox, CSS Variables & Glassmorphism
├── script.js        # Vanilla JS logic: state management, event handling & localStorage (INR localized)
└── README.md        # Comprehensive documentation and setup guide
```

---

## 🚀 How to Run the Project Locally in VS Code

You can run this project directly in any modern browser without needing Node.js, databases, or a backend server.

### Option A: Using the VS Code "Live Server" Extension (Recommended)

1. **Open VS Code**.
2. Click **File** > **Open Folder...** and select the `ecommerce-product-page` folder (or the root project folder).
3. If not already installed, install the **Live Server** extension:
   - Press `Ctrl + Shift + X` (or `Cmd + Shift + X` on Mac) to open Extensions.
   - Search for **Live Server** (by *Ritwick Dey*) and click **Install**.
4. Right-click on `index.html` in the file explorer.
5. Select **"Open with Live Server"** (or click the **Go Live** button in the bottom right status bar).
6. Your default web browser will automatically open at `http://127.0.0.1:5500/index.html`.

### Option B: Direct Browser Open (Double Click)

1. Open your File Explorer (Windows) or Finder (Mac).
2. Navigate to `ecommerce-product-page`.
3. Double-click `index.html` (or right-click > **Open With** > **Google Chrome** / **Microsoft Edge** / **Firefox**).
4. The application will run immediately in your browser.

---

## 🎨 Design System & UI/UX Features

| Component | Design Details |
| :--- | :--- |
| **Color Palette** | Slate neutrals (`#0f172a`, `#475569`), Electric Indigo accents (`#4f46e5`, `#6366f1`), Emerald success (`#10b981`), Amber ratings (`#f59e0b`), and Rose sales badges (`#f43f5e`). |
| **Typography** | Google Fonts: **Plus Jakarta Sans** with clean letter-spacing, hierarchical weights (400, 600, 700, 800), and fluid readability. |
| **Currency** | Indian Rupee (`₹`) rendered with native browser localization (`en-IN`). |
| **Glassmorphism** | Frosted glass backdrops with `backdrop-filter: blur(14px)` on sticky navbar, promo pills, and modals. |
| **Micro-Interactions** | Smooth card elevations (`transform: translateY(-6px)`), ripple button feedback, pulse indicators, image scale zooms, and animated toast popups. |
| **Cart Drawer** | Slide-in drawer with smooth cubic-bezier transitions (`translateX(0)`), empty state graphics, and custom quantity stepper controls. |

---

## 🛒 Features & Functional Walkthrough

### 1. Navigation & Brand Identity
- **Brand Logo**: Custom `ShopEase` glowing bag logo.
- **Live Search**: Auto-filtering search input in both desktop and mobile drawer views.
- **Cart & Wishlist Badges**: Real-time numerical badge counters that update immediately when items are added or removed.
- **Mobile Menu**: Full touch-friendly slide-out drawer for smartphone viewports.

### 2. Hero & Value Propositions
- **Promotional Headline**: *"Discover Products You'll Truly Love"*.
- **Interactive Visual Showcase**: Floating bestseller spotlight card with customer review pills and fast "Quick Add" button.
- **Trust Badges**: 4-column value proposition row (Free Express Shipping over ₹999, 100% Secure Checkout, 30-Day Easy Returns, 24/7 Dedicated Support).

### 3. Catalog & Product Cards (INR Pricing)
- **Curated Selection**: 10 products spanning 4 categories:
  - **Sony WH-1000XM5 Wireless Headphones**: ₹24,990.00 (orig ₹29,990.00)
  - **Minimalist Leather Chrono Watch**: ₹4,999.00 (orig ₹6,999.00)
  - **Urban Performance Running Sneakers**: ₹3,499.00 (orig ₹4,499.00)
  - **Ergonomic Ceramic Coffee Mug & Warmer**: ₹1,299.00 (orig ₹1,799.00)
  - **Ultra-Slim Mechanical RGB Keyboard**: ₹4,299.00 (orig ₹5,499.00)
  - **Classic Polarized Wayfarer Sunglasses**: ₹1,999.00 (orig ₹2,499.00)
  - **Premium Organic Cotton Fleece Hoodie**: ₹2,199.00 (orig ₹2,799.00)
  - **Smart Insulated Hydro Flask 32oz**: ₹1,499.00 (orig ₹1,999.00)
  - **Noise-Canceling Studio Earbuds Pro**: ₹9,999.00 (orig ₹12,999.00)
  - **Handcrafted Vintage Leather Backpack**: ₹3,799.00 (orig ₹4,999.00)
- **Card Badges**: `BESTSELLER`, `28% OFF`, `NEW`, `HOT DEAL`, `ECO FRIENDLY`.
- **Pricing**: Clear display of current sale price in `₹` with strikethrough original price and discount percentage tag.
- **Star Ratings**: Dynamic calculation of full, half, and empty star icons based on rating score.

### 4. Interactive Product Details Modal
- Click on any product card or the **Quick View** button to open the detailed modal.
- Includes high-resolution imagery, full product description, bulleted feature specifications, stock readiness status, quantity selector (`-` and `+` buttons), and direct **Add to Cart** action.

### 5. Shopping Cart & LocalStorage
- **Persistent Data**: Saves cart items to `localStorage` with automatic USD-to-INR migration so past sessions update cleanly without loss of cart contents.
- **Live Calculation**:
  - Subtotal automatically recalculates in INR with quantity changes.
  - Free shipping indicator dynamically tracks how much more to add for free shipping (threshold: `₹999.00`).
  - Standard delivery charge of `₹99.00` applies if under threshold.
- **Promo Coupon Engine**:
  - Enter `SHOPEASE20` for **20% OFF**.
  - Enter `SPRING40` for **40% OFF**.
  - Enter `TECH20` for **20% OFF**.
- **Quantity Controls**: Increment, decrement (removes on 0), or manually set quantities up to 99 items.
- **Empty Cart Handling**: Friendly illustration with a quick **"Start Shopping"** button that automatically scrolls to the catalog.

### 6. Checkout Simulation
- Click **Proceed to Checkout** to open a checkout modal with customer shipping fields and simulated Indian payment options (UPI / Credit / Debit Card, Net Banking, Cash on Delivery).
- Submitting the form validates inputs and displays an **Order Confirmation Receipt** with a unique order number (`#SE-XXXXX`), payment summary in `₹`, and estimated delivery timeframe.

### 7. Wishlist System
- Click the heart icon on any product card or in the product modal to toggle the wishlist.
- Open the **Saved Wishlist Drawer** to review saved items and move them directly into your shopping cart.

### 8. Toast Notification System
- Non-obtrusive floating toast notifications appear for all key actions:
  - *"Added to Cart!"*
  - *"Item Removed"*
  - *"Coupon Applied!"*
  - *"Added to Wishlist"*
  - *"Coupon Copied to Clipboard"*

---

## 🛠️ Technical Stack & Implementation

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), ARIA attributes, and accessible labels.
- **CSS3**: CSS Custom Properties (`:root`), Flexbox, CSS Grid (`grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`), Media Queries, Keyframe Animations.
- **JavaScript (ES6+)**: `Intl.NumberFormat` localized formatting, module pattern, array methods (`map`, `filter`, `reduce`, `find`, `findIndex`), Web Storage API (`localStorage`), Clipboard API (`navigator.clipboard`).

---

## 👨‍💻 Developer Information

- **Project**: Internship Web Development Task 2 – E-Commerce Product Page
- **Company Brand**: ShopEase Inc.
- **Currency Standard**: Indian Rupee (INR – ₹)
- **Built with**: Pure HTML5, CSS3, & Vanilla JavaScript.
