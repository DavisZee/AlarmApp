import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const ChooseSoundScreen = () => {
  const handlePress = () => {
    // Handle press event here (e.g., navigate to another screen, play sound, etc.)
    console.log('Alarm 1 selected');
  };

  return (
    <View style={styles.container}>
      <Text>This is my Sound Options Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Alarm 1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#59F8BB', // Button color
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 18,
  },
});

export default ChooseSoundScreen;
