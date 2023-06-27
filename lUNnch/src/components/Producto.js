import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView, Button, Image} from 'react-native';

class Producto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      productos: [],
      url: 'http://127.0.0.1:8000/api/products',
    };
  }

  componentDidMount() {
    this.getProducto();
  }

  getProducto = () => {
    this.setState({ loading: true });

    fetch(this.state.url)
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
              <View key={producto.id} style={styles.mainView}>
                <Text>{producto.name}</Text>
                <Image
                  style={{
                    width: 100,
                    height: 150,
                  }}
                  source={{
                    uri: producto.image,
                  }}
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
                      id_seller: producto.id_seller, });
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
  },
  scrollViewContent: {
      flexGrow: 1,
  },
  mainView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  }
});
