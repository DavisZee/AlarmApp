import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';

const SettingsScreen = () => {
  const [volume, setVolume] = useState(0.5); // Initial volume set to 0.5 (50%)

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
