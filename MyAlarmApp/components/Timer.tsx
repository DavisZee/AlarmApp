import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Timer: React.FC = () => {
    const [time, setTime] = useState(0); // time in seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }
        
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning, time]);

    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{formatTime(time)}</Text>
            <Button title="Start" onPress={startTimer} />
            <Button title="Pause" onPress={pauseTimer} />
            <Button title="Reset" onPress={resetTimer} />
        </View>
    );
};

const styles = StyleSheet.create({
    timerContainer: {
        alignItems: 'center',
        margin: 20,
    },
    timerText: {
        fontSize: 48,
        marginBottom: 20,
    },
});

export default Timer;
