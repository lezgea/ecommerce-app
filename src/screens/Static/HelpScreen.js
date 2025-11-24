// src/screens/Static/HelpScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HelpScreen = () => {
    const openEmail = () => {
        Linking.openURL('mailto:support@ecommerce.com');
    };

    const openPhone = () => {
        Linking.openURL('tel:+1234567890');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

                    <View style={styles.faqItem}>
                        <Text style={styles.question}>How do I track my order?</Text>
                        <Text style={styles.answer}>
                            Go to Profile {'>'} Order History to view all your orders and their current status.
                        </Text>
                    </View>

                    <View style={styles.faqItem}>
                        <Text style={styles.question}>How can I change my delivery address?</Text>
                        <Text style={styles.answer}>
                            Navigate to Profile {'>'} Manage Addresses to add, edit, or remove delivery addresses.
                        </Text>
                    </View>

                    <View style={styles.faqItem}>
                        <Text style={styles.question}>What payment methods are accepted?</Text>
                        <Text style={styles.answer}>
                            We accept Credit Cards, Debit Cards, PayPal, and Cash on Delivery.
                        </Text>
                    </View>

                    <View style={styles.faqItem}>
                        <Text style={styles.question}>How do I cancel an order?</Text>
                        <Text style={styles.answer}>
                            Contact our support team within 1 hour of placing your order for cancellation.
                        </Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Contact Support</Text>

                    <TouchableOpacity style={styles.contactItem} onPress={openEmail}>
                        <Ionicons name="mail" size={24} color="#A277BA" />
                        <View style={styles.contactText}>
                            <Text style={styles.contactLabel}>Email</Text>
                            <Text style={styles.contactValue}>support@ecommerce.com</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contactItem} onPress={openPhone}>
                        <Ionicons name="call" size={24} color="#A277BA" />
                        <View style={styles.contactText}>
                            <Text style={styles.contactLabel}>Phone</Text>
                            <Text style={styles.contactValue}>+1 (234) 567-890</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="#999" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        padding: 20,
    },
    section: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    faqItem: {
        marginBottom: 20,
    },
    question: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    answer: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    contactText: {
        flex: 1,
        marginLeft: 15,
    },
    contactLabel: {
        fontSize: 14,
        color: '#999',
        marginBottom: 3,
    },
    contactValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
});

export default HelpScreen;