import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUserContext } from '../contexts/UserContext';
import { getUser } from '../lib/user';
import { subscribeAuth } from '../lib/auth';
import SplashScreen from 'react-native-splash-screen';

import SignInScreen from './SignInScreen';
import WelcomeScreen from './WelcomeScreen';
import MainTab from './MainTab';
import UploadScreen from './UploadScreen';
import ModifyScreen from './ModifyScreen';
import SettingScreen from './SettingScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const {user, setUser} = useUserContext();

  useEffect(() => {
    const unSubscribe = subscribeAuth(async currentUser => {
      unSubscribe();
      if (!currentUser) {
        SplashScreen.hide();
        return;
      }
      const profile = await getUser(currentUser.uid);
      if (!profile) {
        return;
      }
      setUser(profile);
    });
  }, [setUser])

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen 
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Upload"
            component={UploadScreen}
            options={{title: '새 게시물', headerBackTitle: '뒤로가기'}}
          />
          <Stack.Screen 
            name="Modify"
            component={ModifyScreen}
            options={{title: '설명 수정', headerBackTitle: '뒤로가기'}}
          />
          <Stack.Screen 
            name="Setting"
            component={SettingScreen}
            options={{title: '설정', headerBackTitle: '뒤로가기'}}
          />
        </>
      ) : (
        <>
          <Stack.Screen 
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootStack;