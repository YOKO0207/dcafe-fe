const savedMenuItemsReducer = (state = "", action) => {
    switch (action.type) {
    case 'SET_SAVED_MENU_ITEMS':
        return {
            state: action.savedMenuItems
        }
    default:
        return state;
    }
    
}
export default savedMenuItemsReducer;