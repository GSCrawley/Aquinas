import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator.js';
import { View } from 'react-native';
// import AnimatedIconTest from './components/AnimatedIconTest';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  //   <View style={{ flex: 1 }}>
  //   <AnimatedIconTest />
  // </View>

  );
}
