import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  const [volume, setVolume] = useState(0.5); // Initial volume set to 0.5 (50%)

  // Function to load volume from AsyncStorage
  const loadVolume = async () => {
    try {
      const storedVolume = await AsyncStorage.getItem('volume');
      if (storedVolume !== null) {
        setVolume(parseFloat(storedVolume)); // Parse the stored value and set it to the state
      }
    } catch (error) {
      console.error('Failed to load volume from AsyncStorage', error);
    }
  };

  // Function to save volume to AsyncStorage
  const saveVolume = async (value: number) => {
    try {
      await AsyncStorage.setItem('volume', value.toString()); // Store the volume as a string
    } catch (error) {
      console.error('Failed to save volume to AsyncStorage', error);
    }
  };

  // Load volume when the component mounts
  useEffect(() => {
    loadVolume();
  }, []);

  // Save volume whenever it changes
  useEffect(() => {
    saveVolume(volume);
  }, [volume]);

  return (
    <View style={styles.container}>
      <Text>Volume: {Math.round(volume * 100)}%</Text>
      <Slider
        style={{ width: 300, height: 40 }} // Adjust the width and height as needed
        minimumValue={0} // Minimum value of the slider
        maximumValue={1} // Maximum value of the slider
        minimumTrackTintColor="#1EB1FC" // Color of the track from min to current
        maximumTrackTintColor="#d3d3d3" // Color of the track from current to max
        onValueChange={value => setVolume(value)} // Update volume state on slider change
        value={volume} // Controlled value of the slider
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsScreen;
