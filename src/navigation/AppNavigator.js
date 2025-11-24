import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

// Screens
import ProductListScreen from '../screens/Products/ProductListScreen';
import ProductDetailScreen from '../screens/Products/ProductDetailScreen';
import CartScreen from '../screens/Cart/CartScreen';
import CheckoutScreen from '../screens/Cart/CheckoutScreen';
import OrderConfirmationScreen from '../screens/Cart/OrderConfirmationScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import AddressManagementScreen from '../screens/Profile/AddressManagementScreen';
import OrderHistoryScreen from '../screens/Profile/OrderHistoryScreen';
import AboutScreen from '../screens/Static/AboutScreen';
import HelpScreen from '../screens/Static/HelpScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Products Stack Navigator
const ProductsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#A277BA',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="ProductList"
                component={ProductListScreen}
                options={{ title: 'Products' }}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
                options={{ title: 'Product Details' }}
            />
        </Stack.Navigator>
    );
};

// Cart Stack Navigator
const CartStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#A277BA',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="CartList"
                component={CartScreen}
                options={{ title: 'Shopping Cart' }}
            />
            <Stack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{ title: 'Checkout' }}
            />
            <Stack.Screen
                name="OrderConfirmation"
                component={OrderConfirmationScreen}
                options={{
                    title: 'Order Confirmed',
                    headerLeft: () => null,
                    gestureEnabled: false
                }}
            />
            <Stack.Screen
                name="AddressManagement"
                component={AddressManagementScreen}
                options={{ title: 'Manage Addresses' }}
            />
        </Stack.Navigator>
    );
};

// Profile Stack Navigator
const ProfileStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#A277BA',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="ProfileMain"
                component={ProfileScreen}
                options={{ title: 'Profile' }}
            />
            <Stack.Screen
                name="AddressManagement"
                component={AddressManagementScreen}
                options={{ title: 'Manage Addresses' }}
            />
            <Stack.Screen
                name="OrderHistory"
                component={OrderHistoryScreen}
                options={{ title: 'Order History' }}
            />
            <Stack.Screen
                name="About"
                component={AboutScreen}
                options={{ title: 'About' }}
            />
            <Stack.Screen
                name="Help"
                component={HelpScreen}
                options={{ title: 'Help & Support' }}
            />
        </Stack.Navigator>
    );
};

// Cart Badge Component
const CartBadge = ({ count }) => {
    if (count === 0) return null;

    return (
        <View style={styles.badge}>
            <Text style={styles.badgeText}>{count}</Text>
        </View>
    );
};

// Main Tab Navigator
const AppNavigator = () => {
    const { getCartItemsCount } = useContext(CartContext);
    const cartItemsCount = getCartItemsCount();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Products') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return (
                        <View>
                            <Ionicons name={iconName} size={size} color={color} />
                            {route.name === 'Cart' && <CartBadge count={cartItemsCount} />}
                        </View>
                    );
                },
                tabBarActiveTintColor: '#A277BA',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                    height: 60,
                },
            })}
        >
            <Tab.Screen name="Products" component={ProductsStack} />
            <Tab.Screen name="Cart" component={CartStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        right: -10,
        top: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 4,
    },
});

export default AppNavigator;