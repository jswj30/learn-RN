import React from 'react';
import {View, Text, Button} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button 
        title="Detail 1 열기"
        onPress={() => navigation.push('Detail', {
          id: 1, 
        })}
      />
    </View>
  );
}

function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
}

function MessageScreen() {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
}

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        showIcon: true, 
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: '홈', 
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />, 
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarLabel: '검색', 
          tabBarIcon: ({color}) => <Icon name="search" color={color} size={24} />, 
        }}
      />
      <Tab.Screen 
        name="Notification" 
        component={NotificationScreen} 
        options={{
          tabBarLabel: '알림', 
          tabBarIcon: ({color}) => <Icon name="notification" color={color} size={24} />, 
        }}
      />
      <Tab.Screen 
        name="Message" 
        component={MessageScreen} 
        options={{
          tabBarLabel: '메시지', 
          tabBarIcon: ({color}) => <Icon name="message" color={color} size={24} />, 
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;