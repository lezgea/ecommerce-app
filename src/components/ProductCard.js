import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ item, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.productCard}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.imageContainer}>
                {item.imageUrl ? (
                    <Image
                        source={{ uri: item.imageUrl }}
                        style={styles.productImage}
                        resizeMode="cover"
                    />
                ) : (
                    <View style={styles.imagePlaceholder}>
                        <Ionicons name="image-outline" size={50} color="#ccc" />
                    </View>
                )}

                <View style={styles.categoryBadge}>
                    <Text style={styles.categoryBadgeText}>{item.category}</Text>
                </View>
            </View>

            <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={2}>
                    {item.name}
                </Text>

                <Text style={styles.productPrice}>${item.price?.toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    productCard: {
        flex: 1,
        maxWidth: '48%',
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 10,
        elevation: 2,
    },

    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 150,
    },

    productImage: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#f0f0f0',
    },

    imagePlaceholder: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    categoryBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },

    categoryBadgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
    },

    productInfo: {
        padding: 10,
    },

    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        minHeight: 40,
    },

    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#92AB39', 
    },
});

export default ProductCard;
