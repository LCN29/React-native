/**
 * Created by LCN on 2017/9/29 0029.
 */


import {createStore, applyMiddleware}  from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers/reducers';

let middleware = [ thunk];

if(__DEV__){
    middleware.push(logger);
}

const store = createStore(
    reducers,
    applyMiddleware(...middleware),
);

export default store;
