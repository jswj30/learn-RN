import React, { useState } from 'react';
import {SafeAreaView, Button} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };

  const name = 'JSX';
  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      {visible && <Box rounded={true} size="large" color="blue" />}
      {/* 주석을 작성해봅시다. */}
      <Greeting 
        name={name}  // 이름을 설정하기
      />
    </SafeAreaView>
  );
};

export default App;