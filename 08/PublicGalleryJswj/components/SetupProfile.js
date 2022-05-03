import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Pressable, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { signOut } from '../lib/auth';
import { createUser } from '../lib/user';
import BorderedInput from './BorderedInput';
import CustomButton from './CustomButton';
import { useUserContext } from '../contexts/UserContext';

const SetupProfile = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {uid} = params || {};
  const {setUser} = useUserContext();

  const [displayName, setDisplayName] = useState('');

  const onSubmit = () => {
    const user = {
      id: uid, 
      displayName, 
      photoURL: null, 
    };
    createUser(user);
    setUser(user);
  };

  const onCancel = () => {
    signOut();
    navigation.goBack();
  };

  // const onSelectImage = () => {
  //   launchImageLibrary()
  // }

  return (
    <View style={styles.block}>
      <View style={styles.circle} />
      <View style={styles.form}>
        <BorderedInput 
          placeholder="닉네임"
          value={displayName}
          onChangeText={setDisplayName}
          onSubmitEdition={onSubmit}
          returnKeyType="next"
        />
        <View style={styles.buttons}>
          <CustomButton title="다음" onPress={onSubmit} hasMarginBottom />
          <CustomButton title="취소" onPress={onCancel} hasMarginBottom />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    alignItems: 'center', 
    marginTop: 24, 
    paddingHorizontal: 16, 
    width: '100%', 
  }, 
  circle: {
    backgroundColor: '#cdcdcd', 
    borderRadius: 64, 
    width: 128, 
    height: 128, 
  }, 
  form: {
    marginTop: 16, 
    width: '100%', 
  }, 
  buttons: {
    marginTop: 48, 
  }, 
});

export default SetupProfile;