import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView, Button, Image } from 'react-native';

class Producto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      productos: [],
      url: 'http://127.0.0.1:8000/api/products',
      token: '',
    };
  }

  componentDidMount() {
    this.getProducto();
  }

  getProducto = () => {
    this.setState({ loading: true });

    const { token } = this.props.route.params;

    fetch(this.state.url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          productos: res.data,
          url: res.next,
          loading: false,
        });
      });
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.mainView}>
            {this.state.productos.map((producto) => (
              <View key={producto.id} style={styles.productoContainer}>
                <Text style={styles.productoName}>{producto.name}</Text>
                <Image
                  style={styles.productoImage}
                  source={{ uri: producto.image }}
                />
                <Button
                  title="Más detalles"
                  onPress={() => {
                    this.props.navigation.navigate('Producto', {
                      id: producto.id,
                      name: producto.name,
                      price: producto.price,
                      quantity: producto.quantity,
                      image: producto.image,
                      id_seller: producto.id_seller,
                    });
                  }}
                />
                <Text>{'\n'}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>


    );
  }
}

export default Producto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    paddingVertical: 20,
  },
  productoContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  productoName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productoImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
});

