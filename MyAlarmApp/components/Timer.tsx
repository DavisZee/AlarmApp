import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { timer_comp_styles } from '../screens/styles';

interface TimerProps {
    time: number; // accept time as a prop
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>; // function to set running state
    setTime: React.Dispatch<React.SetStateAction<number>>; // function to set time
}

const Timer: React.FC<TimerProps> = ({ time, isRunning, setIsRunning, setTime }) => {
    const [sound, setSound] = useState<Audio.Sound | null>(null); // State to hold sound instance

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        const playSound = async () => {
            try {
                const identifier = await AsyncStorage.getItem("userRingtonePreference");
                console.log('Retrieved sound identifier:', identifier); // Log the identifier

                // Temporarily hardcode the paths directly
                let soundFile;
                if (identifier === 'alarmSound1') {
                    soundFile = require('../assets/alarmTestFile.mp3');
                } else if (identifier === 'alarmSound2') {
                    soundFile = require('../assets/alarmTestFile2.mp3');
                } else if (identifier === 'alarmSound3') {
                    soundFile = require('../assets/alarmTestFile3.mp3');
                } else {
                    console.error('Sound identifier not found or not set:', identifier);
                    return;
                }

                // Play the sound if a valid sound file is found
                const { sound: playbackObject } = await Audio.Sound.createAsync(soundFile);
                setSound(playbackObject);
                console.log("THis is what is playing", soundFile);
                await playbackObject.playAsync();
            } catch (error) {
                console.error('Error retrieving sound path from AsyncStorage or playing sound', error);
            }
        };

        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(interval); // clear interval when time reaches 0
                        setIsRunning(false); // stop timer
                        playSound(); // Play sound when timer reaches 0
                        return 0; // set time to 0
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
            // Unload the sound when the component unmounts
            if (sound) {
                sound.unloadAsync();
            }
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
