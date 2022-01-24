import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import DateHead from './components/DateHead';
const App = () => {
  const today = new Date();
  
  return (
    <SafeAreaView>
      <View>
        <DateHead date={today} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})

export default App;