import { useDispatch, useSelector } from "react-redux"
// import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"
import CartList from "./CartList"
import { Link } from "react-router-dom";

const Cart = ()=>{
     const dispatch =useDispatch();
    const handleClearCart=()=>{
       dispatch(clearCart());
    }
    const cartItems = useSelector((store)=>store.cart.items);
    // const remove = <button>remove</button>;
       console.log(cartItems) 
       let total=0; 
    return(
        <div className="w-fullscreen h-fullscreen  p-2 mt-20">
            <div className="font-bold text-lg w-7/12 mx-auto m-5 bg-white  shadow-lg p-2">
                <button  className="bg-black w-[15%] p-1 my-2 text-center mx-auto rounded-lg text-white" onClick={handleClearCart}>ClearCart</button>
                {/* <ItemList items={cartItems} /> */}
                <CartList items={cartItems}/>
                {cartItems.map((cartItem)=>{
                    
                    total = Math.ceil(total+ cartItem.card.info.price/100 || total + cartItem.card.info.defaultPrice/100);
                    
                    // console.log(total);
                })}
                {total > 0 ? <div> <span className="my-16 p-5">Total Amount Payable: ₹ {total}</span> <Link to="/payment"><button className="w-15 bg-orange-200 rounded-lg p-1.5 my-3 text-red-500 text-base">Proceed for payment</button></Link></div>: <span className="my-16 p-5">Total Amount Payable: ₹ {total}</span>}
                
                
            </div>
        </div>
       
    )
    
}

export default Cart;