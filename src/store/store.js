import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import  combinedReducers from '../modules/reducers/index';

export function configureStore() {
    return createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)));
}