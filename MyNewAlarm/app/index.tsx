import { View, Text } from 'react-native';
import React from 'react';
import { registerRootComponent } from 'expo';

// Your Home component
const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

// Register the root component
registerRootComponent(Home);
