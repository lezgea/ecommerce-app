// src/screens/Profile/AddressManagementScreen.js
import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    TextInput,
    Modal,
    Alert,
    ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';

const AddressManagementScreen = () => {
    const { user } = useContext(AuthContext);
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        isDefault: false
    });

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
            setLoading(false);
        } catch (error) {
            console.error('Error fetching addresses:', error);
            setLoading(false);
        }
    };

    const handleAddAddress = async () => {
        if (!formData.name || !formData.phone || !formData.street || !formData.city) {
            Alert.alert('Error', 'Please fill in all required fields');
            return;
        }

        try {
            await addDoc(collection(db, 'addresses'), {
                ...formData,
                userId: user.uid,
                createdAt: new Date().toISOString()
            });

            setModalVisible(false);
            resetForm();
            fetchAddresses();
            Alert.alert('Success', 'Address added successfully');
        } catch (error) {
            Alert.alert('Error', 'Failed to add address');
        }
    };

    const handleDeleteAddress = (addressId) => {
        Alert.alert(
            'Delete Address',
            'Are you sure you want to delete this address?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deleteDoc(doc(db, 'addresses', addressId));
                            fetchAddresses();
                        } catch (error) {
                            Alert.alert('Error', 'Failed to delete address');
                        }
                    }
                }
            ]
        );
    };

    const resetForm = () => {
        setFormData({
            name: '',
            phone: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            isDefault: false
        });
    };

    const renderAddress = ({ item }) => (
        <View style={styles.addressCard}>
            <View style={styles.addressContent}>
                <Text style={styles.addressName}>{item.name}</Text>
                <Text style={styles.addressText}>{item.street}</Text>
                <Text style={styles.addressText}>
                    {item.city}, {item.state} {item.zipCode}
                </Text>
                <Text style={styles.addressText}>{item.phone}</Text>
                {item.isDefault && (
                    <View style={styles.defaultBadge}>
                        <Text style={styles.defaultText}>Default</Text>
                    </View>
                )}
            </View>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteAddress(item.id)}
            >
                <Ionicons name="trash-outline" size={24} color="#ff3b30" />
            </TouchableOpacity>
        </View>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={addresses}
                renderItem={renderAddress}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="location-outline" size={80} color="#ccc" />
                        <Text style={styles.emptyText}>No addresses added yet</Text>
                    </View>
                }
            />

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => setModalVisible(true)}
            >
                <Ionicons name="add" size={24} color="#fff" />
                <Text style={styles.addButtonText}>Add New Address</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Add New Address</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Ionicons name="close" size={24} color="#333" />
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            style={styles.input}
                            placeholder="Full Name *"
                            value={formData.name}
                            onChangeText={(text) => setFormData({ ...formData, name: text })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number *"
                            value={formData.phone}
                            onChangeText={(text) => setFormData({ ...formData, phone: text })}
                            keyboardType="phone-pad"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Street Address *"
                            value={formData.street}
                            onChangeText={(text) => setFormData({ ...formData, street: text })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="City *"
                            value={formData.city}
                            onChangeText={(text) => setFormData({ ...formData, city: text })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="State"
                            value={formData.state}
                            onChangeText={(text) => setFormData({ ...formData, state: text })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="ZIP Code"
                            value={formData.zipCode}
                            onChangeText={(text) => setFormData({ ...formData, zipCode: text })}
                            keyboardType="numeric"
                        />

                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={handleAddAddress}
                        >
                            <Text style={styles.saveButtonText}>Save Address</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
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
    listContent: {
        padding: 15,
        paddingBottom: 100,
    },
    addressCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    addressContent: {
        flex: 1,
    },
    addressName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    addressText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 3,
    },
    defaultBadge: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    defaultText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    deleteButton: {
        justifyContent: 'center',
        padding: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    emptyText: {
        fontSize: 16,
        color: '#999',
        marginTop: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 18,
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: '80%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#007AFF',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AddressManagementScreen;