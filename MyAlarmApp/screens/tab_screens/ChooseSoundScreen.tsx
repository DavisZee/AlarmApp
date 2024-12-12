import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Sound identifiers
const soundIdentifiers = {
    alarmSound1: 'alarmSound1',
    oldTelephone: 'oldTelephone',
    duck: 'duck',
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
            <Text>Select ringtone for timer below</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => saveSoundPreference(soundIdentifiers.alarmSound1)}
            >
                <Text style={styles.buttonText}>Classic Beeping</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => saveSoundPreference(soundIdentifiers.oldTelephone)}
            >
                <Text style={styles.buttonText}>Old Telephone</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => saveSoundPreference(soundIdentifiers.duck)}
            >
                <Text style={styles.buttonText}>Ducks</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#59F8BB'
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#D9D9D9', // Button color
        borderRadius: 5,
    },
    buttonText: {
        color: '#000000', // Text color
        fontSize: 18,
    },
});

export default ChooseSoundScreen;
