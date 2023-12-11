import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const UseRestaurantMenu = (resId) =>{
    const[resInfo, setResInfo] =useState(null);

    useEffect(()=>{
        fetchData();

    },[]);

   const fetchData= async()=>{
        // const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const data = await fetch(MENU_API+resId)
        const json= await data.json();
        setResInfo(json.data);

    }
    return resInfo;
};

export default UseRestaurantMenu;