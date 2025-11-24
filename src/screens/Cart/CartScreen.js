// src/screens/Cart/CartScreen.js
import React, { useContext } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../../context/CartContext';

const CartScreen = ({ navigation }) => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useContext(CartContext);

    const renderCartItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.row}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.productImage}
                />

                <View style={styles.info}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                    <Text style={styles.oldPrice}>${(item.price * 1.05).toFixed(0)}</Text>
                </View>

                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Ionicons name="trash-outline" size={26} color="#ff3b30" />
                </TouchableOpacity>
            </View>

            <View style={styles.quantityRow}>
                <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                >
                    <Ionicons name="remove" size={18} color="#A277BA" />
                </TouchableOpacity>

                <Text style={styles.quantity}>{item.quantity}</Text>

                <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                >
                    <Ionicons name="add" size={18} color="#A277BA" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.shoppingCart}>Shopping Cart</Text>

                <TouchableOpacity onPress={clearCart}>
                    <Text style={styles.clearAll}>Clear All</Text>
                </TouchableOpacity>
            </View>

            {/* CART LIST */}
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 120 }}
            />

            {/* SUMMARY */}
            <View style={styles.summary}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Items ({cartItems.length})</Text>
                    <Text style={styles.summaryValue}>${getCartTotal().toFixed(2)}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Shipping</Text>
                    <Text style={styles.shippingFree}>Free</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Tax</Text>
                    <Text style={styles.summaryValue}>
                        ${(getCartTotal() * 0.08).toFixed(2)}
                    </Text>
                </View>

                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>
                        ${(getCartTotal() * 1.08).toFixed(2)}
                    </Text>
                </View>

                {/* CHECKOUT BUTTON */}
                <TouchableOpacity
                    style={styles.checkoutButton}
                    onPress={() => navigation.navigate('Checkout')}
                >
                    <Text style={styles.checkoutText}>
                        Proceed to Checkout →
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9f9f9' },

    header: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    shoppingCart: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111',
    },

    clearAll: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FF3B30',
    },

    card: {
        backgroundColor: '#FFF',
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 12,
        padding: 15,
        elevation: 2,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    productImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 15,
    },

    info: { flex: 1 },

    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111',
        marginBottom: 5,
    },

    productPrice: {
        fontSize: 18,
        fontWeight: '700',
        color: '#92AB39',
    },

    oldPrice: {
        color: '#999',
        fontSize: 13,
        marginTop: 4,
        textDecorationLine: 'line-through',
    },

    quantityRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        justifyContent: 'center',
        gap: 20,
    },

    qtyButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },

    quantity: {
        fontSize: 18,
        fontWeight: '600',
    },

    summary: {
        backgroundColor: '#FFF',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },

    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#EEE',
    },

    summaryLabel: { fontSize: 16, color: '#666' },

    summaryValue: { fontSize: 16, fontWeight: '600', color: '#333' },

    shippingFree: { fontSize: 16, fontWeight: '600', color: '#4CAF50' },

    totalLabel: { fontSize: 20, fontWeight: '700', color: '#333' },

    totalValue: { fontSize: 22, fontWeight: '700', color: '#92AB39' },

    checkoutButton: {
        marginTop: 20,
        backgroundColor: '#A277BA',
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
    },

    checkoutText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
    },
});

export default CartScreen;
