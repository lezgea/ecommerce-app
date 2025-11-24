// src/screens/Cart/CheckoutScreen.js
import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert,
    ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';

const CheckoutScreen = ({ navigation }) => {
    const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [loading, setLoading] = useState(true);

    const paymentMethods = [
        { id: 1, name: 'Credit Card', icon: 'card' },
        { id: 2, name: 'Debit Card', icon: 'card-outline' },
        { id: 3, name: 'PayPal', icon: 'logo-paypal' },
        { id: 4, name: 'Cash on Delivery', icon: 'cash' }
    ];

    useEffect(() => {
        fetchAddresses();
    }, []);

    const fetchAddresses = async () => {
        try {
            const q = query(collection(db, 'addresses'), where('userId', '==', user.uid));
            const querySnapshot = await getDocs(q);
            const addressData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setAddresses(addressData);

            const defaultAddr = addressData.find(addr => addr.isDefault);
            if (defaultAddr) {
                setSelectedAddress(defaultAddr);
            } else if (addressData.length > 0) {
                setSelectedAddress(addressData[0]);
            }

            setLoading(false);
        } catch (error) {
            console.error('Error fetching addresses:', error);
            setLoading(false);
        }
    };

    const handlePlaceOrder = async () => {
        if (!selectedAddress) {
            Alert.alert('Error', 'Please select a delivery address');
            return;
        }

        if (!selectedPayment) {
            Alert.alert('Error', 'Please select a payment method');
            return;
        }

        try {
            const order = {
                userId: user.uid,
                items: cartItems,
                total: getCartTotal(),
                address: selectedAddress,
                paymentMethod: selectedPayment,
                status: 'Processing',
                createdAt: new Date().toISOString()
            };

            await addDoc(collection(db, 'orders'), order);
            clearCart();
            navigation.navigate('OrderConfirmation', { order });
        } catch (error) {
            Alert.alert('Error', 'Failed to place order. Please try again.');
            console.error('Error placing order:', error);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#A277BA" />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {/* Delivery Address Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Delivery Address</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AddressManagement')}>
                        <Text style={styles.changeButton}>Change</Text>
                    </TouchableOpacity>
                </View>

                {addresses.length === 0 ? (
                    <TouchableOpacity
                        style={styles.addAddressButton}
                        onPress={() => navigation.navigate('AddressManagement')}
                    >
                        <Ionicons name="add-circle-outline" size={24} color="#A277BA" />
                        <Text style={styles.addAddressText}>Add Delivery Address</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.addressContainer}>
                        {addresses.map(address => (
                            <TouchableOpacity
                                key={address.id}
                                style={[
                                    styles.addressCard,
                                    selectedAddress?.id === address.id && styles.selectedCard
                                ]}
                                onPress={() => setSelectedAddress(address)}
                            >
                                <View style={styles.radioButton}>
                                    {selectedAddress?.id === address.id && (
                                        <View style={styles.radioButtonInner} />
                                    )}
                                </View>
                                <View style={styles.addressDetails}>
                                    <Text style={styles.addressName}>{address.name}</Text>
                                    <Text style={styles.addressText}>{address.street}</Text>
                                    <Text style={styles.addressText}>
                                        {address.city}, {address.state} {address.zipCode}
                                    </Text>
                                    <Text style={styles.addressText}>{address.phone}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>

            {/* Payment Method Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Payment Method</Text>
                <View style={styles.paymentContainer}>
                    {paymentMethods.map(method => (
                        <TouchableOpacity
                            key={method.id}
                            style={[
                                styles.paymentCard,
                                selectedPayment?.id === method.id && styles.selectedCard
                            ]}
                            onPress={() => setSelectedPayment(method)}
                        >
                            <View style={styles.radioButton}>
                                {selectedPayment?.id === method.id && (
                                    <View style={styles.radioButtonInner} />
                                )}
                            </View>
                            <Ionicons name={method.icon} size={24} color="#333" style={styles.paymentIcon} />
                            <Text style={styles.paymentText}>{method.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Order Summary */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Order Summary</Text>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Items ({cartItems.length})</Text>
                    <Text style={styles.summaryValue}>${getCartTotal().toFixed(2)}</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Delivery</Text>
                    <Text style={styles.summaryValue}>$0.00</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.summaryRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>${getCartTotal().toFixed(2)}</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.placeOrderButton}
                onPress={handlePlaceOrder}
            >
                <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 10,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    changeButton: {
        color: '#A277BA',
        fontSize: 16,
    },
    addAddressButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 2,
        borderColor: '#A277BA',
        borderStyle: 'dashed',
        borderRadius: 10,
        justifyContent: 'center',
    },
    addAddressText: {
        color: '#A277BA',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '600',
    },
    addressContainer: {
        gap: 10,
    },
    addressCard: {
        flexDirection: 'row',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
    },
    selectedCard: {
        borderColor: '#A277BA',
        borderWidth: 2,
        backgroundColor: '#f0f8ff',
    },
    radioButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#A277BA',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    radioButtonInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#A277BA',
    },
    addressDetails: {
        flex: 1,
    },
    addressName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    addressText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 2,
    },
    paymentContainer: {
        gap: 10,
    },
    paymentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
    },
    paymentIcon: {
        marginRight: 15,
    },
    paymentText: {
        fontSize: 16,
        color: '#333',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    summaryLabel: {
        fontSize: 16,
        color: '#666',
    },
    summaryValue: {
        fontSize: 16,
        color: '#333',
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 10,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    totalValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#92AB39',
    },
    placeOrderButton: {
        backgroundColor: '#92AB39',
        padding: 18,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    placeOrderText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CheckoutScreen;