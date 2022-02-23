import {format} from 'date-fns';
import React, {useContext} from 'react';
import CalendarView from '../components/CalendarView';
import LogContext from '../contexts/LogContext';

const CalendarScreen = () => {
  const {logs} = useContext(LogContext);
  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  return (
    <CalendarView markedDates={markedDates} />
  );
};

export default CalendarScreen;

// import React, {useRef, useEffect, useState} from 'react';
// import {StyleSheet, View, Animated, Button} from 'react-native';

// function SlideLeftAndRight() {
//   const animation = useRef(new Animated.Value(0)).current;
//   const [enabled, setEnabled] = useState(false);

//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: enabled ? 1 : 0, 
//       useNAtiveDriver: true, 
//     }).start();
//   }, [enabled, animation])

//   return(
//     <View>
//       <Animated.View
//         style={[
//           styles.rectangle, 
//           {
//             transform: [
//               {
//                 translateX: animation.interpolate({
//                   inputRange: [0, 1], 
//                   outputRange: [0, 150], 
//                 }), 
//               }, 
//             ], 
//             opacity: animation.interpolate({
//               inputRange: [0, 1], 
//               outputRange: [1, 0], 
//             }), 
//           }, 
//         ]}
//       />
//       <Button 
//         title="Toggle"
//         onPress={() => {
//           setEnabled(!enabled);
//         }}
//       />
//     </View>
//   );
// }

// function FadeInAndOut() {
//   const animation = useRef(new Animated.Value(1)).current;
//   const [hidden, setHidden] = useState(false);
//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: hidden ? 0 : 1, 
//       useNativeDriver: true, 
//     }).start();
//   }, [hidden, animation]);

//   return (
//     <View>
//       <Animated.View 
//         style={[
//           styles.rectangle, 
//           {
//             opacity: animation, 
//           }, 
//         ]}
//       />
//       <Button 
//         title="Toggle"
//         onPress={() => {
//           setHidden(!hidden);
//         }}
//       />
//     </View>
//   );
// }

// const CalendarScreen = () => {
//   return (
//     <View style={styles.block}>
//       <FadeInAndOut />
//       <SlideLeftAndRight />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   block: {

//   }, 
//   rectangle: {
//     width: 100, 
//     height: 100, 
//     backgroundColor: 'black', 
//   }, 
// })

// export default CalendarScreen;