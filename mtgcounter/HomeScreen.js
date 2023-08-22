import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleTwoPlayerPress = () => {
    navigation.navigate('TwoPlayer'); // Navigate to the TwoPlayerScreen
  };

  return (
    <View style={styles.container}>
      <Button title="Two Player" onPress={handleTwoPlayerPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default HomeScreen;