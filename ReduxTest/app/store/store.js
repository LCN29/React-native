/**
 * Created by LCN on 2017/9/9 0009.
 */


import { applyMiddleware ,createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';

let middlewares = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
);

export default store;
