/**
 * Created by LCN on 2017/9/29 0029.
 */

import { combineReducers} from 'redux';

import StackReducer from './StackReducer';
import HomeReducer from './HomerReducer';
import ProductDetailReducer from './ProductDetailReducer';
import CategoriesReducer from './CategoriesReducer';
import CategoryDetailReducer from './CategoryDetailReducer';
import SearchProductReducer from './SearchProductReducer';


const reducers = combineReducers({
    nav : StackReducer,
    home : HomeReducer,
    detail : ProductDetailReducer,
    categories: CategoriesReducer,
    categoryDetail: CategoryDetailReducer,
    searchProducts : SearchProductReducer,
});

export default reducers;
