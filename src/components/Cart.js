import { useDispatch, useSelector } from "react-redux"
// import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"
import CartList from "./CartList"

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
        <div className="font-bold text-lg w-7/12 mx-auto m-5">
            <button  className="bg-black w-[15%] p-1 my-2 text-center mx-auto rounded-lg text-white" onClick={handleClearCart}>ClearCart</button>
            {/* <ItemList items={cartItems} /> */}
            <CartList items={cartItems}/>
            {cartItems.map((cartItem)=>{
                
                total = Math.ceil(total+ cartItem.card.info.price/100 || total + cartItem.card.info.defaultPrice/100);
                
                // console.log(total);
            })}
            <span className="my-16 p-5">Total Amount Payable: ₹ {total}</span>
            
            
        </div>
       
    )
    
}

export default Cart;