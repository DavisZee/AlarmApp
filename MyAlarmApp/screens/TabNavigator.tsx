// TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './tab_screens/HomeScreen';
import SettingsScreen from './tab_screens/SettingsScreen'
import ChooseSoundScreen from './tab_screens/ChooseSoundScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" 
        screenOptions={{ 
            headerStyle: { backgroundColor: '#59F8BB' }, 
            headerTintColor: '#000000', 
            tabBarStyle: { backgroundColor: '#59F8BB' }, // Tab bar background color
            tabBarActiveTintColor: '#E6A459', // Active tab text color
            tabBarInactiveTintColor: '#333', // Inactive tab text color
        }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Sound Options" component={ChooseSoundScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
