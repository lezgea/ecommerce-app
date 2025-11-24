import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function HelpScreen() {
  const handleEmail = () => {
    Linking.openURL('mailto:support@ecommerceapp.com');
  };

  const handlePhone = () => {
    Linking.openURL('tel:1-800-746-7669');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Help & Support</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          
          <View style={styles.faqItem}>
            <Text style={styles.question}>How do I place an order?</Text>
            <Text style={styles.answer}>
              Browse products, add items to your cart, and proceed to checkout. 
              Enter your delivery address and select a payment method to complete your order.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>How can I track my order?</Text>
            <Text style={styles.answer}>
              Go to your Profile → Order History to view all your past orders and their status.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>Can I cancel my order?</Text>
            <Text style={styles.answer}>
              Orders can be cancelled within 24 hours of placement. 
              Contact customer support for assistance.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>What payment methods are accepted?</Text>
            <Text style={styles.answer}>
              We accept credit/debit cards, PayPal, and cash on delivery.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>How do I add multiple addresses?</Text>
            <Text style={styles.answer}>
              Go to Profile → Manage Addresses to add, edit, or delete delivery addresses.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>What is your return policy?</Text>
            <Text style={styles.answer}>
              We offer a 30-day return policy on most items. 
              Products must be unused and in original packaging.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Support</Text>
          <Text style={styles.text}>
            Need more help? Our support team is here for you!
          </Text>
          
          <TouchableOpacity style={styles.contactButton} onPress={handleEmail}>
            <Text style={styles.contactIcon}>✉️</Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>support@ecommerceapp.com</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactButton} onPress={handlePhone}>
            <Text style={styles.contactIcon}>📞</Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactValue}>1-800-SHOP-NOW</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.hoursBox}>
            <Text style={styles.hoursTitle}>Support Hours</Text>
            <Text style={styles.hoursText}>Monday - Friday: 9 AM - 6 PM EST</Text>
            <Text style={styles.hoursText}>Saturday: 10 AM - 4 PM EST</Text>
            <Text style={styles.hoursText}>Sunday: Closed</Text>
          </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  faqItem: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  answer: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  contactIcon: {
    fontSize: 28,
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  contactValue: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  hoursBox: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  hoursTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  hoursText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
});
