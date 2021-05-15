import { combineReducers } from 'redux';

import counterReducer from './util/counter';
import savedMenuItemsReducer from './orders/savedMenuItems';

const allReducer = combineReducers({
    counter: counterReducer, // state名：Reducer
    savedMenuItems: savedMenuItemsReducer
});

export default allReducer;
