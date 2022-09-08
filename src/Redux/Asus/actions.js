import { DEINCREMENT, INCREMENT } from "./actionTypes";

export const increment = () =>{
    return {
        type:INCREMENT,
        payload : 35500,
    }
}

export const decrement = () =>{
    return {
        type:DEINCREMENT,
        payload : 35500,
    }
}