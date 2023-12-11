
import { useParams } from "react-router-dom";
import Shimer from "./Shimer";
import UseRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{
   
    const {resId}= useParams();

    const resInfo = UseRestaurantMenu(resId);
    
    
    if(resInfo==null){
        return <Shimer />
    }

    const {itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
   
    console.log(itemCards);

    return (
        <div>
            <h1>{resInfo.cards[0].card.card.info.name}</h1>
            <h1>MENU</h1>
            <ul>
              {itemCards && itemCards.map(item =><li key={item.card.info.id}>{item.card.info.name}-Rs {item.card.info.price/100 || item.card.info.defaultPrice}</li>)}                 
            </ul>
        </div>
        
    )
}

export default RestaurantMenu;