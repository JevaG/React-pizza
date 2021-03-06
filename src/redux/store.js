import { createStore, combineReducers } from "redux";

import filterReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';

const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer

});



const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;
export default store;