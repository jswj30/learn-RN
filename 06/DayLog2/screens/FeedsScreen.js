import React, { useContext } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import LogContext from '../contexts/LogContext';

const FeedsScreen = () => {
  const { text, setText } = useContext(LogContext);

  return (
    <View style={styles.block}>
      <TextInput 
        value={text}
        onChangeText={setText}
        placeholder="텍스트를 입력하세요."
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {

  }, 
  input: {
    padding: 16, 
    backgroundColor: 'white', 
  }, 
})
export default FeedsScreen;