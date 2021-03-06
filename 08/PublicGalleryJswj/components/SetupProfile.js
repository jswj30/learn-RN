import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Pressable, Platform, Image, ActivityIndicator } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { signOut } from '../lib/auth';
import { createUser } from '../lib/user';
import BorderedInput from './BorderedInput';
import CustomButton from './CustomButton';
import { useUserContext } from '../contexts/UserContext';
import storage from '@react-native-firebase/storage';

import Avatar from './Avatar';

const SetupProfile = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {uid} = params || {};
  const {setUser} = useUserContext();

  const [displayName, setDisplayName] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);

    let photoURL = null;

    if (response) {
      const asset = response.assets[0];
      const extension = asset.fileName.split('.').pop();
      const reference = storage().ref(`/profile/${uid}.${extension}`);

      if (Platform.OS === 'android') {
        await reference.putString(asset.base64, 'base64', {
          contentType: asset.type, 
        });
      } else {
        await reference.putFile(asset.uri);
      }

      photoURL = response ? await reference.getDownloadURL() : null;
    }

    const user = {
      id: uid, 
      displayName, 
      photoURL, 
    };

    createUser(user);
    setUser(user);
  };

  const onCancel = () => {
    signOut();
    navigation.goBack();
  };

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo', 
        maxWidth: 512, 
        maxHeight: 512, 
        includeBase64: Platform.OS === 'android', 
      }, 
      (res) => {
        if (res.didCancel) {
          return;
        }
        setResponse(res);
      }, 
    );
  };

  return (
    <View style={styles.block}>
      <Pressable onPress={onSelectImage}>
        <Avatar source={response && {uri: response.uri}} size={128} />
      </Pressable>
      <View style={styles.form}>
        <BorderedInput 
          placeholder="?????????"
          value={displayName}
          onChangeText={setDisplayName}
          onSubmitEdition={onSubmit}
          returnKeyType="next"
        />
        {loading ? (
          <ActivityIndicator size={32} color="#6200ee" style={styles.spinner}/>
        ) : (
          <View style={styles.buttons}>
            <CustomButton title="??????" onPress={onSubmit} hasMarginBottom />
            <CustomButton title="??????" onPress={onCancel} hasMarginBottom />
          </View>
        )}
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
  spinner: {
    marginTop: 48, 
  }
});

export default SetupProfile;