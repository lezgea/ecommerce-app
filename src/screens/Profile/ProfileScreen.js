// src/screens/Profile/ProfileScreen.js
import React, { useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Logout',
                    style: 'destructive',
                    onPress: async () => {
                        await logout();
                    }
                }
            ]
        );
    };

    const menuItems = [
        {
            id: 1,
            title: 'Order History',
            icon: 'receipt-outline',
            onPress: () => navigation.navigate('OrderHistory')
        },
        {
            id: 2,
            title: 'Manage Addresses',
            icon: 'location-outline',
            onPress: () => navigation.navigate('AddressManagement')
        },
        {
            id: 3,
            title: 'About',
            icon: 'information-circle-outline',
            onPress: () => navigation.navigate('About')
        },
        {
            id: 4,
            title: 'Help & Support',
            icon: 'help-circle-outline',
            onPress: () => navigation.navigate('Help')
        }
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <Ionicons name="person" size={50} color="#fff" />
                </View>
                <Text style={styles.name}>{user?.name || 'User'}</Text>
                <Text style={styles.email}>{user?.email}</Text>
            </View>

            <View style={styles.menuContainer}>
                {menuItems.map(item => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.menuItem}
                        onPress={item.onPress}
                    >
                        <View style={styles.menuItemLeft}>
                            <Ionicons name={item.icon} size={24} color="#333" />
                            <Text style={styles.menuItemText}>{item.title}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="#999" />
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Ionicons name="log-out-outline" size={24} color="#ff3b30" />
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 30,
        alignItems: 'center',
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.9)',
    },
    menuContainer: {
        backgroundColor: '#fff',
        marginTop: 20,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 15,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ff3b30',
    },
    logoutText: {
        fontSize: 16,
        color: '#ff3b30',
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default ProfileScreen;