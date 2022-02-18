import React, { useContext } from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import FloatingWriteButton from './FloatingWriteButton';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

// function Box({children}) {
//   return <View style={styles.box}>{children('Hello World')}</View>;
// }

const styles = StyleSheet.create({
  block: {
    flex: 1, 
  }, 
});

export default FeedsScreen;