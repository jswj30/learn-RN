import React, { useState } from 'react';
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

const TodoItem = ({id, text, done}) => {
  const onToggle = () => {
    console.log(`토글 ${id}`);
  };
  const onRemove = () => {
    console.log(`제거 ${id}`);
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
  const todos = [
    {id: 1, text: '리액트 네이티브 배우기', done: true}, 
    {id: 2, text: '상태 관리 배우기', done: false}, 
  ];

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

  const onPress = () => {
    console.log('등록');
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