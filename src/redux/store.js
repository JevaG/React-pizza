import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import filterReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';

const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer

});


// to use a several middlewares together should use 'compose'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;