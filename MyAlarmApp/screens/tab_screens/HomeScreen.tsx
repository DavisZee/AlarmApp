import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { styles, bt_card_styles, alarm_card_styles } from '../styles'; // import path for styles
import Timer from '../../components/Timer'; 


const HomeScreen: React.FC = () => {
  // temp test value
  const input = 3;


  const [time, setTime] = useState(input); // initial timer in seconds
  const [isRunning, setIsRunning] = useState(false);
  
  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(input); // reset to initial value
  };

  return (
    <View style={styles.container}>
      {/* Card component */}
      <View style={bt_card_styles.card}>
        <View style={bt_card_styles.cardHeader}>
          <Text style={bt_card_styles.headerText}>Connected Device:</Text>
        </View>

        {/* Card body */}
        <View style={bt_card_styles.cardBody}>
          <Text style={bt_card_styles.bodyText}>MyAirPods</Text>
        </View>
      </View>
      
      {/* Card component */}
      <View style={alarm_card_styles.card}>
        {/* header */}
        <View style={alarm_card_styles.cardBorder}>
        </View>

        {/* alarm body */}
        <View>
          <Timer time={time} isRunning={isRunning} setIsRunning={setIsRunning} setTime={setTime} />
        </View>
        
        {/* footer */}
        <View style={alarm_card_styles.cardBorder}>
        </View>
      </View>

      {/** Timer Control Buttons */}
      <View style={but_styles.buttonContainer}>
        <Button title="Start" onPress={startTimer} />
        <Button title="Pause" onPress={pauseTimer} />
        <Button title="Reset" onPress={resetTimer} />
      </View>
    </View>
  );
};

const but_styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default HomeScreen;
