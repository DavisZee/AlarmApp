import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { timer_comp_styles } from '../screens/styles';

// Import sound files at the top
import alarmTestFile from '../assets/alarmTestFile.mp3';
import alarmTestFile2 from '../assets/alarmTestFile2.mp3';
import alarmTestFile3 from '../assets/alarmTestFile3.mp3';

// Define sound mappings outside of playSound function
const soundMappings: { [key: string]: any } = {
    alarmSound1: alarmTestFile,
    alarmSound2: alarmTestFile2,
    alarmSound3: alarmTestFile3,
};

interface TimerProps {
    time: number;
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
    setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({ time, isRunning, setIsRunning, setTime }) => {
    const [sound, setSound] = useState<Audio.Sound | null>(null);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        const playSound = async () => {
            try {
                const identifier = await AsyncStorage.getItem("userRingtonePreference");
                console.log('Retrieved sound identifier:', identifier);

                if (identifier && soundMappings[identifier]) {
                    const { sound: playbackObject } = await Audio.Sound.createAsync(
                        soundMappings[identifier]
                    );
                    setSound(playbackObject);
                    await playbackObject.playAsync();
                } else {
                    console.error('Invalid or undefined sound identifier:', identifier);
                    console.log('Available identifiers:', Object.keys(soundMappings));
                }
            } catch (error) {
                console.error('Error retrieving sound preference from AsyncStorage', error);
            }
        };

        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(interval);
                        setIsRunning(false);
                        playSound();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }

        return () => {
            if (interval) clearInterval(interval);
            if (sound) sound.unloadAsync();
        };
    }, [isRunning, time, setIsRunning, setTime]);

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <View style={timer_comp_styles.timerContainer}>
            <Text style={timer_comp_styles.timerText}>{formatTime(time)}</Text>
        </View>
    );
};

export default Timer;
