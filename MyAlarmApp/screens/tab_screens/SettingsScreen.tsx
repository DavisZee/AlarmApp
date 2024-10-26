import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is my Settings Screen</Text>
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
