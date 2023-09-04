import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Splash.jsx';
import LogIn from './components/LogIn.jsx';
import Profile from './components/Profile.jsx';
import Register from './components/Register.jsx';
import SymptomFormScreen from './components/Symptoms.jsx';
import Diagnosis from './components/Diagnosis.jsx';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Symptoms" component={SymptomFormScreen} />
        <Stack.Screen name="Diagnosis" component={Diagnosis} />
  
      </Stack.Navigator>
    );
  }
  
  export default AppNavigator;
  
