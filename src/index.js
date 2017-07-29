/**
 * Created by Shashank on 7/29/2017.
 */
import 'babel-core/polyfill';


import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore';
import createRoutes from './routes';

const store = configureStore();


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            { createRoutes(store) }
        </Router>
    </Provider>,
    document.getElementById('root')
);
