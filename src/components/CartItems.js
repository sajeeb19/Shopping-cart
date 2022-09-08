import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Asus/actions";
import { decrement as canonDecrement, increment as canonIncrement } from "../Redux/Canon/actions";
import { decrement as dellDecrement, increment as dellIncrement } from "../Redux/Dell/actions";
import CartItem from "./CartItem";
import TotalCartItem from "./TotalCartItem";




function CartItems(){
    const asus = useSelector((state)=> state.asusItem);
    const dell = useSelector((state)=>state.dellItem);
    const canon = useSelector((state)=>state.canonItem);
    
    const totalItem = asus.buyNumberOFItem + dell.buyNumberOFItem + canon.buyNumberOFItem ;

    const dispatch = useDispatch();

    const incrementHandelar = ()=>{
        if(asus.buyNumberOFItem === 20){
            alert("Finish all items")
        }else{
            dispatch(increment());
        }
        
    } 
    const decrementHandelar = ()=>{
        
        if(asus.buyNumberOFItem === 0){
            alert("Item quentity O so you cannot decrease it")
        }else{
            dispatch(decrement());
        }
    }

    const incrementHandelarForDell = ()=>{
        if(dell.buyNumberOFItem === 35){
            alert("Finish all items")
        }else{
            dispatch(dellIncrement());
        }
        
    } 
    const decrementHandelarForDell = ()=>{
        if(dell.buyNumberOFItem === 0){
            alert("Item quentity O so you cannot decrease it")
        }else{
            dispatch(dellDecrement());
        }
        
    }
    const incrementHandelarForCanon = ()=>{
        if(canon.buyNumberOFItem === 72){
            alert("Finish all items")
        }else{
            dispatch(canonIncrement());
        }
        
    } 
    const decrementHandelarForCanon = ()=>{
        if(canon.buyNumberOFItem === 0){
            alert("Item quentity O so you cannot decrease it")
        }else{
            dispatch(canonDecrement());
        }
        
        
    }
    return(
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <CartItem name="Asus Vivobook X515MA" quentity={asus.buyNumberOFItem} increment={incrementHandelar} decrement ={decrementHandelar}/>
            <CartItem name="Dell E1916HV 18.5 Inch" quentity={dell.buyNumberOFItem} increment={incrementHandelarForDell} decrement ={decrementHandelarForDell} />
            <CartItem name="Canon Eos 4000D 18MP" quentity={canon.buyNumberOFItem} increment={incrementHandelarForCanon} decrement ={decrementHandelarForCanon} />
            <TotalCartItem totalItem={totalItem} />
        </div>
    );
}

export default CartItems;