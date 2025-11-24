# E-Commerce Mobile App – Project Specification

## Technology Stack
- React Native (Expo recommended)
- Firebase (Authentication + Firestore for Data Storage)

## Project Goal
Build a functional, multi-screen mobile application that simulates a basic e-commerce shopping experience using React Native and Firebase.

---

## 1️⃣ Authentication Module
- **Register** with email + password (validate email & min password length).  
- **Login** redirects to Product Listing Page.  
- **Logout** button/menu logs out user and returns to Login.  
- Must use **Firebase Authentication**.

---

## 2️⃣ Product Catalog & Search
- **Homepage** lists all products (name, price, image).  
- Data stored in **Firestore**.  
- **3 categories** (e.g. Electronics, Books, Apparel).  
- **Category filter** + **search bar** filters by name/description.  
- **Product detail page** shows full info and “Add to Cart”.

---

## 3️⃣ Shopping Cart & Checkout
- **Add to Cart** from detail page.  
- **Cart View** lists items with quantity controls and removal.  
- **Total calculation** for subtotal.  
- **Checkout Flow:** address → payment (dummy) → confirmation screen.

---

## 4️⃣ User Profile & Account Management
- **Profile Screen** shows user details.  
- **Address Management:** multiple addresses, default selectable.  
- **Order History:** list of previous orders (date, total, status).  
- **Payment Methods:** dummy selection only.

---

## 5️⃣ Static Pages & Navigation
- Use **Bottom Tab Navigator** (Products / Cart / Profile).  
- Add simple **About** and **Help & Support** pages.

---

## 📦 Deliverables
1. **Source Code** (zipped).  
2. **Demo Video** (≤ 10 min) showing all features.

---

## 🧮 Grading Highlights
- Setup & Structure – 10 pts  
- Firebase Auth – 20 pts  
- Product Catalog – 25 pts  
- Cart & Order Flow – 20 pts  
- Profile & Persistence – 15 pts  
- UI/UX & Polish – 10 pts  
_Total = 100 pts_
