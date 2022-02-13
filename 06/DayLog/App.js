import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import LogContext from './contexts/LogContext';

const App = () => {
  return (
    <NavigationContainer>
      <LogContext.Provider value="app.js">
        <RootStack />
      </LogContext.Provider>
    </NavigationContainer>
  );
};

export default App;