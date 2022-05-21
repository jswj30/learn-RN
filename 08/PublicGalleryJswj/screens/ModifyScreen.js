import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  StyleSheet, 
  TextInput, 
  Platform, 
  KeyboardAvoidingView, 
} from 'react-native';
import { updatePost } from '../lib/posts';

import IconRightButton from '../components/IconRightButton';

const ModifyScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();

  const [description, setDescription] = useState(params.description);

  const onSubmit = useCallback(async () => {
    await updatePost({
      id: params.id, 
      description, 
    });
    // TODO: 포스트 및 포스트 목록 업데이트
    navigation.pop();
  }, [navigation, params.id, description]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconRightButton onPress={onSubmit} name="check" />
    })
  }, [navigation, onSubmit]);

  return (
    <KeyboardAvoidingView 
      style={styles.block}
      behavior={Platform.select({ios: 'height'})}
      keyboardVerticalOffset={Platform.select({
        ios: 88, 
      })}
    >
      <TextInput 
        style={styles.input}
        multiline={true}
        placeholder="이 사진에 대한 설명을 입력하세요..."
        textAlignVertical="top"
        value={description}
        onChangeText={setDescription}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1, 
  }, 
  input: {
    paddingHorizontal: 16, 
    paddingTop: 16, 
    paddingBottom: 16, 
    flex: 1, 
    fontSize: 16, 
  }
})

export default ModifyScreen;