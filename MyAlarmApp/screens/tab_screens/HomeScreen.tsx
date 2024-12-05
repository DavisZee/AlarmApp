import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Timer from '../../components/Timer';
import { styles as importedStyles } from '../styles';

const HomeScreen: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [initialTime, setInitialTime] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [wasPaused, setWasPaused] = useState(false);

  const stopSoundRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const newInitialTime = hours * 3600 + minutes * 60 + seconds;
    setInitialTime(newInitialTime);

    if (!isRunning && !wasPaused) {
      setTime(newInitialTime);
    }
  }, [hours, minutes, seconds, isRunning, wasPaused]);

  const handlePickerChange = (
    value: number,
    type: 'hours' | 'minutes' | 'seconds'
  ) => {
    console.log(`Picker selection made - ${type}: ${value}`);
  
    if (type === 'hours') {
      setHours(value);
    } else if (type === 'minutes') {
      setMinutes(value);
    } else if (type === 'seconds') {
      setSeconds(value);
    }
  
    resetTimer(); // Automatically reset the timer when a change is made
  };

  const startTimer = () => {
    if (!isRunning) {
      if (!wasPaused) {
        setTime(initialTime);
      }
      setIsRunning(true);
      setWasPaused(false);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setWasPaused(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setWasPaused(false);
    setTime(initialTime);
    if (stopSoundRef.current) {
      stopSoundRef.current();
    }
  };

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
            onValueChange={(value) => handlePickerChange(value, 'hours')}
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
            onValueChange={(value) => handlePickerChange(value, 'minutes')}
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
            onValueChange={(value) => handlePickerChange(value, 'seconds')}
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
