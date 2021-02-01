import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { uiReducer } from '../../reducers/uiReducer';

import { authReducer } from '../authReducer';
// using more than one reducer


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

// create the store 
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);