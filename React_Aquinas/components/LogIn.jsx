import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContainerStyles, TextStyles, ButtonStyles, Colors } from './Styles.jsx';

export default function LogIn({ route, navigation }) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  var { url } = route.params;
  var connectionAttempts = 0;

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${url}/login`, {
        email: emailInput,
        password: passwordInput,
      });
      const token = response.data.access_token;
      navigation.navigate('Profile', { token, url });
    } catch (error) {
      // ... (rest of the existing code)
    }
  };

  return (
    <View style={[ContainerStyles.container, styles.container]}>
      <Text style={[TextStyles.heading, styles.title]}>Login</Text>
      <Text>{url}</Text>
      <TextInput
        style={[styles.input, TextStyles.body]}
        placeholder="email"
        value={emailInput}
        onChangeText={setEmailInput}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={[styles.input, TextStyles.body]}
        placeholder="Password"
        value={passwordInput}
        onChangeText={setPasswordInput}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={[ButtonStyles.primaryButton, styles.button]} onPress={handleLogin}>
        <Text style={[ButtonStyles.buttonText, styles.buttonText]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register', { url })}>
        <Text style={[styles.link, TextStyles.body]}>Don't have an account? Register here</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.navigate('PasswordReset', { url })}>
        <Text style={[styles.link, TextStyles.body]}>Forgot Password? Reset here</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.text,
  },
  input: {
    width: '75%%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 5,
    paddingHorizontal: 10,
    // marginTop: 20,
    // marginBottom: 20,
    margin: 10,
    backgroundColor: Colors.inputField,
  },
  button: {
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
  link: {
    color: '#1976d2',
    fontSize: 16,
    color: Colors.primary,
  },
});
