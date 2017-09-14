import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import PrimaryLayout from './components/shared/PrimaryLayout/PrimaryLayout';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router >
      <PrimaryLayout />
    </Router>
  </Provider>
), document.getElementById('root'));
