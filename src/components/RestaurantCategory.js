import { useState } from "react";
import ItemList from "./ItemList";
// import { isFormElement } from "react-router-dom/dist/dom";
const RestaurantCategory =({data})=>{
    const [itemList, setItemList] = useState(false);

    const handleClick = ()=>{
        setItemList(!itemList);
        // console.log("clicked")
    }
    // console.log(data);
    return (
        <div className=" bg-slate-300 shadow-lg mt-[0.5rem] top-20">
            <div className="w-full m-0.5 p-2 flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-md">{data.title}({data.itemCards.length})</span>
                {itemList?<span className="rotate-180">⬇</span>: <span>⬇</span>}
            </div>
            <div>
               {itemList && <ItemList items={data.itemCards} />} 
                
            </div>
            
        </div>
    )
}

export default RestaurantCategory;