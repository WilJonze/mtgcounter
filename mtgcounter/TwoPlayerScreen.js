import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import PlayerCounter from './PlayerCounter';

const { width } = Dimensions.get('window')

const TwoPlayerScreen = () => {
  const [player1Health, setPlayer1Health] = useState(40);
  const [player2Health, setPlayer2Health] = useState(40);

  const handlePlayer1Increment = () => setPlayer1Health((prevHealth) => prevHealth + 1);
  const handlePlayer1Decrement = () => setPlayer1Health((prevHealth) => prevHealth - 1);
  const handlePlayer2Increment = () => setPlayer2Health((prevHealth) => prevHealth + 1);
  const handlePlayer2Decrement = () => setPlayer2Health((prevHealth) => prevHealth - 1);

  return (
    <View style={styles.container}>


<View style={[styles.playerContainer, styles.invertedPlayer]}>
      <PlayerCounter
        playerName="Player 2"
        health={player2Health}
        onIncrement={handlePlayer2Increment}
        onDecrement={handlePlayer2Decrement}
      />
      </View>

      <View style={styles.divider} />

    <View style={[styles.playerContainer]}>
      <PlayerCounter
        playerName="Player 1"
        health={player1Health}
        onIncrement={handlePlayer1Increment}
        onDecrement={handlePlayer1Decrement}
      />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  playerContainer: {
    width: width * 0.4,
  },
  invertedPlayer: {
    transform: [{ rotate: '180deg' }],
  },
  divider: {
    width: '100%',
    height: 5,
    backgroundColor: 'black', // Set the color of the dividing line
  },
});

export default TwoPlayerScreen;