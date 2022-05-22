import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import events from '../lib/event';

import PostCard from '../components/PostCard';

const PostScreen = () => {
  const route = useRoute();
  const {post} = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const handler = ({description}) => {
      navigation.setParams({post: {...post, description}});
    };
    events.addListener('updatePost', handler);
    return () => {
      events.removeListener('updatePost', handler);
    };
  }, [post, navigation]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <PostCard 
        user={post.user}
        photoURL={post.photoURL}
        description={post.description}
        createdAt={post.createdAt}
        id={post.id}
      />
    </ScrollView>
  );
};

const styles =StyleSheet.create({
  block: {
    flex: 1, 
  }, 
  contentContainer: {
    paddingBottom: 40, 
  }, 
});

export default PostScreen;