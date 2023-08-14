import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LotusIcon from './Lotus';
import { useNavigation } from '@react-navigation/native';
import { ContainerStyles, ButtonStyles, TextStyles } from './Styles';

export default Home = () => {
  const [data, setData] = useState('Temp');
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const navigation = useNavigation();

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
      {data ? (
        <View style={styles.content}>
          <TouchableOpacity onPress={stopAnimation}>
            <LotusIcon isAnimationActive={isAnimationActive} />
          </TouchableOpacity>
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
});