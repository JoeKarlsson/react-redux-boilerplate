import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import PrimaryLayout from './PrimaryLayout';

const store = configureStore();

ReactDOM.render((
  <Provider store={ store }>
    <Router >
      <PrimaryLayout />
    </Router>
  </Provider>
  ), document.getElementById('root')
);
