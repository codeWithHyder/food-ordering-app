
import { useParams } from "react-router-dom";
import Shimer from "./Shimer";
import UseRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ()=>{
   
    const {resId}= useParams();

    const resInfo = UseRestaurantMenu(resId);
    
    
    if(resInfo==null){
        return <Shimer />
    }

    const {itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    const categories = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>(
        c.card.card["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    ));
   
    // console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

    return (
        <div className="w-6/12 m-auto my-10">
            <h1 className="font-bold text-lg text-center">{resInfo.cards[0].card.card.info.name}</h1>
            <h1 className="font-bold text-lg text-center">{resInfo.cards[0].card.card.info.cuisines.join(", ")}</h1>
            {/* categories of accordions */}
            {categories.map((category)=>(
                <RestaurantCategory data={category.card.card} />
            ))}
        </div>
        
    )
}

export default RestaurantMenu;