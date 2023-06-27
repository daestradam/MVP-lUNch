import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import fetch from 'cross-fetch';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Construye el cuerpo de la solicitud
    const body = {
      email: username,
      password: password,
    };
  
    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(data => {
        // Verifica si la autenticación fue exitosa
        if (data.access_token) {
          // Autenticación exitosa
          navigation.navigate('Productos', { token: data.access_token });
        } else {
          // Autenticación fallida
          alert('Nombre de usuario o contraseña incorrectos');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Ocurrió un error al intentar iniciar sesión');
      });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
