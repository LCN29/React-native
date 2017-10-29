/**
 * Created by LCN on 2017/9/10 0010.
 */

// 正在请求
export const FETCHING = 'FETCHING';
// 请求成功
export const  FETCH_SUCCESS = 'FETCH_SUCCESS';
// 请求失败
export const FETCH_FAILURE = 'FETCH_FAILURE';



export function request(){

    return (dispatch)=>{
        dispatch(fetching());
        fetch('http://api.bilibili.cn/index')
            .then((response) => response.json())
            .then( (responseJson) =>{
                dispatch(success(responseJson));
            }).catch(e =>{
                dispatch(failure());
            });
    };
}

export function fetching(){
    return {
        type : FETCHING,
    };
}

export function success(data){
    return {
        type : FETCH_SUCCESS,
        data ,
    };
}

export function failure(){
    return {
        type : FETCH_FAILURE,
    };
}