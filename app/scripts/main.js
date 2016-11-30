"use strict";
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from './general/reducers/rootReducer';
import { Router, Route, browserHistory } from 'react-router';
import Comp1 from './component1/containers/container.jsx';
import About from './about';
import {API_ROOT} from './general/constants/constants';

import 'material.js';

let middlewares = [apiMiddleware, thunk];

if (process.env.NODE_ENV !== "production") {
    const logger = createLogger();
    middlewares.push(logger);
}

console.log(process.env.NODE_ENV);

console.log(API_ROOT);

let store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Comp1} />
                <Route path="about" component={About} />
            </Router>

        </Provider>
    ), document.querySelector('#app')
);
