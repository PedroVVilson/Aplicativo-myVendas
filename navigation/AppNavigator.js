// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ClienteScreen from '../screens/ClienteScreen';
import VendaScreen from '../screens/VendaScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Clientes" component={ClienteScreen} />
        <Stack.Screen name="Vendas" component={VendaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
