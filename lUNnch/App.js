import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Producto from './src/components/Producto';
import ProductoScreen from './src/screen/ProductoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={
          {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'green' }
          }
        }>
        <Stack.Screen name="Productos" component={Producto} />
        <Stack.Screen name="ProductoScreen" component={ProductoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
