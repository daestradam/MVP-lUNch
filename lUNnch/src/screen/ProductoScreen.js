import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductoScreen = ({ route }) => {
  console.log(route.params);
  const { id, name, price, quantity, image, id_seller } = route.params;

  console.log(name); // Debería mostrar "Papas de limón"

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>Cantidad: {quantity}</Text>
      <Text style={styles.text}>Precio: {price}</Text>
      <Text style={styles.text}>ID del vendedor: {id_seller}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666666',
  },
});

export default ProductoScreen;
