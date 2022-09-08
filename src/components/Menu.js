import CartMenu from "./CartMenu";
import Items from "./Items";

function Menu(){
    return(
        <div className="grid grid-cols-12 gap-6">
            <Items />
            <CartMenu />
        </div>
    );
}

export default Menu;