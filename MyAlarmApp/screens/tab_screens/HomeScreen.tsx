import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Timer from '../../components/Timer';
import { styles as importedStyles, bt_card_styles, timer_styles, timer_comp_styles } from '../styles';

const HomeScreen: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [initialTime, setInitialTime] = useState(0); // Store initial time in seconds based on pickers
  const [time, setTime] = useState(0); // Actual timer countdown value in seconds
  const [isRunning, setIsRunning] = useState(false);

  // Use ref to store the stop sound function
  const stopSoundRef = useRef<(() => void) | null>(null);

  // Update `initialTime` whenever hours, minutes, or seconds change
  useEffect(() => {
    if (!isRunning) {
      setInitialTime(hours * 3600 + minutes * 60 + seconds);
    }
  }, [hours, minutes, seconds, isRunning]);

  const startTimer = () => {
    if (!isRunning && time === 0) { 
      // Only set time to initialTime if the timer has not started or has been reset
      setTime(initialTime);
    }
    setIsRunning(true); // Start or resume the timer
  };

  const pauseTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(initialTime); // Reset to selected values
    if (stopSoundRef.current) {
      stopSoundRef.current(); // Stop the sound if it's playing
    }
  };

  // Function to set the stop sound function
  const setStopSoundFunction = (stopFunction: () => void) => {
    stopSoundRef.current = stopFunction;
  };

  return (
    <View style={importedStyles.container}>
      <Text style={styles.header}>Set Timer</Text>

      {/* Scrollable Pickers for Hours, Minutes, and Seconds */}
      <View style={styles.pickerContainer}>
        <View style={styles.pickerItem}>
          <Text>Hours</Text>
          <Picker
            selectedValue={hours}
            onValueChange={(value) => setHours(value)}
            style={{ width: 100 }}
          >
            {[...Array(24).keys()].map((i) => (
              <Picker.Item key={i} label={`${i}`} value={i} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerItem}>
          <Text>Minutes</Text>
          <Picker
            selectedValue={minutes}
            onValueChange={(value) => setMinutes(value)}
            style={{ width: 100 }}
          >
            {[...Array(60).keys()].map((i) => (
              <Picker.Item key={i} label={`${i}`} value={i} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerItem}>
          <Text>Seconds</Text>
          <Picker
            selectedValue={seconds}
            onValueChange={(value) => setSeconds(value)}
            style={{ width: 100 }}
          >
            {[...Array(60).keys()].map((i) => (
              <Picker.Item key={i} label={`${i}`} value={i} />
            ))}
          </Picker>
        </View>
      </View>

      {/* Display Timer */}
      <Timer
        time={time}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setTime={setTime}
        onStopSound={setStopSoundFunction}
      />

      {/* Timer Control Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={startTimer} />
        <Button title="Pause" onPress={pauseTimer} />
        <Button title="Reset" onPress={resetTimer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pickerItem: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
});

export default HomeScreen;
