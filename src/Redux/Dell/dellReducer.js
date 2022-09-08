import { DDEINCREMENT, DINCREMENT } from "./actionTypes";

const initailState = {
    buyNumberOFItem : 0,
    numberOfItem:35,
    itemRate  : 0,
    
}

// eslint-disable-next-line default-param-last
const dellReducer = (state = initailState,action)=>{
    switch (action.type) {
        case DINCREMENT:
            console.log(state);
            return{
                ...state,
                buyNumberOFItem : state.buyNumberOFItem + 1,
                numberOfItem:state.numberOfItem - 1,
                itemRate : state.buyNumberOFItem === 0 ? action.payload : (state.buyNumberOFItem+1) * action.payload,
                
            }
            
        case DDEINCREMENT:
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

export default dellReducer;