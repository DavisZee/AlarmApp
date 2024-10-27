import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles, card_styles } from '../styles'; // import path for styles
import Timer from '../../components/Timer'; 


const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Card component */}
      <View style={card_styles.card}>
        <View style={card_styles.cardHeader}>
          <Text style={card_styles.headerText}>Connected Device:</Text>
        </View>

        {/* Card body */}
        <View style={card_styles.cardBody}>
          <Text style={card_styles.bodyText}>MyAirPods</Text>
        </View>
      </View>
      <Timer/>

      <Text>This is my HomeScreen</Text>
      
    </View>
  );
};



export default HomeScreen;
