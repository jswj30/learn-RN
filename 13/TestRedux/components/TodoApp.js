import React, { useState } from 'react';
import { View, Text , StyleSheet, SafeAreaView, FlatList, TextInput, Pressable } from 'react-native';
import useTodos from '../hooks/useTodos';
import useTodosActions from '../hooks/useTodosActions';

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

const TodoItem = ({id, text, done}) => {
  const {toggle, remove} = useTodosActions();

  const onToggle = () => {
    toggle(id);
  };
  const onRemove = () => {
    remove(id);
  };

  return (
    <View style={styles.todo}>
      <Pressable onPress={onToggle} style={styles.toggle}>
        <Text style={done && styles.doneText}>{text}</Text>
      </Pressable>
      <BlackButon onPress={onRemove} title="삭제" />
    </View>
  );
}

const Todos = () => {
  const todos = useTodos();

  return (
    <FlatList 
      style={styles.todos}
      data={todos}
      renderItem={({item}) => (
        <TodoItem id={item.id} text={item.text} done={item.done} />
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.separator}/>} 
    />
  );
}

const TodoInput = () => {
  const [text, setText] = useState('');
  const {add} = useTodosActions();

  const onPress = () => {
    add(text);
    setText('');
  }

  return (
    <View style={styles.inputWrapper}>
      <TextInput 
        style={styles.input}
        placeholder="할일을 입력하세요"
        value={text}
        onChangeText={setText}
      />
      <BlackButon onPress={onPress} title="등록" />
    </View>
  );
}

const TodoApp = () => {
  return (
    <SafeAreaView style={styles.block}>
      <Todos />
      <TodoInput />
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