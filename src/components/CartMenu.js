import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import TotalAmount from "./TotalAmount";

function CartMenu(){

    const asus = useSelector((state)=> state.asusItem);
    const dell = useSelector((state)=>state.dellItem);
    const canon = useSelector((state)=>state.canonItem);

    const totalAmount = asus.itemRate + dell.itemRate + canon.itemRate ;
    return (
        <div
        className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
        >
            <CartItems />
            <TotalAmount totalAmount={totalAmount} />
        </div>
    );
}

export default CartMenu;