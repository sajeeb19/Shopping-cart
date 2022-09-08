import { useDispatch, useSelector } from "react-redux";
import { increment } from "../Redux/Asus/actions";
import { increment as canonIncrement } from "../Redux/Canon/actions";
import { increment as dellIncrement } from "../Redux/Dell/actions";
import Item from "./Item";


function Items(){
    
    const asus = useSelector((state)=>state.asusItem);
    const dell = useSelector((state)=>state.dellItem);
    const canon = useSelector((state)=>state.canonItem);
    const dispatch = useDispatch();


    const incrementHandelarForAsus = ()=>{
        if(asus.buyNumberOFItem === 20){
            alert("Finish all items")
        }else{
            dispatch(increment());
        }
    }

    const incrementHandelarForDell = ()=>{
        if(dell.buyNumberOFItem === 35){
            alert("Finish all items")
        }else{
            dispatch(dellIncrement());
        }
    }

    const incrementHandelarForCanon = ()=>{
        if(canon.buyNumberOFItem === 72){
            alert("Finish all items")
        }else{
            dispatch(canonIncrement());
        }
    }

    
    return(
        <div
        className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8"
        >
           <Item name="Asus Vivobook X515MA" price="35500" quentity={asus.numberOfItem} amount ={asus.itemRate} increment={incrementHandelarForAsus} />
           <Item name="Dell E1916HV 18.5 Inch"  price="9300" quentity={dell.numberOfItem} amount = {dell.itemRate} increment={incrementHandelarForDell}  />
           <Item name="Canon Eos 4000D 18MP "  price="36500" quentity={canon.numberOfItem} amount = {canon.itemRate} increment={incrementHandelarForCanon} />
        </div>
    );
}

export default Items;