import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SVGatorComponent from '../assets/Lotus.js';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import { ContainerStyles, ButtonStyles, TextStyles } from './Styles';

// const AnimatedIcon = () => {
//   return (
//   <View>
//   <SVGatorComponent style={styles.container}
//     isAnimationActive={true} />
//   </View>
// )
// };  

export default Home = () => {
  const [data, setData] = useState(null);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [cpdata, setCPDATA] = useState(null);
  const navigation = useNavigation();

  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:6000/patient_server');
      // const result = await axios.get('https://nomadic-oarlock-392318.uw.r.appspot.com/edge');
      setData(result.data.url);
    };
    fetchData();
  }, []);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    setIsAnimationActive(true);
  };

  const stopAnimation = () => {
    setIsAnimationActive(false);
  };

  const navigateToLogin = () => {
    navigation.navigate('LogIn', { url: data });
  };

  return (
    <View style={ContainerStyles.container}>
      
            <SVGatorComponent style={styles.container}
    isAnimationActive={true} />

      {data ? (
        <View style={styles.content}>
         
          <TouchableOpacity
            style={[ButtonStyles.primaryButton, styles.button]}
            onPress={navigateToLogin}
          >
            <Text style={ButtonStyles.buttonText}>Log In</Text>
          </TouchableOpacity>
          </View>
      ) : (
        <Text style={TextStyles.body}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});