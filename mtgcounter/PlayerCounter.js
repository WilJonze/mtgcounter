import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';

const PlayerCounter = ({ playerName, health, onIncrement, onDecrement }) => {
  const [isIncrementClicked, setIsIncrementClicked] = useState(false);
  const [isDecrementClicked, setIsDecrementClicked] = useState(false);
  const fadeAnimRef = useRef(new Animated.Value(0)).current;
  const pulseAnimRef = useRef(new Animated.Value(1)).current;

  const handleIncrement = () => {
    setIsIncrementClicked(true);
    setIsDecrementClicked(false);
    onIncrement();
    fadeOutRedCircle();
  };

  const handleDecrement = () => {
    setIsIncrementClicked(false);
    setIsDecrementClicked(true);
    onDecrement();
    fadeOutRedCircle();
  };


  const fadeOutRedCircle = () => {
    Animated.timing(fadeAnimRef, {
      toValue: 0,
      duration: 200, 
      useNativeDriver: true,
    }).start(() => {
      setIsIncrementClicked(false);
      setIsDecrementClicked(false);
    });
  };


  return (
    <View style={styles.playerCounter}>
      <Text style={styles.playerName}>{playerName}</Text>
      <View style={styles.healthContainer}>
        <TouchableOpacity
          onPress={handleDecrement}
          style={[styles.button, isDecrementClicked && styles.clickedButton]}
        >
          <Text style={[styles.buttonText, isDecrementClicked && styles.clickedDecrementText]}>-</Text>
        </TouchableOpacity>
        <Text style={styles.healthText}>{health}</Text>
        <TouchableOpacity
          onPress={handleIncrement}
          style={[styles.button, isIncrementClicked && styles.clickedButton]}
        >
          <Text style={[styles.buttonText, isIncrementClicked && styles.clickedIncrementText]}>+</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playerCounter: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  playerName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  healthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  button: {
    marginHorizontal: 10,
    padding: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 50,
  },

  clickedDecrementText: {
    color: 'red',
  },

  clickedIncrementText: {
    color: 'green',
  },

  healthText: {
    fontSize: 100,
    marginHorizontal: 25,
  },

});

export default PlayerCounter;