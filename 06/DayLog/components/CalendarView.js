import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';

const CalendarView = () => {
  return (
    <Calendar style={styles.calendar} />
  );
};

const styles=StyleSheet.create({
  calendar: {
    borderBottomWidth: 1, 
    borderBottomColor: '#e0e0e0', 
  }, 
});

export default CalendarView;