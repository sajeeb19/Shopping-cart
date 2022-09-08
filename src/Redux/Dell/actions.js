import { DDEINCREMENT, DINCREMENT } from "./actionTypes";

export const increment = () =>{
    return {
        type:DINCREMENT,
        payload : 9300,
    }
}

export const decrement = () =>{
    return {
        type:DDEINCREMENT,
        payload : 9300,
    }
}