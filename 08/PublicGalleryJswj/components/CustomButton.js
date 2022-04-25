import React from 'react';
import { StyleSheet, View, Pressalbe, Text, Platform } from 'react-native';

const CustomButton = ({onPress, title, hasMarginBottom}) => {
  return (
    <View style={[styles.block, hasMarginBottom && styles.margin]}>
      <Pressalbe 
        onPress={onPress}
        style={({pressed}) => [
          styles.wrapper, 
          Platform.OS === 'ios' && pressed && {opacity: 0.5}
        ]}
        android_ripple={{
          color: '#ffffff', 
        }}>
        <Text style={[styles.text]}>{title}</Text>  
      </Pressalbe>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 4, 
    overflow: 'hidden', 
  }, 
  wrapper: {
    borderRadius: 4, 
    height: 48, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#6200ee', 
  }, 
  text: {
    fontWeight: 'bold', 
    fontSize: 14, 
    color: 'white', 
  }, 
  margin: {
    marginBottom: 8, 
  }, 
});

export default CustomButton;