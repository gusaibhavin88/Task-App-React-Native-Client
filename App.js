import React from 'react';
import {Provider} from 'react-redux';
import Main from './main';
import store from './Redux/Store';

export default App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
