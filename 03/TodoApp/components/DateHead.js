import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateHead = () => {
  return (
    <View style={styles.block}>
      <Text style={styles.dataText}>2021년 5월 3일</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    padding: 16, 
    backgroundColor: '#26a69a', 
  }, 
  dataText: {
    fontSize: 24, 
    color: 'white', 
  }, 
});

export default DateHead;