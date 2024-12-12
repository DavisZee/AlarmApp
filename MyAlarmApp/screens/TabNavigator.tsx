// TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importing icons from Expo's Ionicons set
import HomeScreen from './tab_screens/HomeScreen';
import SettingsScreen from './tab_screens/SettingsScreen';
import ChooseSoundScreen from './tab_screens/ChooseSoundScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#59F8BB' },
        headerTintColor: '#000000',
        tabBarStyle: { backgroundColor: '#59F8BB' }, // Tab bar background color
        tabBarActiveTintColor: '#E6A459', // Active tab text color
        tabBarInactiveTintColor: '#333', // Inactive tab text color
        tabBarIcon: ({ color, size }) => {
          // Set a default icon in case the route name does not match any condition
          let iconName: keyof typeof Ionicons.glyphMap = 'help-circle';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Sound Options') {
            iconName = 'musical-notes';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }

          // Return the appropriate icon
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Sound Options" component={ChooseSoundScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}