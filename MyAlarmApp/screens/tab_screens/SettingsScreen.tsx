import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';

const SettingsScreen: React.FC = () => {
  const [volume, setVolume] = useState(1); // Default volume (1 is max)

  useEffect(() => {
    // Load the volume preference from AsyncStorage when the screen loads
    const loadVolume = async () => {
      const storedVolume = await AsyncStorage.getItem("alarmVolume");
      if (storedVolume !== null) {
        setVolume(parseFloat(storedVolume));
      }
    };
    loadVolume();
  }, []);

  const handleVolumeChange = async (value: number) => {
    setVolume(value);
    await AsyncStorage.setItem("alarmVolume", value.toString()); // Save volume setting
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Alarm Volume</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={handleVolumeChange}
        minimumTrackTintColor="black"
        maximumTrackTintColor="black"
        thumbTintColor="black"
      />
      <Text style={styles.volumeText}>{Math.round(volume * 100)}%</Text>
      <TouchableOpacity
        style={styles.colorBlindButton}
        onPress={() => {}}
        activeOpacity={0.6}
      >
        <Text style={styles.buttonText}>Color Blind Friendly</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#54EAB0',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  volumeText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  colorBlindButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SettingsScreen;
