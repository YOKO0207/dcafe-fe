import { combineReducers } from 'redux';

import counterReducer from './util/counter';

const allReducer = combineReducers({
    counter: counterReducer, // state名：Reducer
});

export default allReducer;
