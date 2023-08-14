import React from 'react';
import { View, StyleSheet } from 'react-native';
// import LotusIcon from './Lotus';
import SVGatorComponent from '../assets/logo_adobe_express';
const AnimatedIconTest = () => {
  return (
    <View style={styles.container}>
      <SVGatorComponent isAnimationActive={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimatedIconTest;