import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

class Producto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      producto: [],
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
          producto: res.results,
          url: res.next,
          loading: false,
        });
      });
  };

  navigateToProductoScreen = (producto) => {
    this.props.navigation.navigate('ProductoScreen', { producto });
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
      <View style={{ flex: 1, paddingTop: 50, paddingLeft: 5 }}>
        <FlatList
          data={this.state.producto}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.navigateToProductoScreen(item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Producto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
