import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LogContext from '../contexts/LogContext';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <Box>
        {(value) => <Text>{value}</Text>}
      </Box>
    </View>
  );
}

function Box({children}) {
  return <View style={styles.box}>{children('Hello World')}</View>;
}

const styles = StyleSheet.create({
  block: {

  }, 
  box: {
    borderWidth: 2, 
    padding: 16, 
    borderBottomColor: 'black', 
    marginBottom: 16, 
  }, 
})
export default FeedsScreen;


// const FeedsScreen = () => {
//   return (
//     <View style={styles.block}>
//       <LogContext.Consumer>
//         {(value) => <Text>{value}</Text>}
//       </LogContext.Consumer>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   block: {

//   }, 
// })
// export default FeedsScreen;