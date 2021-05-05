const counterReducer = (state = 1, action) => {
    switch (action.type) {
    case 'INCREMENT':
        return state + 1;

    case 'DECREMENT':
        return state - 1;
    case 'SET_DEFAULT':
        return 1;

    default:
        return state;
    }
}
export default counterReducer;
