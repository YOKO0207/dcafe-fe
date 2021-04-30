import { REQUEST_STATE } from '../../constants/index';

export const initialState = {
    fetchState: REQUEST_STATE.INITIAL,
    menuItemsList: [],
};

export const menuItemsActionTypes = {
    FETCHING: 'FETCHING',
    FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const menuItemsReducer = (state, action) => {
    switch (action.type) {
    case menuItemsActionTypes.FETCHING:
        return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
        };
    case menuItemsActionTypes.FETCH_SUCCESS:
        return {
        fetchState: REQUEST_STATE.OK,
        menuItemsList: action.payload.menuItems,
        };
    default:
        throw new Error();
    }
}