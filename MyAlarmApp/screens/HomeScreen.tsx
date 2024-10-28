import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is my HomeScreen</Text>
      
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

export default HomeScreen;
