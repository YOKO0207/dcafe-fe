const savedOrderReducer = (state = "", action) => {
    switch (action.type) {
    case 'SET_SAVED_ORDER':
        return {
            state: action.savedOrder
        }
    default:
        return state;
    }
    
}
export default savedOrderReducer;