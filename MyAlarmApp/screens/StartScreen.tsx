import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
//import styles from './styles'; // import path for styles
import { styles as importedStyles } from './styles';

const StartScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    navigation.navigate('Tabs');
  };

  return (
    <View style={importedStyles.container}>
      <Text style={localStyles.titleText}>Welcome to WakeMEUp</Text>
      <View style={localStyles.inputContainer}>
        <TextInput
          style={localStyles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={localStyles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={[localStyles.button, localStyles.signInButton]} onPress={handlePress}>
          <Text style={localStyles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[localStyles.button, localStyles.continueButton]} onPress={handlePress}>
          <Text style={localStyles.buttonText}>Continue Without Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: '#59F8BB',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  button: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#007BFF', // Blue color for Sign In button
  },
  continueButton: {
    backgroundColor: '#808080', // Gray color for Continue Without Login button
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default StartScreen;