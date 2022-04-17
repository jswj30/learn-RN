import React from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';

const CalendarView = () => {
  // 현재 연/월 사용하기
  const markedDates = {
    '2022-04-19': {
      selected: true, 
    }, 
    '2022-04-21': {
      marked: true, 
    }, 
    '2022-04-25': {
      marked: true, 
    }, 
  }

  return (
    <Calendar 
      style={styles.calendar} 
      markedDates={markedDates}
      theme={{
        selectedDayBackgroundColor: '#009688', 
        arrowColor: '#009688', 
        dotColor: '#009688', 
        todayTextColor: '#009688', 
      }}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1, 
    borderBottomColor: '#e0e0e0', 
  }, 
});

export default CalendarView;