import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView, Button, Image} from 'react-native';

class Producto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      productos: [],
      url: 'https://pokeapi.co/api/v2/pokemon/',
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
          productos: res.results,
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
                <Text>El producto es: {producto.name}</Text>
                <Image
                  style={{
                    width: 100,
                    height: 150,
                  }}
                  source={{
                    uri: producto.url,
                  }}
                />
                <Button
                  title="Más detalles"
                  onPress={() => {
                    this.props.navigation.navigate('ProductoScreen', { producto });
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
