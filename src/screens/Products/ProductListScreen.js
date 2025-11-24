import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import ProductCard from '../../components/ProductCard';
import { Ionicons } from '@expo/vector-icons';

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
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(data);
            setLoading(false);
        } catch {
            setLoading(false);
        }
    };

    const filterProducts = () => {
        let list = products;

        if (selectedCategory !== 'All') {
            list = list.filter(p => p.category === selectedCategory);
        }

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            list = list.filter(
                p =>
                    p.name.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q)
            );
        }

        setFilteredProducts(list);
    };

    const renderItem = ({ item }) => (
        <ProductCard
            item={item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        />
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#A277BA" />
                <Text style={styles.loadingText}>Loading products...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerSubtitle}>Find your perfect product</Text>
            </View>

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

            <View style={styles.categoryContainer}>
                {categories.map(category => (
                    <TouchableOpacity
                        key={category}
                        style={[
                            styles.categoryChip,
                            selectedCategory === category && styles.categoryChipActive
                        ]}
                        onPress={() => setSelectedCategory(category)}
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

            <View style={styles.resultsContainer}>
                <Text style={styles.resultsText}>
                    {filteredProducts.length}{' '}
                    {filteredProducts.length === 1 ? 'Product' : 'Products'}
                </Text>
            </View>

            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.productList}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    header: { paddingHorizontal: 10, paddingTop: 10, paddingBottom: 5, backgroundColor: '#fff' },
    headerSubtitle: { fontSize: 16, color: '#666' },
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    loadingText: { marginTop: 10, fontSize: 16, color: '#666' },
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
        elevation: 2
    },
    searchIcon: { marginRight: 10 },
    searchInput: { flex: 1, fontSize: 16, color: '#333' },
    categoryContainer: { flexDirection: 'row', paddingHorizontal: 10, marginBottom: 10 },
    categoryChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    categoryChipActive: {
        backgroundColor: '#A277BA',
        borderColor: '#A277BA'
    },
    categoryText: { color: '#666', fontSize: 14, fontWeight: '600' },
    categoryTextActive: { color: '#fff', fontWeight: 'bold' },
    resultsContainer: { paddingHorizontal: 15, paddingBottom: 5 },
    resultsText: { fontSize: 14, color: '#666', fontWeight: '500' },
    productList: { padding: 5, paddingBottom: 20 }
});

export default ProductListScreen;
