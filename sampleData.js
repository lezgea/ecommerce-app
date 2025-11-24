// Sample Products Data for Firestore
// Copy these documents into your Firestore 'products' collection

export const sampleProducts = [
  // Electronics
  {
    title: "Wireless Headphones",
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and commuters.",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    price: 199.99,
    category: "Electronics"
  },
  {
    title: "Smart Watch Pro",
    description: "Advanced fitness tracking, heart rate monitoring, GPS, and smartphone notifications. Water-resistant design with 7-day battery life.",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    price: 349.99,
    category: "Electronics"
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable waterproof speaker with 360-degree sound, 12-hour battery, and built-in microphone for hands-free calls.",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    price: 79.99,
    category: "Electronics"
  },
  {
    title: "Laptop Stand",
    description: "Ergonomic aluminum laptop stand with adjustable height and angle. Compatible with all laptop sizes from 10 to 17 inches.",
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    price: 39.99,
    category: "Electronics"
  },
  {
    title: "Wireless Mouse",
    description: "Precision wireless mouse with ergonomic design, 6 programmable buttons, and long-lasting battery. Works on any surface.",
    imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    price: 29.99,
    category: "Electronics"
  },

  // Clothing
  {
    title: "Classic Denim Jacket",
    description: "Timeless denim jacket with vintage wash. Made from premium cotton denim with button closure and chest pockets.",
    imageUrl: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=500",
    price: 89.99,
    category: "Clothing"
  },
  {
    title: "Cotton T-Shirt Pack",
    description: "Pack of 3 premium cotton t-shirts in assorted colors. Soft, breathable, and machine washable. Regular fit.",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    price: 39.99,
    category: "Clothing"
  },
  {
    title: "Running Shoes",
    description: "Lightweight running shoes with cushioned sole and breathable mesh upper. Designed for comfort during long runs.",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    price: 119.99,
    category: "Clothing"
  },
  {
    title: "Winter Coat",
    description: "Warm and stylish winter coat with water-resistant outer layer and cozy inner lining. Multiple pockets for storage.",
    imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500",
    price: 149.99,
    category: "Clothing"
  },
  {
    title: "Casual Sneakers",
    description: "Versatile casual sneakers perfect for everyday wear. Comfortable cushioned insole and durable rubber outsole.",
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    price: 79.99,
    category: "Clothing"
  },

  // Books
  {
    title: "The Art of Programming",
    description: "Comprehensive guide to modern software development practices. Covers algorithms, data structures, and design patterns with real-world examples.",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500",
    price: 49.99,
    category: "Books"
  },
  {
    title: "Mindfulness for Beginners",
    description: "Learn meditation and mindfulness techniques to reduce stress and improve mental clarity. Includes practical exercises and guided meditations.",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
    price: 24.99,
    category: "Books"
  },
  {
    title: "Cooking Mastery",
    description: "Master chef's collection of 200+ recipes from around the world. Includes step-by-step instructions and professional cooking tips.",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    price: 34.99,
    category: "Books"
  },
  {
    title: "Business Strategy Guide",
    description: "Essential strategies for building and growing successful businesses. Learn from real case studies and expert insights.",
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500",
    price: 39.99,
    category: "Books"
  },
  {
    title: "Fiction: The Journey",
    description: "Award-winning novel about adventure, friendship, and self-discovery. A compelling story that will keep you turning pages.",
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500",
    price: 19.99,
    category: "Books"
  }
];

// Instructions:
// 1. Go to Firebase Console → Firestore Database
// 2. Create a collection named "products"
// 3. Add each product as a new document (Firebase will auto-generate IDs)
// 4. Copy the fields from each product object above
