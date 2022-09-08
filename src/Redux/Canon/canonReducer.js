import { CDEINCREMENT, CINCREMENT } from "./actionTypes";

const initailState = {
    buyNumberOFItem : 0,
    numberOfItem:72,
    itemRate  : 0,
    
}

// eslint-disable-next-line default-param-last
const canonReducer = (state = initailState,action)=>{
    switch (action.type) {
        case CINCREMENT:
            console.log(state);
            return{
                ...state,
                buyNumberOFItem : state.buyNumberOFItem + 1,
                numberOfItem:state.numberOfItem - 1,
                itemRate : state.buyNumberOFItem === 0 ? action.payload : (state.buyNumberOFItem+1) * action.payload,
                
            }
            
        case CDEINCREMENT:
            return{
                ...state,
                buyNumberOFItem : state.buyNumberOFItem - 1,
                numberOfItem:state.numberOfItem + 1,
                itemRate : state.itemRate - action.payload,
                
                }
        default:
            return{
                ...state
            }
    }
}

export default canonReducer;