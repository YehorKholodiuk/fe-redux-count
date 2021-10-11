const initialState = {
    count: 4
}

function reducer(state = initialState, action) {
    console.log(action)


    switch (action.type) {
        case 'MINUS':
            return {
                ...state,
                count: state.count - action.payload
            };
        case 'PLUS':
            return {
                ...state,
                count: state.count + action.payload
            };

        case 'RESET':

            return {
                ...state,
                count: initialState.count
            }
        default:
            return state;
    }


    return state;
}

export default reducer;