import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = ({ item, onRemove, onDecrease, onIncrease }) => (
    <View style={styles.card}>
        <View style={styles.row}>
            <Image source={{ uri: item.imageUrl }} style={styles.productImage} />

            <View style={styles.info}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                <Text style={styles.oldPrice}>${(item.price * 1.05).toFixed(0)}</Text>
            </View>

            <TouchableOpacity onPress={onRemove}>
                <Ionicons name="trash-outline" size={26} color="#ff3b30" />
            </TouchableOpacity>
        </View>

        <View style={styles.quantityRow}>
            <TouchableOpacity style={styles.qtyButton} onPress={onDecrease}>
                <Ionicons name="remove" size={18} color="#A277BA" />
            </TouchableOpacity>

            <Text style={styles.quantity}>{item.quantity}</Text>

            <TouchableOpacity style={styles.qtyButton} onPress={onIncrease}>
                <Ionicons name="add" size={18} color="#A277BA" />
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 12,
        padding: 15,
        elevation: 2
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    productImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 15
    },
    info: {
        flex: 1
    },
    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111',
        marginBottom: 5
    },
    productPrice: {
        fontSize: 18,
        fontWeight: '700',
        color: '#92AB39'
    },
    oldPrice: {
        color: '#999',
        fontSize: 13,
        marginTop: 4,
        textDecorationLine: 'line-through'
    },
    quantityRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        justifyContent: 'center',
        gap: 20
    },
    qtyButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    quantity: {
        fontSize: 18,
        fontWeight: '600'
    }
});

export default CartItem;
