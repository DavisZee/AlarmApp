import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen'; 
import TabNavigator from './screens/TabNavigator'; 
//import SecondTestScreen from './screens/SecondTestScreen';
import { AppStateProvider } from './components/AppStateManager';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppStateProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start" screenOptions={{ headerStyle: { backgroundColor: '#59F8BB' }, headerTintColor: '#000000', }}>
          <Stack.Screen name="Welcome" component={StartScreen} />
          <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppStateProvider>
  );
}
