import React from 'react';
import { StyleSheet } from 'react-native';
import CalendarView from '../components/CalendarView';

const CalendarScreen = () => {
  return (
    <CalendarView />
  );
};

const styles = StyleSheet.create({
  block: {

  }, 
  rectangle: {
    width: 100, 
    height: 100, 
    backgroundColor: 'black',
  }
})

export default CalendarScreen;