import React from 'react';
import { View, StyleSheet } from 'react-native';
import SVGatorComponent from '../assets/Lotus';
// import SVGatorComponent from '../assets/logo_adobe_express';
const AnimatedIconTest = () => {
  return (
    <View>
    <SVGatorComponent style={styles.container}
      isAnimationActive={true} />
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