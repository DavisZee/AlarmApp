import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

// Map identifiers to actual sound files using require
const soundMappings: { [key: string]: any } = {
    alarmSound1: require('../../assets/alarmTestFile.mp3'), // Adjust the path as needed
    alarmSound2: require('../../assets/alarmTestFile2.mp3'), // Ensure this file exists
    alarmSound3: require('../../assets/alarmTestFile3.mp3'), // Ensure this file exists
};

const ChooseSoundScreen = () => {
    const saveSoundPath = async (identifier: string) => {
        try {
            await AsyncStorage.setItem("userRingtonePreference", identifier);
            console.log(`Sound path saved as user preference: ${identifier}`);
        } catch (error) {
            console.error('Error saving sound path to AsyncStorage', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>This is my Sound Options Screen</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => saveSoundPath('alarmSound1')}
            >
                <Text style={styles.buttonText}>Alarm Sound 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => saveSoundPath('alarmSound2')}
            >
                <Text style={styles.buttonText}>Alarm Sound 2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => saveSoundPath('alarmSound3')}
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
        borderRadius: 5,
    },
    buttonText: {
        color: '#000000', // Text color
        fontSize: 18,
    },
});

export default ChooseSoundScreen;