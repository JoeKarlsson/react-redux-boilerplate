import 'core-js/es6/map';
import 'core-js/es6/set';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import PrimaryLayout from './components/shared/PrimaryLayout/PrimaryLayout';
import ErrorBoundary from './components/shared/ErrorBoundary/ErrorBoundary';

const store = configureStore();

ReactDOM.render((
	<Provider store={store}>
		<Router >
			<ErrorBoundary>
				<PrimaryLayout />
			</ErrorBoundary>
		</Router>
	</Provider>
), document.getElementById('root'));
