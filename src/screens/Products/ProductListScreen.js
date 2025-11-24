// src/screens/Products/ProductListScreen.js
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    Image,
    Dimensions
} from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 30) / 2;

const ProductListScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Electronics', 'Books', 'Apparel'];

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [searchQuery, selectedCategory, products]);

    const fetchProducts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const productsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(productsData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    const filterProducts = () => {
        let filtered = products;

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        if (searchQuery) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    };

    const renderProduct = ({ item }) => (
        <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
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
                <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price?.toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.loadingText}>Loading products...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* <Text style={styles.headerTitle}>Discover</Text> */}
                <Text style={styles.headerSubtitle}>Find your perfect product</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search products..."
                    placeholderTextColor="#999"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchQuery('')}>
                        <Ionicons name="close-circle" size={20} color="#999" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Category Chips */}
            <View style={styles.categoryContainer}>
                {categories.map(category => (
                    <TouchableOpacity
                        key={category}
                        style={[
                            styles.categoryChip,
                            selectedCategory === category && styles.categoryChipActive
                        ]}
                        onPress={() => setSelectedCategory(category)}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategory === category && styles.categoryTextActive
                            ]}
                        >
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Results Count */}
            <View style={styles.resultsContainer}>
                <Text style={styles.resultsText}>
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
                </Text>
            </View>

            {/* Product Grid */}
            <FlatList
                data={filteredProducts}
                renderItem={renderProduct}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.productList}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="search-outline" size={80} color="#ddd" />
                        <Text style={styles.emptyTitle}>No products found</Text>
                        <Text style={styles.emptyText}>Try adjusting your search or filters</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#666',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        height: 50,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    categoryContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    categoryChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    categoryChipActive: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    categoryText: {
        color: '#666',
        fontSize: 14,
        fontWeight: '600',
    },
    categoryTextActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
    resultsContainer: {
        paddingHorizontal: 15,
        paddingBottom: 5,
    },
    resultsText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    productList: {
        padding: 5,
        paddingBottom: 20,
    },
    productCard: {
        flex: 1,
        maxWidth: '48%',
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
        // marginBottom: 8,
        minHeight: 40,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    addButton: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
        paddingHorizontal: 40,
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
        marginBottom: 8,
    },
    emptyText: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
    },
});

export default ProductListScreen;