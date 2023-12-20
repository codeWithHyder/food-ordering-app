import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
const CartList =({items})=>{

    const dispatch = useDispatch();
    const handleAddItem =(item,index)=>{
        dispatch(removeItem(item,index));
    }
    console.log(`${items.length} items`);
    return(
        <div className="">
            {items.map((item, index)=>(
            <div className="border-gray-400 border-b-2 flex">
                
                <div className="w-9/12">
                    <span className="m-3 font-semibold">{item.card.info.name}</span>--<span className="font-bold"> ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                    <div className="m-3 text-xs">{item.card.info.description}</div>
                </div> 
                <div className="m-3 w-3/12">
                    <button className=" bg-black text-white rounded p-1 absolute ml-[90] cursor-pointer" onClick={()=>{handleAddItem(item,index)}}>Remove </button>
                    <img src={CDN_URL+item.card.info.imageId} className="w-20 h-20 ml-auto rounded-md"/> 
                </div>
            </div>
            ))}
        </div>
    )
}

export default CartList;