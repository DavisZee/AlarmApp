import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


interface TimerProps {
    time: number; // accept time as a prop
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>; // function to set running state
    setTime: React.Dispatch<React.SetStateAction<number>>; // function to set time
}


const Timer: React.FC<TimerProps> = ( {time, isRunning, setIsRunning, setTime} ) => {
    // testing input value
    //let input = 3;

    //const [time, setTime] = useState(input); // time in seconds starts at 10 seconds
    //const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(interval); // clear interval when time reaches 0
                        setIsRunning(false); // stop timer
                        return 0;// set time to 0
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
        };
    }, [isRunning, time, setIsRunning, setTime]);

    

    /*
    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setTime(input);
    };
    */
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{formatTime(time)}</Text>
            <Text style={styles.statusText}>{isRunning ? 'Running' : 'Paused'}</Text>
            {/** 
            <Button title="Start" onPress={startTimer} />
            <Button title="Pause" onPress={pauseTimer} />
            <Button title="Reset" onPress={resetTimer} />
            */}
            
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
    statusText: {
        fontSize: 24,
        color: 'gray',
    },
});

export default Timer;
