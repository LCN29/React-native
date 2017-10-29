/**
 * Created by LCN on 2017/9/10 0010.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let middlewares = [thunk];

const configureStore = ( preloadedState )=>{
    return createStore(
        reducer,
        preloadedState,
        compose (
            applyMiddleware(...middlewares)
        )
    );
};

const store = configureStore();

export default store;