import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.js';
import { configureStore } from './store/store';
import 'bootstrap/dist/css/bootstrap.css';

import './index.scss'
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);