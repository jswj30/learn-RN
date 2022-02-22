import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchContext from '../contexts/SearchContext';

const SearchScreen = () => {
  const {keyword} = useContext(SearchContext);
  return (
    <View style={styles.block}>
      <Text>{keyword}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {

  }, 
})

export default SearchScreen;