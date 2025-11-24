import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OrderConfirmationScreen = ({ route, navigation }) => {
    const { order } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Ionicons name="checkmark-circle" size={100} color="#4CAF50" />
                </View>

                <Text style={styles.title}>Order Placed Successfully!</Text>
                <Text style={styles.subtitle}>Thank you for your purchase</Text>

                <View style={styles.orderDetails}>
                    <Text style={styles.detailLabel}>Order Total:</Text>
                    <Text style={styles.detailValue}>${order.total.toFixed(2)}</Text>

                    <Text style={styles.detailLabel}>Status:</Text>
                    <Text style={styles.detailValue}>{order.status}</Text>

                    <Text style={styles.detailLabel}>Items:</Text>
                    <Text style={styles.detailValue}>{order.items.length} items</Text>
                </View>

                <Text style={styles.message}>
                    You will receive an email confirmation shortly.
                </Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Products')}
                >
                    <Text style={styles.buttonText}>Continue Shopping</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.secondaryButton]}
                    onPress={() => navigation.navigate('Profile', { screen: 'OrderHistory' })}
                >
                    <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                        View Orders
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconContainer: {
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },
    orderDetails: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    detailLabel: {
        fontSize: 14,
        color: '#999',
        marginBottom: 5,
    },
    detailValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    message: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    footer: {
        padding: 20,
    },
    button: {
        backgroundColor: '#A277BA',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#A277BA',
    },
    secondaryButtonText: {
        color: '#A277BA',
    },
});

export default OrderConfirmationScreen;