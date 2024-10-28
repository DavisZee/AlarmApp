import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';


const ChooseSoundScreen = () => {
  const saveSoundPath = async (path: string) => {
    try {
      await AsyncStorage.setItem("userRingtonePreference", path);
      console.log(`Sound path saved as user preference: ${path}`);
    } catch (error) {
      console.error('Error saving sound path to AsyncStorage', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>This is my Sound Options Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => saveSoundPath('../assets/sound.mp3')}
      >
        <Text style={styles.buttonText}>Alarm Sound 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => saveSoundPath('../assets/sound.mp3')}
      >
        <Text style={styles.buttonText}>Alarm Sound 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => saveSoundPath('../assets/sound.mp3')}
      >
        <Text style={styles.buttonText}>Alarm Sound 3</Text>
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
    borderRadius: 5
  },
  buttonText: {
    color: '#000000', // Text color
    fontSize: 18,
  },
});

export default ChooseSoundScreen;