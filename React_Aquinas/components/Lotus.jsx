import React, { useEffect }  from 'react';
import { View, Animated, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const LotusIcon = () => {
  const rotations = [45, -45, 135, 0, 90];
  const animatedValues = rotations.map(() =>new Animated.Value(0));

  const animatedStyles = animatedValues.map((animatedValue, index) => ({
    transform: [{ rotate: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', `${rotations[index]}deg`],
      }) }],
    }));

    const startAnimations = () => {
        rotations.forEach((_, index) => {
          Animated.loop(
            Animated.timing(animatedValues[index], {
              toValue: 1,
              duration: 3000,
              easing: Easing.linear,
              useNativeDriver: false,
            })
          ).start();
        });
      };

      useEffect(() => {
        startAnimations();
      }, []);
    
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Svg width={200} height={200} viewBox="0 0 200 200">
            {rotations.map((_, index) => (
              <Animated.View
                key={index}
                style={[
                  {
                    position: 'absolute',
                    transformOrigin: '90px 90px',
                    width: 120,
                    height: 120,
                  },
                  animatedStyles[index],
                ]}
              >
                <Circle cx="60" cy="60" r="50" fill="rgba(255,255,255,255)" />
              </Animated.View>
            ))}
          </Svg>
        </View>
      );
    };
    
    export default LotusIcon;