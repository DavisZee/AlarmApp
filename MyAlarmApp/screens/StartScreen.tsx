import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
//import styles from './styles'; // import path for styles
import { styles } from './styles';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to the App</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tabs')} >
        <Text style={styles.buttonText}>Let’s Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;
