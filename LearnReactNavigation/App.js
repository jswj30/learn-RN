import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import DetailScreen from './screens/DetailScreen';
import HeaderlessScreen from './screens/HeaderlessScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreens}
          options={{
            title: '홈', 
            // Header 블록에 대한 스타일
            headerStyle: {
              backgroundColor: '#29b6f6', 
            }, 
            // Header의 텍스트, 버튼들 색상
            headerTintColor: '#ffffff', 
            // 타이틀 텍스트의 스타일
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 20, 
            }, 
          }} 
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={{
            headerBackVisible: false, 
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ), 
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ), 
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),  
          }}
        />
        <Stack.Screen 
          name="Headerless" 
          component={HeaderlessScreen}
          options={{
            headerShown: false, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;