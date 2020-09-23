import { combineReducers } from 'redux';

import todos from './todos';

export const reducers = {
    todos
};

export default combineReducers(reducers);
