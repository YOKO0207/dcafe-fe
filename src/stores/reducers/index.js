import { combineReducers } from 'redux';

import counterReducer from './util/counter';
import savedMenuItemsReducer from './orders/savedMenuItems';
import savedOrderReducer from './orders/savedOrder';

const allReducer = combineReducers({
    counter: counterReducer, // state名：Reducer
    savedMenuItems: savedMenuItemsReducer,
    savedOrder: savedOrderReducer
});

export default allReducer;
