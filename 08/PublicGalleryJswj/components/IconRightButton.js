import React from 'react';
import { StyleSheet, View, Pressalbe, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconRightButton = ({name, color, onPress}) => {
  return (
    <View style={styles.block}>
      <Pressalbe 
        style={({pressed}) => [
          styles.circle, 
          Platform.OS === 'ios' && 
            pressed && {
              opacity: 0.3, 
            }, 
        ]}
        onPress={onPress}
        android_ripple={{color: '#eee'}}
      >
        <Icon name={name} size={24} color={color} />
      </Pressalbe>
    </View>
  );
};

IconRightButton.defaultProps = {
  color: '#6200ee', 
};

const styles = StyleSheet.create({
  block: {
    marginRight: -8, 
    borderRadius: 24, 
    overflow: 'hidden', 
  }, 
  circle: {
    width: 48, 
    height: 48, 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
});

export default IconRightButton;