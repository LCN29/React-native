/**
 * Created by LCN on 2017/9/10 0010.
 */


// action type
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const RESET = 'RESET';


// action creator
export function increase (){
    return {
        type: INCREASE
    }
}

export function decrease (){
    return {
        type: DECREASE
    }
}

export function reset (){
    return {
        type: RESET
    }
}