import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getPosts, getOlderPosts, PAGE_SIZE } from '../lib/posts';

import PostCard from '../components/PostCard';

const FeedScreen = () => {
  const [posts, setPosts] = useState(null);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const onLoadMore = async () => {
    if (noMorePost || !posts || posts.length < PAGE_SIZE) {
      return;
    }
    const lastPost = posts[posts.length - 1];
    const olderPosts = await getOlderPosts(lastPost.id);
    if (olderPosts.length < PAGE_SIZE) {
      setNoMorePost(true);
    }
    setPosts(posts.concat(olderPosts));
  };

  return (
    <FlatList 
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.75}
      ListFooterComponent={
        !noMorePost && (
          <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />
        )
      } 
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