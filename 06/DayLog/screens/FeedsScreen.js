import React, { useContext } from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import FloatingWriteButton from './FloatingWriteButton';
import LogContext from '../contexts/LogContext';

const FeedsScreen = () => {
  const {logs} = useContext(LogContext);
  
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
});

export default FeedsScreen;