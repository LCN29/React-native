/**
 * Created by LCN on 2017/9/10 0010.
 */

import { createStore, applyMiddleware,compose } from 'redux';
import Reducers from '../reducer/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [ thunk ];

/*
 最简单的store
const store = createStore(
    Reducer,
    applyMiddleware(...middleware)
)
*/


const configureStore = ( preloadedState )=>{

    return createStore(
        Reducers,
        /* preloadedState 整个应用的初始状态, 此处为 undefinded */
        preloadedState,
        compose (
            applyMiddleware(...middlewares)
        )
    );
} ;

const store = configureStore();

export default store;



