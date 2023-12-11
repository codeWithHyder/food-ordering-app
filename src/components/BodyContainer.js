
import RestaurantCard from "./RestaurantCard";
import UseOnlineStatus from "../utils/useOnlineStatus";
import { useState, useEffect } from "react";
import Shimer from "./Shimer";
import {Link} from "react-router-dom";

const BodyContainer = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [afterFilterList,setAfterFilterList] =  useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = UseOnlineStatus();

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        try {
            const res = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const dat = await res.json();
            // console.log(dat);
            setListOfRestaurants(dat.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            setAfterFilterList(dat.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }; 

    if(onlineStatus===false){
        return <h3>It seems you are offline, please check your internet connection</h3>;
    }

    return (
        <div className="flex flex-wrap mx-14">
            <div className="w-[100%] h-20 p-5">
                <input className="h-10 border border-slate-50 bg-green-50 px-2" type="text" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                />
                <button className="h-10 w-[5rem] m-1 bg-green-500 rounded-lg" onClick={()=>{
                    const filteredRestaurants = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setAfterFilterList(filteredRestaurants);
                }}>
                    
                    Search</button>

                <button className="h-10 bg-gray-400 px-2 rounded-lg" type="submit" onClick={ () =>{
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurants(filteredList); 
                    console.log(filteredList); 
                    
                }}>
                    Filter Top Rated Restaurants
                </button>
            </div>
            {listOfRestaurants.length !== 0 ? afterFilterList.map((restaurant)=> {
               return <Link className="link" to={"/restaurants/"+ restaurant.info.id}><RestaurantCard key ={ restaurant.info.id} resData ={restaurant} /></Link>
         }): <Shimer />}
        {/* //    { listOfRestaurants.map((restaurant)=> {
        //        return <RestaurantCard key ={ restaurant.info.id} resData ={restaurant} />
        //  })} */}
            

        </div>
    )
};

export default BodyContainer;