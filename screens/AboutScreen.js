import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About ECommerceApp</Text>
        
        <Text style={styles.version}>Version 1.0.0</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.text}>
            ECommerceApp is your one-stop shop for all your shopping needs. 
            We offer a wide range of products across multiple categories including 
            Electronics, Clothing, and Books.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.text}>
            To provide customers with a seamless shopping experience, offering 
            quality products at competitive prices with excellent customer service.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <Text style={styles.bulletPoint}>• Browse products by category</Text>
          <Text style={styles.bulletPoint}>• Search and filter functionality</Text>
          <Text style={styles.bulletPoint}>• Secure authentication</Text>
          <Text style={styles.bulletPoint}>• Easy checkout process</Text>
          <Text style={styles.bulletPoint}>• Order tracking</Text>
          <Text style={styles.bulletPoint}>• Multiple address management</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <Text style={styles.text}>
            Email: support@ecommerceapp.com{'\n'}
            Phone: 1-800-SHOP-NOW{'\n'}
            Website: www.ecommerceapp.com
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025 ECommerceApp. All rights reserved.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  version: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#666',
    lineHeight: 28,
    paddingLeft: 10,
  },
  footer: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
  },
});
