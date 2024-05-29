import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hit from './screens/week1/Hit';
import HomeStack from './navigations/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigations/RootStack';


export default function App() {
  return (
    
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  
  );
}


