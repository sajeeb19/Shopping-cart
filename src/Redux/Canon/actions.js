import { CDEINCREMENT, CINCREMENT } from "./actionTypes";

export const increment = () =>{
    return {
        type:CINCREMENT,
        payload : 36500,
    }
}

export const decrement = () =>{
    return {
        type:CDEINCREMENT,
        payload : 36500,
    }
}