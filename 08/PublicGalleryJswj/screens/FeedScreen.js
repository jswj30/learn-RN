import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getPosts } from '../lib/posts';

import PostCard from '../components/PostCard';

const FeedScreen = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <FlatList 
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const renderItem = ({item}) => (
  <PostCard 
    user={item.user}
    photoURL={item.photoURL}
    description={item.description}
    createdAt={item.createdAt}
    id={item.id}
  />
)

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48, 
  }, 
  spinner: {
    height: 64, 
  }, 
});

export default FeedScreen;