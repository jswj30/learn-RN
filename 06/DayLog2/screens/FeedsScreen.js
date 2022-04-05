import React, { useContext } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1, 
  }, 
  input: {
    padding: 16, 
    backgroundColor: 'white', 
  }, 
})
export default FeedsScreen;