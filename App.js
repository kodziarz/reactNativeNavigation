// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from "./components/Screen1"
import Screen2 from "./components/Screen2"
import MainScreen from './components/MainScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='main' component={MainScreen} />
        <Stack.Screen name='s1' component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
