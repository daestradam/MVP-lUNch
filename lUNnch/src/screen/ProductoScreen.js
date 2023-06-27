import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductScreen = ({ route }) => {
  const { cantidad, nombre, imagen, precio, idSeller } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nombre}</Text>
      <Image source={{ uri: imagen }} style={styles.image} />
      <Text style={styles.text}>Cantidad: {cantidad}</Text>
      <Text style={styles.text}>Precio: {precio}</Text>
      <Text style={styles.text}>ID del vendedor: {idSeller}</Text>
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

export default ProductScreen;
