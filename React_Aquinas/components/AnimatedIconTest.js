import React from 'react';
import { View, StyleSheet } from 'react-native';
import LotusIcon from './Lotus';

const AnimatedIconTest = () => {
  return (
    <View style={styles.container}>
      <LotusIcon isAnimationActive={true} />
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