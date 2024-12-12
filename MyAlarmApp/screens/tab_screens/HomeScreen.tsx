import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Timer from '../../components/Timer';
import { styles as importedStyles } from '../styles';
import { home_popup_styles, bt_card_styles } from '../styles';

const HomeScreen: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [wasPaused, setWasPaused] = useState(false);

  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility
  const [deviceConnected, setDeviceConnected] = useState(true); // Device connection flag
  const [ignoreDevice, setIgnoreDevice] = useState(false);
  const stopSoundRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const newInitialTime = hours * 3600 + minutes * 60 + seconds;
    setInitialTime(newInitialTime);

    if (!isRunning && !wasPaused) {
      setTime(newInitialTime);
    }
  }, [hours, minutes, seconds, isRunning, wasPaused]);

  const handlePickerChange = useCallback(
    (value: number, type: 'hours' | 'minutes' | 'seconds') => {
      console.log(`Picker selection made - ${type}: ${value}`);

      if (type === 'hours') {
        setHours(value);
      } else if (type === 'minutes') {
        setMinutes(value);
      } else if (type === 'seconds') {
        setSeconds(value);
      }

      // Automatically reset the timer when a change is made
      setIsRunning(false);
      setWasPaused(false);
      setTime(value * 3600 + minutes * 60 + seconds); // Update time immediately based on new value
    },
    [minutes, seconds]
  );

  const startTimer = () => {
    if (deviceConnected || ignoreDevice) {
      // If the device is connected, start the timer immediately
      if (!isRunning) {
        if (!wasPaused) {
          setTime(initialTime);
        }
        setIsRunning(true);
        setWasPaused(false);
      }
    } else {
      // If the device is not connected, show the popup
      setShowPopup(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setWasPaused(true);
    setIgnoreDevice(false);
  };

  const resetTimer = () => {
    setIgnoreDevice(false);
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

  const handlePopupClose = () => setShowPopup(false);

  const handlePopupYes = () => {
    setIgnoreDevice(true);
    setShowPopup(false);
    startTimer();
  };

  const handlePopupNo = () => setShowPopup(false);

  return (
    <View style={importedStyles.container}>
      {/* Card component */}
      <View style={bt_card_styles.card}>
        <View style={bt_card_styles.cardHeader}>
          <Text style={bt_card_styles.headerText}>Connected Device:</Text>
        </View>

        {/* Card body */}
        <View style={bt_card_styles.cardBody}>
          <Text style={bt_card_styles.bodyText}>Connected</Text>
        </View>
      </View>
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

      {/* Popup Modal */}
      <Modal
        transparent={true}
        visible={showPopup}
        animationType="fade"
        onRequestClose={handlePopupClose}
      >
        <View style={home_popup_styles.modalOverlay}>
          <View style={home_popup_styles.popupCard}>
            <Text style={home_popup_styles.popupText}>No Bluetooth Device Connected! Proceed?</Text>
            <View style={home_popup_styles.buttonContainer}>
              <TouchableOpacity onPress={handlePopupYes}>
                <View style={home_popup_styles.button}>
                  <Text style={home_popup_styles.buttonText}>Yes</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePopupNo}>
                <View style={home_popup_styles.button}>
                  <Text style={home_popup_styles.buttonText}>No</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
