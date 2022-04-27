import React, { useRef, useState } from 'react';
import { 
  Keyboard, 
  KeyboardAvoidingView, 
  Platform, 
  StyleSheet, 
  Text, 
  View,  
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
import SignForm from './SignForm';
import SignButtons from './SignButtons';

const SignInScreen = ({navigation, route}) => {
  const {isSignUp} = route.params ?? {};
  
  const [form, setForm] = useState({
    email: '', 
    password: '', 
    confirmPassword: '', 
  });

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const createChangeTextHandler = (name) => (value) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(form);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.text}>PublicGallery</Text>
        <View style={styles.form}>
          <SignForm 
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            form={form}
            createChangeTextHandler={createChangeTextHandler}
          />
          <SignButtons isSignUp={isSignUp} onSubmit={onSubmit} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  text: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#222222', 
  }, 
  form: {
    marginTop: 64, 
    width: '100%', 
    paddingHorizontal: 16, 
  }, 
  keyboardAvoidingView: {
    flex: 1, 
  }, 
});

export default SignInScreen;