import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './slices';

import AuthApp from './components/AuthApp';
import TodoApp from './components/TodoApp';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      {/* <AuthApp /> */}
      <TodoApp />
    </Provider>
  );
};

export default App;