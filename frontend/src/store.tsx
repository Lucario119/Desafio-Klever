import { createStore, combineReducers } from 'redux';
import register from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({ register });

const composeEnhancers = composeWithDevTools({});

const store = createStore(reducer, composeEnhancers());

export default store;
