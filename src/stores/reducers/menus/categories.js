import { REQUEST_STATE } from '../../constants/index';

export const initialState = {
    fetchState: REQUEST_STATE.INITIAL,
    categoriesList: [],
};

export const categoriesActionTypes = {
    FETCHING: 'FETCHING',
    FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const categoriesReducer = (state, action) => {
    switch (action.type) {
    case categoriesActionTypes.FETCHING:
        return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
        };
    case categoriesActionTypes.FETCH_SUCCESS:
        return {
        fetchState: REQUEST_STATE.OK,
        categoriesList: action.payload.categories,
        };
    default:
        throw new Error();
    }
}