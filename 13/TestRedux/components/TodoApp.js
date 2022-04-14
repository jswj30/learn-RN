import React from 'react';
import { View, Text , StyleSheet, SafeAreaView, FlatList, TextInput, Pressable } from 'react-native';

const BlackButon = ({ onPress, title }) => {
  return (
    <Pressable 
      style={styles.button}
      onPress={onPress}
      android_ripple={{color: 'white'}}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const TodoApp = () => {
  return (
    <SafeAreaView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1, 
  },
  inputWrapper: {
    borderColor: 'black', 
    borderTopWidth: 1, 
    borderBottomWidth: 1, 
    flexDirection: 'row', 
  }, 
  input: {
    flex: 1, 
  }, 
  button: {
    paddingHorizontal: 16, 
    paddingVertical: 8, 
    backgroundColor: 'black', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  buttonText: {
    color: 'white', 
  }, 
  todos: {
    flex: 1, 
  }, 
  todo: {
    flexDirection: 'row', 
  }, 
  toggle: {
    justifyContent: 'center', 
    flex: 1, 
  }, 
  doneText: {
    textDecorationLine: 'line-through', 
  }, 
  separator: {
    height: 1, 
    backgroundColor: 'black', 
  }, 
});

export default TodoApp;