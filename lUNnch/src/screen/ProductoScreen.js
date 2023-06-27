import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductoScreen = ({ route }) => {
  console.log(route.params)
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProductoScreen;
