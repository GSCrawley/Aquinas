import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { WebView } from 'react-native-webview';
import AnimatedIcon from './Lotus';
import { useNavigation } from '@react-navigation/native';
import { ContainerStyles, TextStyles, ButtonStyles } from './Styles';


export default Home = () => {
  const [data, setData] = useState('Temp');
  const navigation = useNavigation();

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const result = await axios.get('https://nomadic-oarlock-392318.uw.r.appspot.com/edge');
    //     setData(result.data.url); // Assuming result.data contains the data you want to display
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    // fetchData();
  }, []);

  const navigateToLogin = () => {
    navigation.navigate('LogIn', { url: data });
  };

  return (
    <View style={[ContainerStyles.container, style.background]}>
       <AnimatedIcon /> 
      {data ? (
        <View style={style.content}>
           
          <TouchableOpacity style={[ButtonStyles.primaryButton, style.button, style.button1]} onPress={navigateToLogin}>
            <Text style={ButtonStyles.buttonText}>Log In</Text>
          </TouchableOpacity>
        
        </View>
      ) : (
        <Text style={TextStyles.body}>Loading...</Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  // background: {
  //   backgroundColor: '#FFFFFF', // Set your desired background color here
  // },
  content: {
    alignItems: 'center', 
  },
  logoContainer: {
    width: '100%',
    height: 200, // Adjust the height according to your needs
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    // marginBottom: 40,
    // backgroundColor: 'black'
  },
  button: {
    marginBottom: 10,
  }
 
});
