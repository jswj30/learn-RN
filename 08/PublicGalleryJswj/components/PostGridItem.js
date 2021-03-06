import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, useWindowDimensions, Image, Pressable } from 'react-native';

const PostGridItem = ({post}) => {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions();
  const size = (dimensions.width - 3) / 3;

  const onPress = () => {
    // TODO: 단일 포스트 조회 화면 띄우기
    navigation.navigate('Post', {post});
  };

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.6 : 1, 
          width: size, 
          height: size, 
        }, 
        styles.block
      ]}
    >
      <Image 
        style={styles.image}
        source={{uri: post.photoURL}}
        resizeMode="cover"
        resizeMethod='resize'
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    margin: 0.5, 
  }, 
  image: {
    backgroundColor: '#bdbdbd', 
    width: '100%', 
    height: '100%', 
  }, 
});

export default PostGridItem;