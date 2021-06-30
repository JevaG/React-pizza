const initialState = {
    pizzaThickness: [],
    isLoading: false
}


const filters = (state = initialState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            pizzaThickness: action.payload,
            isLoading: true
        };
    }
    return state;
}

export default filters;