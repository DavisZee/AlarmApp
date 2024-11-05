import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Sound identifiers
const soundIdentifiers = {
    alarmSound1: 'alarmSound1',
    alarmSound2: 'alarmSound2',
    alarmSound3: 'alarmSound3',
};

const ChooseSoundScreen = () => {
    const saveSoundPreference = async (identifier: string) => {
        try {
            await AsyncStorage.setItem("userRingtonePreference", identifier);
            console.log(`Sound preference saved: ${identifier}`);
        } catch (error) {
            console.error('Error saving sound preference to AsyncStorage', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>This is my Sound Options Screen</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => saveSoundPreference(soundIdentifiers.alarmSound1)}
            >
                <Text style={styles.buttonText}>Alarm Sound 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => saveSoundPreference(soundIdentifiers.alarmSound2)}
            >
                <Text style={styles.buttonText}>Alarm Sound 2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => saveSoundPreference(soundIdentifiers.alarmSound3)}
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
