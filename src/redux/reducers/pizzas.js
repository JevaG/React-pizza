const initialState = {
    pizzaThickness: [],
    isLoading: false
}


const pizzas = (state = initialState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            pizzaThickness: action.payload,
            isLoading: true
        };
    }
    return state;
}

export default pizzas;