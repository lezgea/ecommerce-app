// src/screens/Static/AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AboutScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Ionicons name="storefront" size={80} color="#A277BA" />
                </View>

                <Text style={styles.appName}>E-Commerce Mobile App</Text>
                <Text style={styles.version}>Version 1.0.0</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About This App</Text>
                    <Text style={styles.text}>
                        This is a full-featured e-commerce mobile application built with React Native and Firebase.
                        The app provides a complete shopping experience with product browsing, cart management,
                        and order tracking.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Features</Text>
                    <Text style={styles.text}>
                        • User Authentication{'\n'}
                        • Product Catalog & Search{'\n'}
                        • Shopping Cart Management{'\n'}
                        • Multiple Address Support{'\n'}
                        • Order History & Tracking{'\n'}
                        • Secure Checkout Process
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Technologies</Text>
                    <Text style={styles.text}>
                        • React Native (Expo){'\n'}
                        • Firebase Authentication{'\n'}
                        • Firebase Firestore{'\n'}
                        • React Navigation
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    iconContainer: {
        marginVertical: 30,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    version: {
        fontSize: 16,
        color: '#999',
        marginBottom: 30,
    },
    section: {
        width: '100%',
        marginBottom: 25,
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
});

export default AboutScreen;