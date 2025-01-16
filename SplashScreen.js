import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    // Fade in animation
    Animated.sequence([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      // Hold for 3 seconds
      Animated.delay(3000),
      // Fade out animation
      Animated.timing(logoOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to Home screen after animation
      navigation.replace('Home');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: 'https://umbedcollege.org/wp-content/themes/umbed/images/umbed.png' }}
        style={[
          styles.logo,
          {
            opacity: logoOpacity,
            transform: [
              {
                scale: logoOpacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2238',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;