import React, { useContext } from 'react';
import CalendarView from '../components/CalendarView';
import LogContext from '../contexts/LogContext';

const CalendarScreen = () => {
  const {logs} = useContext(LogContext);
  
  return (
    <CalendarView />
  );
};

export default CalendarScreen;