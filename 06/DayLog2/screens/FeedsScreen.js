import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LogContext from '../contexts/LogContext';

const FeedsScreen = () => {
  const value = useContext(LogContext);
  return (
    <View style={styles.block}>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {

  }, 
})
export default FeedsScreen;