
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import CounterScreen from './src/screen/CounterScreen'
import TodoScreen from './src/screen/TodoScreen';

const App = () => {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
};

export default App;