import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateHead from './components/DateHead';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const today = new Date();
  
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <DateHead date={today} />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({

})

export default App;