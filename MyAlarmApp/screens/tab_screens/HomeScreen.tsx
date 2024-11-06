import { Button, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { styles, bt_card_styles, timer_styles, timer_button_styles, timer_comp_styles } from '../styles';
import Timer from '../../components/Timer';

const HomeScreen: React.FC = () => {
  const input = 3; // Initial timer value

  const [time, setTime] = useState(input);
  const [isRunning, setIsRunning] = useState(false);
  const stopSoundRef = useRef<(() => void) | null>(null);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(input);
    if (stopSoundRef.current) {
      stopSoundRef.current();
    }
  };

  const setStopSoundFunction = (stopFunction: () => void) => {
    stopSoundRef.current = stopFunction;
  };

  return (
    <View style={styles.container}>
      <View style={bt_card_styles.card}>
        <View style={bt_card_styles.cardHeader}>
          <Text style={bt_card_styles.headerText}>Connected Device:</Text>
        </View>
        <View style={bt_card_styles.cardBody}>
          <Text style={bt_card_styles.bodyText}>MyAirPods</Text>
        </View>
      </View>

      <View style={timer_styles.card}>
        <Timer
          time={time}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          setTime={setTime}
          onStopSound={setStopSoundFunction}
        />
      </View>

      <View style={timer_styles.buttonContainer}>
        <Button title="Start" onPress={startTimer} />
        <Button title="Pause" onPress={pauseTimer} />
        <Button title="Reset" onPress={resetTimer} />
      </View>

      <View>
        <Text style={timer_comp_styles.statusText}>Status: {isRunning ? 'Running' : 'Paused'}</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
