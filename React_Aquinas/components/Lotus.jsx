import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const AnimatedIcon = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const interpolatedRotate = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['45deg', '-45deg'],
  });

  const interpolatedRotate2 = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['45deg', '135deg'],
  });

  const interpolatedRotate4 = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['45deg', '0deg'],
  });

  const interpolatedRotate5 = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['45deg', '90deg'],
  });

  return (
      <Animated.View style={{ opacity: animationValue }}>
      <Animated.View style={[styles.child, styles.child1, { transform: [{ rotate: interpolatedRotate }] }]}></Animated.View>
      <Animated.View style={[styles.child, styles.child2, { transform: [{ rotate: interpolatedRotate2 }] }]}></Animated.View>
      <View style={[styles.child, styles.child3]}></View>
      <Animated.View style={[styles.child, styles.child4, { transform: [{ rotate: interpolatedRotate4 }] }]}></Animated.View>
      <Animated.View style={[styles.child, styles.child5, { transform: [{ rotate: interpolatedRotate5 }] }]}></Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    position: 'relative',
  },
  child: {
    position: 'absolute',
    borderRadius: 70,
    borderWidth: 4,
    width: 120,
    height: 120,
    left: 10,
    top: 50,
    transformOrigin: '90px 90px',
  },
  child1: {
    backgroundColor: 'rgba(255, 0, 0, 0.21)',
  },
  child2: {
    backgroundColor: 'rgba(255, 255, 0, 0.21)',
  },
  child3: {
    backgroundColor: 'rgba(0, 255, 0, 0.21)',
  },
  child4: {
    backgroundColor: 'rgba(0, 255, 255, 0.21)',
  },
  child5: {
    backgroundColor: 'rgba(0, 0, 255, 0.21)',
  },
});

export default AnimatedIcon;
