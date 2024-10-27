import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ChooseSoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is my Sound Options Screen</Text>
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

export default ChooseSoundScreen;
