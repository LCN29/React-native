/**
 * Created by LCN on 2017/9/9 0009.
 */

let testUser = {
    name : '李云',
    age : '24',
    avatar : 'http://avatars1.githubusercontent.com/u/1439939?v=3&s=460',
};

//  action type
export const LOGIN = 'LOGIN';
export const LOGGING = 'LOGGING';
export const OK = 'OK';
export const ERROR = 'ERROR';


export const LOGOUT = 'LOGOUT';


// action creator

export function login(){
      return (dispatch)=>{
          dispatch(logging());
          fetch('http://www.baidu.com')
              .then((response)=>{
                dispatch({type : OK, user : testUser});
              }).catch((e)=>{
              dispatch({type: ERROR});
          });
      }
}

export function logging(){
    return {
        type : LOGGING ,
    }
}



export function logout(text){
    return {
        type : LOGOUT,
        text
    }
}
