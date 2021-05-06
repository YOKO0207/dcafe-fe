export const initialState = {
    savedMenuItems: [],
};

const savedMenuItemsReducer = (state = [], action) => {
    switch (action.type) {
    case 'SET_SAVED_MENU_ITEMS':
        // return {
        //     savedMenuItems: action.savedMenuItems
        // }
        return {
            ...state,
            state: [...state, action.savedMenuItems]
        }
        // return [ 
        //     ...state, 
        //     action.savedMenuItems
        //   ]; 
        // return [...state, ...action.savedMenuItems];
    default:
        return state;
    }
    
}
export default savedMenuItemsReducer;