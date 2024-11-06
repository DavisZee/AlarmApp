// Timer.tsx

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { timer_comp_styles } from '../screens/styles';

// Import sound files
import alarmTestFile from '../assets/alarmTestFile.mp3';
import alarmTestFile2 from '../assets/alarmTestFile2.mp3';
import alarmTestFile3 from '../assets/alarmTestFile3.mp3';

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
    onStopSound: (stopFunction: () => void) => void;
}

const Timer: React.FC<TimerProps> = ({ time, isRunning, setIsRunning, setTime, onStopSound }) => {
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState(false); // Track if the sound is currently playing

    const playSound = useCallback(async () => {
        try {
            if (isPlaying) return; // Prevent playing if already playing

            const identifier = await AsyncStorage.getItem("userRingtonePreference");
            if (identifier && soundMappings[identifier]) {
                const { sound: playbackObject } = await Audio.Sound.createAsync(
                    soundMappings[identifier],
                    { shouldPlay: true } // Auto-play once loaded
                );
                
                playbackObject.setOnPlaybackStatusUpdate((status) => {
                    if (status.isLoaded && status.didJustFinish) {
                        // Unload sound when finished
                        playbackObject.unloadAsync();
                        setIsPlaying(false);
                        setSound(null);
                    }
                });
                
                setSound(playbackObject);
                setIsPlaying(true); // Mark as playing once sound is fully loaded
            } else {
                console.warn('Sound identifier not found or sound not mapped.');
            }
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    }, [isPlaying]);

    const stopSound = useCallback(async () => {
        if (sound && isPlaying) {
            try {
                // Check if the sound is loaded before stopping
                const status = await sound.getStatusAsync();
                if (status.isLoaded) {
                    await sound.stopAsync();
                    await sound.unloadAsync();
                    setIsPlaying(false); // Reset playing status
                    setSound(null); // Clear sound reference
                }
            } catch (error) {
                console.warn('Sound was not loaded or could not be stopped.', error);
            }
        }
    }, [sound, isPlaying]);
    

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        // Pass stopSound function to HomeScreen via callback
        onStopSound(stopSound);

        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(interval);
                        setIsRunning(false);
                        playSound(); // Play sound when timer reaches 0
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
            stopSound(); // Stop and unload sound when component unmounts
        };
    }, [isRunning, time, setIsRunning, setTime, onStopSound, playSound, stopSound]);

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
