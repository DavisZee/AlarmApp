import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the App</Text>
      {/* Button to navigate to TabNavigator */}
      <Button
        title="Next"
        onPress={() => navigation.navigate('Tabs')} // Navigate to TabNavigator
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

export default StartScreen;
