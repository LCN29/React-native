/**
 * Created by LCN on 2017/9/29 0029.
 */


import { REQUEST_POSTS, REQUEST_FAIL, REQUEST_GETHOME,REQUEST_GETDETAIL ,REQUEST_GETCATEGORIES , REQUEST_GETCATEGORYDETAIL,REQUEST_GETSEARCHPRODUCT }from './actionTypes';
import axios from 'axios';


const ajaxAS = axios.create({
    baseURL: 'http://112.74.64.217:3000',
    // baseURL: 'http://192.168.0.103:3000',
    timeout: 3000,
    headers: { 'Access-Control-Allow-Origin': '*' }
});



//网络开始请求，这时可以显示 loading,
export function requestPosts (){
    return {
        type: REQUEST_POSTS,
        isFetching : true,
    };
}

// 网络请求失败
export function failPosts(error){
    return {
        type: REQUEST_FAIL,
        preload: error,
        isFetching: false,
        date: Date.now()
    }
}

// Home页面数据请求
export function getHomeData(){
    return (dispatch, getState)=>{
        dispatch(requestPosts());
        ajaxAS.get('/home')
            .then(r =>{
                dispatch(receiveHomeData(r.data || {}));
            })
            .catch(e=>{
                dispatch(failPosts(error.message));
            })
    }
}

//Home页面请求成功
export function receiveHomeData(json){
    return {
        type : REQUEST_GETHOME,
        isFetching: false,
        preload: json,
        date: Date.now(),
    };
}

// 商品详情开始请求
export function getProductDetail(productId){
    return (dispatch, getState)=>{
        dispatch(requestPosts());
        ajaxAS.get(`/detail?productId=${productId}`)
            .then((r)=>{
                dispatch(receiveProductDetail(r.data || {}))
            })
            .catch((error) => {
                dispatch(failPosts(error.message));
            })
    };
}

// 商品详情请求成功
export function receiveProductDetail(json){
    return {
        type : REQUEST_GETDETAIL,
        preload: json,
        isFetching: false,
        date: Date.now()
    }
}


// 种类请求
export function getCategories(){
    return (dispatch, getState) => {
        dispatch(requestPosts());
        ajaxAS.get('/categories')
            .then((r) => {
                dispatch(receiveCategories(r.data || {}))
            })
            .catch((error) => {
                dispatch(failPosts(error.message));
            })
    }
}

// 种类请求成功
export function receiveCategories(json){
    return {
        type: REQUEST_GETCATEGORIES,
        preload: json,
        isFetching: false,
        date: Date.now()
    }
}


// 种类详情请求开始

export function getCategoryDetail(categoryId){
    return (dispatch, getState) => {
        dispatch(requestPosts());
        ajaxAS.get(`/categoryDetail?categoryId=${categoryId}`)
            .then( r => {
                dispatch(receiveCategoryDetail(r.data || {}))
            } )
            .catch(e =>{
                dispatch(failPosts(error.message));
            });
    };
}

// 种类详情请求成功
export function receiveCategoryDetail(json){
    return {
        type : REQUEST_GETCATEGORYDETAIL,
        preload: json,
        isFetching: false,
        date: Date.now()
    }
}

// 产品搜索开始

export function getSearchProducts (keyWord, count, page) {
    return (dispatch, getState) => {
        dispatch(requestPosts());
        ajaxAS.get(`/search?keyword=${keyWord}&count=${count}&page=${page}`)
            .then( r => {
                dispatch(receiveSearchProduct(r.data || {}))
            })
            .catch( e => {
                dispatch(failPosts(error.message));
            });
    };
}

//产品搜索成功
export function receiveSearchProduct(json){
    return {
        type : REQUEST_GETSEARCHPRODUCT,
        preload: json,
        isFetching: false,
        date: Date.now()
    }
}