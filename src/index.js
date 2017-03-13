import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    ,
    document.querySelector('.container'));
