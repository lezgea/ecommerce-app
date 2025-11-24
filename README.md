# ECommerce React Native App

A complete e-commerce mobile application built with React Native (Expo) and Firebase.

## Features

✅ **Authentication**
- User registration with first name, last name, email, and password
- Login with email and password
- Persistent authentication
- Secure logout

✅ **Product Catalog**
- Browse products with images, names, and prices
- Three categories: Electronics, Clothing, Books
- Category filtering
- Search by name or description
- Detailed product view with full-size images

✅ **Shopping Cart**
- Add products to cart
- Quantity controls (increment/decrement)
- Remove items from cart
- Automatic total calculation
- Cart persistence

✅ **Checkout Process**
- Address selection/management
- Add new addresses during checkout
- Mock payment method selection (Card, PayPal, Cash on Delivery)
- Order confirmation screen

✅ **User Profile**
- Display user name and email
- Address management (add, delete, set default)
- Order history with full details
- View past orders with items, dates, and totals

✅ **Navigation**
- Bottom tab navigation (Home, Cart, Profile)
- Stack navigation within each tab
- About and Help pages

## Project Structure

```
ECommerceApp/
├── App.js                      # Main app component
├── package.json                # Dependencies
├── app.json                    # Expo configuration
├── babel.config.js             # Babel configuration
├── firebaseConfig.template.js  # Firebase config template
├── contexts/
│   ├── AuthContext.js         # Authentication context
│   └── CartContext.js         # Shopping cart context
├── navigation/
│   └── AppNavigator.js        # Navigation setup
└── screens/
    ├── LoginScreen.js         # Login screen
    ├── RegisterScreen.js      # Registration screen
    ├── HomeScreen.js          # Product listing
    ├── ProductDetailScreen.js # Product details
    ├── CartScreen.js          # Shopping cart
    ├── CheckoutAddressScreen.js # Address selection
    ├── CheckoutPaymentScreen.js # Payment method
    ├── OrderConfirmationScreen.js # Order confirmation
    ├── ProfileScreen.js       # User profile
    ├── ManageAddressesScreen.js # Address management
    ├── OrderHistoryScreen.js  # Order history
    ├── AboutScreen.js         # About page
    └── HelpScreen.js          # Help page
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- A Firebase project

### Step 1: Install Dependencies

```bash
cd ECommerceApp
npm install
```

### Step 2: Configure Firebase

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Authentication (Email/Password provider)
3. Create a Firestore database
4. Copy `firebaseConfig.template.js` to `firebaseConfig.js`
5. Add your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Step 3: Set Up Firestore

Create two collections in your Firestore database:

#### Products Collection

Add sample products to the `products` collection. Example document:

```json
{
  "title": "Wireless Headphones",
  "description": "High-quality wireless headphones with noise cancellation",
  "imageUrl": "https://example.com/image.jpg",
  "price": 99.99,
  "category": "Electronics"
}
```

Create at least 3-5 products across different categories (Electronics, Clothing, Books).

#### Users Collection

This will be created automatically when users register. Structure:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "addresses": [],
  "orderHistory": [],
  "createdAt": "2025-11-17T..."
}
```

### Step 4: Run the App

```bash
npm start
```

This will start the Expo development server. You can then:

- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan the QR code with Expo Go app on your physical device

## Data Models

### User Document (`users/{uid}`)
```javascript
{
  firstName: string,
  lastName: string,
  email: string,
  addresses: [
    {
      id: string,
      line1: string,
      city: string,
      state: string,
      zipCode: string,
      default: boolean
    }
  ],
  orderHistory: [
    {
      id: string,
      date: string,
      total: number,
      items: [...],
      address: {...},
      paymentMethod: string,
      status: string
    }
  ]
}
```

### Product Document (`products/{id}`)
```javascript
{
  title: string,
  description: string,
  imageUrl: string,
  price: number,
  category: string
}
```

## Screen Flow

1. **Welcome → Login/Register**
2. **Home** → Browse products → **Product Details** → Add to Cart
3. **Cart** → Review items → **Checkout (Address)** → **Checkout (Payment)** → **Order Confirmation**
4. **Profile** → Manage Addresses / Order History / About / Help

## Technologies Used

- **React Native (Expo)** - Mobile framework
- **Firebase Authentication** - User authentication
- **Firestore** - Cloud database
- **React Navigation** - Navigation library
- **AsyncStorage** - Local storage for cart

## Notes

- Make sure to add real product images with valid URLs in Firestore
- The app uses mock payment processing (no real transactions)
- Cart data persists locally using AsyncStorage
- Order history and addresses are stored in Firestore

## Troubleshooting

**Firebase errors:**
- Ensure Firebase configuration is correct in `firebaseConfig.js`
- Check that Email/Password authentication is enabled in Firebase Console
- Verify Firestore rules allow read/write for authenticated users

**Navigation errors:**
- Make sure all dependencies are installed
- Clear cache: `expo start -c`

**Cart not persisting:**
- AsyncStorage might need permissions on certain devices
- Check console for any AsyncStorage errors

## Future Enhancements

- Real payment gateway integration
- Push notifications for orders
- Product reviews and ratings
- Wishlist functionality
- Social media login
- Order tracking with real-time updates

## License

MIT License - feel free to use this project for learning purposes.
