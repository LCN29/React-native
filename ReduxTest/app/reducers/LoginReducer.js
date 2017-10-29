/**
 * Created by LCN on 2017/9/9 0009.
 */

import { LOGIN,LOGGING } from '../actions/actions';

let initialState = {
    isLogged : false,
    user : {},
    status : null,
};

const loginReducers = (state = initialState, action)=>{
      switch (action.type){
          case LOGGING :
              return {
                  ...state,
                  status : 'doing'
              };
              break;
          case LOGIN :
              return Object.assign({},state,{
                  isLogged : true,
                  user : action.urer,
                  status : 'done',
              });
              break;

      }
};

export default loginReducers;
