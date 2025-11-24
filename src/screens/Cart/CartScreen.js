import React, { useContext } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { CartContext } from '../../context/CartContext';
import CartItem from '../../components/CartItem';

const CartScreen = ({ navigation }) => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } =
        useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>Your cart is empty</Text>
                <Text style={styles.emptySubtitle}>Add products to continue</Text>

                <TouchableOpacity
                    style={styles.emptyButton}
                    onPress={() => navigation.navigate('Products')}
                >
                    <Text style={styles.emptyButtonText}>Start Shopping</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const renderItem = ({ item }) => (
        <CartItem
            item={item}
            onRemove={() => removeFromCart(item.id)}
            onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
            onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.shoppingCart}>Shopping Cart</Text>
                <TouchableOpacity onPress={clearCart}>
                    <Text style={styles.clearAll}>Clear All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 140 }}
            />

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

                <TouchableOpacity
                    style={styles.checkoutButton}
                    onPress={() => navigation.navigate('Checkout')}
                >
                    <Text style={styles.checkoutText}>Proceed to Checkout →</Text>
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
        alignItems: 'center'
    },

    shoppingCart: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111'
    },

    clearAll: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FF3B30'
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },

    emptyTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#111',
        marginBottom: 10
    },

    emptySubtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30
    },

    emptyButton: {
        backgroundColor: '#A277BA',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 12
    },

    emptyButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700'
    },

    summary: {
        backgroundColor: '#FFF',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },

    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },

    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#EEE'
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
        alignItems: 'center'
    },

    checkoutText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700'
    }
});

export default CartScreen;
