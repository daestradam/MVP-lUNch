import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const InicioScreen = ({navigation}) => {
    return (
        <View style={ styles.mainView }>
            <Text style={ {color: 'red'} }>Bienvenidos a lUNch</Text>
            <Button
                title="Ir a los detalles"
                onPress={ () => {
                    //navigation.navigate("Detalles", {name: "El Quijote"})
                    navigation.navigate("Detalles")
                } }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default InicioScreen;