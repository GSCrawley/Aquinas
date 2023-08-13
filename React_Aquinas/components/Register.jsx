import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import axios from 'axios';
import { ContainerStyles, TextStyles, ButtonStyles, Colors } from './Styles.jsx';

export default function Register({ route, navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [DOBInput, setDOBInput] = useState('');

  const handleRegistration = async () => {
    const { url } = route.params;

    const response = await axios.post(
      `${url}/register`,
      {
        name: name,
        username: username,
        password: password,
        email: email,
        DOB: DOBInput,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
    navigation.navigate('Login', { url });
  };

  return (
    <View style={[ContainerStyles.container, styles.container]}>
      <Text style={[TextStyles.heading, styles.title]}>Please register to create an account</Text>
      <TextInput
        style={[styles.input, TextStyles.body]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={[styles.input, TextStyles.body]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={[styles.input, TextStyles.body]}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TextInput
        style={[styles.input, TextStyles.body]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={[styles.input, TextStyles.body]}
        placeholder="DOB"
        value={DOBInput}
        onChangeText={setDOBInput}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={[ButtonStyles.primaryButton, styles.button]} onPress={handleRegistration}>
        <Text style={ButtonStyles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
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
    margin: 10,
    backgroundColor: Colors.inputField,
  },
  button: {
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
