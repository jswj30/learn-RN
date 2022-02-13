import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import { LogContextProvider } from './contexts/LogContext';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;