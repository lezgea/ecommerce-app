# Setup and Demo Guide

## Quick Start Guide

### 1. Installation (5 minutes)

```bash
# Navigate to project directory
cd ECommerceApp

# Install dependencies
npm install

# Start the development server
npm start
```

### 2. Firebase Setup (10 minutes)

#### Create Firebase Project
1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Name it "ECommerceApp" (or your preferred name)
4. Disable Google Analytics (optional)
5. Click "Create project"

#### Enable Authentication
1. In Firebase Console, go to **Authentication**
2. Click "Get started"
3. Click **Email/Password** under Sign-in method
4. Toggle **Enable** and click Save

#### Set Up Firestore Database
1. In Firebase Console, go to **Firestore Database**
2. Click "Create database"
3. Select **Start in test mode** (we'll add rules later)
4. Choose a location (closest to your users)
5. Click "Enable"

#### Add Firebase Config to App
1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to "Your apps"
3. Click the **Web** icon (</>)
4. Register app with nickname "ECommerceApp"
5. Copy the firebaseConfig object
6. In your project, copy `firebaseConfig.template.js` to `firebaseConfig.js`
7. Replace the placeholder values with your Firebase config

#### Add Sample Products
1. In Firestore Database, click "Start collection"
2. Collection ID: `products`
3. Add documents using the data from `sampleData.js`
4. Add at least 5-10 products across different categories

For each product, add these fields:
- **title** (string): "Wireless Headphones"
- **description** (string): "Premium wireless headphones..."
- **imageUrl** (string): "https://images.unsplash.com/..."
- **price** (number): 199.99
- **category** (string): "Electronics" | "Clothing" | "Books"

#### Set Up Firestore Security Rules
1. Go to **Firestore Database** → **Rules**
2. Copy the rules from `firestore.rules` file
3. Click "Publish"

### 3. Run the App

```bash
npm start
```

Options:
- Press **i** for iOS Simulator (Mac only)
- Press **a** for Android Emulator
- Scan QR code with **Expo Go** app on your phone

---

## Demo Script

### Demo Flow (Complete User Journey)

#### 1. Registration (2 minutes)
- Open the app → See Login screen
- Tap "Don't have an account? Register"
- Fill in:
  - First Name: "John"
  - Last Name: "Doe"
  - Email: "john.doe@example.com"
  - Password: "password123"
  - Confirm Password: "password123"
- Tap "Register"
- User is automatically logged in

#### 2. Browse Products (2 minutes)
- Lands on **Home** screen showing all products
- Demonstrate search:
  - Type "headphones" in search bar
  - Shows filtered results
  - Clear search
- Demonstrate category filtering:
  - Tap "Electronics" category
  - Only electronics shown
  - Tap "Clothing" category
  - Only clothing shown
  - Tap "All" to see all products

#### 3. View Product Details (1 minute)
- Tap on any product (e.g., "Wireless Headphones")
- Shows:
  - Large product image
  - Title and price
  - Category badge
  - Full description
  - "Add to Cart" button

#### 4. Add to Cart (1 minute)
- Tap "Add to Cart" button
- Alert appears: "Added to Cart"
- Choose "View Cart" or "Continue Shopping"
- If continuing, add 2-3 more products to cart

#### 5. Shopping Cart (2 minutes)
- Navigate to **Cart** tab (bottom navigation)
- Shows all cart items with:
  - Product image, name, price
  - Quantity controls
- Demonstrate:
  - Tap **+** to increase quantity
  - Tap **-** to decrease quantity
  - Tap "Remove" to delete item
- Cart total updates automatically
- Tap "Proceed to Checkout"

#### 6. Checkout - Address (2 minutes)
- **Delivery Address** screen appears
- If no saved addresses:
  - Tap "+ Add New Address"
  - Fill in:
    - Street Address: "123 Main St"
    - City: "New York"
    - State: "NY"
    - Zip Code: "10001"
  - Tap "Save"
- Address appears in list with radio button
- Select the address
- Tap "Continue to Payment"

#### 7. Checkout - Payment (1 minute)
- **Payment Method** screen appears
- Shows selected delivery address
- Select payment method:
  - Credit/Debit Card 💳
  - PayPal 🅿️
  - Cash on Delivery 💵
- Select "Credit/Debit Card"
- Tap "Place Order"

#### 8. Order Confirmation (1 minute)
- **Order Confirmed!** screen with checkmark ✓
- Shows:
  - Success message
  - Order summary with all items
  - Total amount
  - Delivery address
  - Payment method
- Tap "Continue Shopping"
- Returns to Home screen
- Cart is now empty

#### 9. User Profile (3 minutes)
- Navigate to **Profile** tab
- Shows:
  - User avatar with initials (JD)
  - Full name: "John Doe"
  - Email: "john.doe@example.com"

**Manage Addresses:**
- Tap "Manage Addresses"
- Shows saved address(es)
- Demonstrate:
  - Tap "Set Default" on an address
  - Tap "+ Add New Address" to add another
  - Tap "Delete" to remove an address
- Go back to Profile

**Order History:**
- Tap "Order History"
- Shows the order just placed
- Display:
  - Order number (#123456)
  - Date
  - Total amount
  - Status: "Confirmed"
- Tap on the order to expand details
- Shows:
  - All items purchased
  - Delivery address
  - Payment method
- Go back to Profile

**About Page:**
- Tap "About"
- Shows:
  - App version
  - Company information
  - Features list
  - Contact details

**Help Page:**
- Tap "Help & Support"
- Shows:
  - FAQ section with common questions
  - Contact support options (email, phone)
  - Support hours

#### 10. Search & Filtering (1 minute)
- Navigate back to **Home** tab
- Test search:
  - Search "book" → Shows books
  - Search "shirt" → Shows clothing items
  - Search "wireless" → Shows electronics
- Test categories:
  - Select "Books" → Shows only books
  - Select "All" → Shows all products

#### 11. Logout (1 minute)
- Navigate to **Profile** tab
- Scroll down
- Tap red "Logout" button
- Confirm logout
- Returns to Login screen

---

## Video Recording Checklist

### Pre-Recording Setup
- [ ] Install dependencies: `npm install`
- [ ] Configure Firebase in `firebaseConfig.js`
- [ ] Add at least 10 products to Firestore
- [ ] Set up Firestore security rules
- [ ] Test the app once to ensure everything works
- [ ] Close all unnecessary apps/notifications
- [ ] Start screen recording

### Recording Script (15-20 minutes total)

**[0:00 - 0:30] Introduction**
- "Hi, I'm demonstrating a complete E-Commerce app built with React Native and Firebase"
- Show the project structure briefly

**[0:30 - 2:00] Registration**
- Fill in registration form
- Show successful registration

**[2:00 - 4:00] Browse Products**
- Scroll through products
- Show search functionality
- Demonstrate category filtering

**[4:00 - 5:00] Product Details**
- Open a product
- Show all details
- Add to cart

**[5:00 - 7:00] Shopping Cart**
- Show cart with items
- Adjust quantities
- Remove an item
- Show total calculation

**[7:00 - 9:00] Checkout Process**
- Add delivery address
- Select payment method
- Complete order

**[9:00 - 10:00] Order Confirmation**
- Show confirmation screen
- Verify cart is cleared

**[10:00 - 13:00] Profile Features**
- Show profile information
- Manage addresses
- View order history (expand order details)

**[13:00 - 14:00] About & Help**
- Open About page
- Open Help page
- Show support information

**[14:00 - 15:00] Additional Features**
- Search different products
- Filter by different categories
- Show smooth navigation

**[15:00 - 15:30] Logout**
- Logout from the app
- Show return to login screen

**[15:30 - 16:00] Conclusion**
- "This app includes all required features: authentication, product catalog, shopping cart, checkout, and user profile management"

---

## Troubleshooting Common Issues

### Firebase Connection Issues
```
Error: Firebase not initialized
```
**Solution:** Check that `firebaseConfig.js` exists and has correct credentials

### Products Not Showing
```
Empty product list
```
**Solution:** 
1. Verify products added to Firestore
2. Check Firestore rules allow read access
3. Ensure you're logged in

### Authentication Errors
```
Firebase: Error (auth/...)
```
**Solution:**
- Enable Email/Password authentication in Firebase Console
- Check internet connection
- Verify API key is correct

### Navigation Errors
```
Cannot navigate to undefined
```
**Solution:**
- Run: `expo start -c` (clear cache)
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Cart Not Persisting
```
Cart empty after app restart
```
**Solution:**
- AsyncStorage requires permissions on some devices
- Check console for AsyncStorage errors
- This is expected behavior - cart persists only during session

---

## Testing Checklist

- [ ] Registration with all fields
- [ ] Registration validation (password mismatch, missing fields)
- [ ] Login with correct credentials
- [ ] Login with incorrect credentials
- [ ] Browse all products
- [ ] Search functionality
- [ ] Category filtering (All, Electronics, Clothing, Books)
- [ ] View product details
- [ ] Add products to cart
- [ ] Update quantities in cart
- [ ] Remove items from cart
- [ ] Cart total calculation
- [ ] Add new address during checkout
- [ ] Select delivery address
- [ ] Select payment method
- [ ] Complete order
- [ ] View order confirmation
- [ ] View order history
- [ ] Add address from profile
- [ ] Set default address
- [ ] Delete address
- [ ] View About page
- [ ] View Help page
- [ ] Logout
- [ ] Navigation between all tabs

---

## Firebase Console Setup Images Reference

### Authentication Setup
1. Firebase Console → Authentication → Sign-in method
2. Enable Email/Password provider

### Firestore Setup
1. Firebase Console → Firestore Database
2. Create "products" collection
3. Add product documents with required fields

### Security Rules
1. Firestore Database → Rules tab
2. Paste rules from `firestore.rules`
3. Publish

---

## Additional Notes

- The app uses **test mode** for Firestore (suitable for demo)
- For production, implement proper security rules
- Payment processing is **simulated** (no real transactions)
- Images use Unsplash URLs (free stock photos)
- Cart persists using AsyncStorage (cleared on logout)
- Order history stored in Firestore user document

---

## Support

If you encounter issues during setup or demo:
1. Check the README.md for detailed instructions
2. Verify all Firebase settings
3. Ensure all dependencies are installed
4. Check console logs for specific errors
5. Try clearing cache: `expo start -c`

**Good luck with your demo! 🚀**
