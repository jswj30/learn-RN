import React from 'react';
import {StyleSheet, View} from 'react-native';

const CalendarScreen = () => {
  return (
    <View style={styles.block} />
  );
};

const styles = StyleSheet.create({
  block: {

  }, 
});

export default CalendarScreen;


// import React, {useContext} from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import LogContext from '../contexts/LogContext';

// const CalendarScreen = () => {
//   const {text} = useContext(LogContext);
//   return (
//     <View style={styles.block}>
//       <Text style={styles.text}>text: {text}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   block: {

//   }, 
//   text: {
//     padding: 16, 
//     fontSize: 24, 
//   }, 
// });

// export default CalendarScreen;