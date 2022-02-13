import React from 'react';
import {StyleSheet, View} from 'react-native';

const FeedsScreen = () => {
  return (
    <View style={styles.block} />
  );
};

const styles = StyleSheet.create({
  block: {
  }, 
});

export default FeedsScreen;

// import React, {useCallback, useContext} from 'react';
// import {StyleSheet, View, Text, TextInput} from 'react-native';
// import LogContext from '../contexts/LogContext';

// const FeedsScreen = () => {
//   const {text, setText} = useContext(LogContext);
//   return (
//     <View style={styles.block}>
//       <TextInput 
//         value={text} 
//         onChangeText={setText}
//         placeholder="텍스트를 입력하세요." 
//         style={styles.input}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   box: {
//     borderWidth: 2, 
//     padding: 16, 
//     borderBottomColor: 'black', 
//     marginBottom: 16, 
//   },  
//   input: {
//     padding: 16, 
//     backgroundColor: 'white', 
//   }, 
// });

// export default FeedsScreen;