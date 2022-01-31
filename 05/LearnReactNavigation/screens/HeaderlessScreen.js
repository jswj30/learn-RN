import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HeaderlessScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Header가 없네?</Text>
        <Button onPress={() => NavigationContainer.pop()} title="뒤로가기" />
      </View>
    </SafeAreaView>
  );
};

export default HeaderlessScreen;