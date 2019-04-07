import React from 'react';
import Todo from './src/app/Todo';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;

