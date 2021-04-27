import { REQUEST_STATE } from '../constants/index';

export const initialState = {
    fetchState: REQUEST_STATE.INITIAL,
    menuItem: {},
};

export const menuItemActionTypes = {
    FETCHING: 'FETCHING',
    FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const menuItemReducer = (state, action) => {
    switch (action.type) {
    case menuItemActionTypes.FETCHING:
        return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
        };
    case menuItemActionTypes.FETCH_SUCCESS:
        return {
        fetchState: REQUEST_STATE.OK,
        menuItem: action.payload.menuItem,
        };
    default:
        throw new Error();
    }
}