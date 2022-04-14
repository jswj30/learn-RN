import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { authorize, logout } from '../slices/auth';
import useAuthActions from '../hooks/useAuthActions';
import useUser from '../hooks/useUser';

const AuthStatus = () => {
  const user = useUser();

  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName: '로그인하세요'}
      </Text>
    </View>
  );
}

const AuthButtons = () => {
  const { authorize, logout } = useAuthActions();
  const onPressLogin = () => {
    authorize({
      id: 1, 
      username: 'johndoe', 
      displayName: 'John Doe', 
    });
  };

  return (
    <View>
      <Button title="로그인" onPress={onPressLogin} />
      <Button title="로그아웃" onPress={logout} />
    </View>
  );
}

const AuthApp = () => {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1, 
  }, 
  status: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  text: {
    fontSize: 20, 
  }, 
});

export default AuthApp;