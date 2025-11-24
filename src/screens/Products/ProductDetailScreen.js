// src/screens/Products/ProductDetailScreen.js
import React, { useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert,
    Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../../context/CartContext';

const ProductDetailScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
        Alert.alert('Success', 'Product added to cart!', [
            { text: 'Continue Shopping', style: 'cancel' },
            { text: 'View Cart', onPress: () => navigation.navigate('Cart') }
        ]);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                {product.imageUrl ? (
                    <Image
                        source={{ uri: product.imageUrl }}
                        style={styles.productImage}
                        resizeMode="cover"
                    />
                ) : (
                    <View style={styles.imagePlaceholder}>
                        <Ionicons name="image-outline" size={100} color="#ccc" />
                    </View>
                )}

                <View style={styles.detailsContainer}>
                    <Text style={styles.category}>{product.category}</Text>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.price}>${product.price.toFixed(2)}</Text>

                    <View style={styles.divider} />

                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.description}>{product.description}</Text>

                    {product.features && (
                        <>
                            <View style={styles.divider} />
                            <Text style={styles.sectionTitle}>Features</Text>
                            {product.features.map((feature, index) => (
                                <View key={index} style={styles.featureItem}>
                                    <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                                    <Text style={styles.featureText}>{feature}</Text>
                                </View>
                            ))}
                        </>
                    )}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                    <Ionicons name="cart" size={24} color="#fff" />
                    <Text style={styles.addToCartText}>Add to Cart</Text>
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
    },
    imagePlaceholder: {
        width: '100%',
        height: 400,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: '100%',
        height: 400,
        backgroundColor: '#f0f0f0',
    },
    detailsContainer: {
        padding: 20,
    },
    category: {
        fontSize: 14,
        color: '#999',
        marginBottom: 5,
        textTransform: 'uppercase',
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    price: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 15,
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    featureText: {
        fontSize: 16,
        color: '#666',
        marginLeft: 10,
        flex: 1,
    },
    footer: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    addToCartButton: {
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
    },
    addToCartText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default ProductDetailScreen;