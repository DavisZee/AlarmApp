import { Button, TextInput, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles, bt_card_styles, timer_styles, timer_button_styles, timer_comp_styles } from '../styles'; // import path for styles
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
      <View style={timer_styles.card}>
        {/* header */}
        <View style={timer_button_styles.button_border}>
          {/* Triangle Buttons Container */}
          <View style={timer_button_styles.triangleContainer}>
            <TouchableOpacity style={timer_button_styles.tri_up_button} onPress={() => console.log("Button 1 pressed")} />
            <TouchableOpacity style={timer_button_styles.tri_up_button} onPress={() => console.log("Button 2 pressed")} />
            <TouchableOpacity style={timer_button_styles.tri_up_button} onPress={() => console.log("Button 3 pressed")} />
          </View>
        </View>

        {/* alarm body */}
        <View>
          <Timer time={time} isRunning={isRunning} setIsRunning={setIsRunning} setTime={setTime} />
        </View>
        
        {/* footer */}
        <View style={timer_button_styles.button_border}>
          {/* Triangle Buttons Container */}
          <View style={timer_button_styles.triangleContainer}>
            <TouchableOpacity style={timer_button_styles.tri_down_button} onPress={() => console.log("Button 1 pressed")} />
            <TouchableOpacity style={timer_button_styles.tri_down_button} onPress={() => console.log("Button 2 pressed")} />
            <TouchableOpacity style={timer_button_styles.tri_down_button} onPress={() => console.log("Button 3 pressed")} />
          </View>
        </View>
      </View>

      {/** Timer Control Buttons */}
      <View style={timer_styles.buttonContainer}>
        {/* 
        <TouchableOpacity>
          <Text>Test</Text>
        </TouchableOpacity>
        */}
        <Button title="Start" onPress={startTimer}/>
        <Button title="Pause" onPress={pauseTimer} />
        <Button title="Reset" onPress={resetTimer} />
      </View>
      <View><Text style={timer_comp_styles.statusText}>Status: {isRunning ? 'Running' : 'Paused'}</Text></View>
      
    </View>
  );
};

export default HomeScreen;
