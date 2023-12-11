import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    return(
        <div className="m-1 rounded-lg p-3 w-[300px] h-[430px] bg-orange-100">
            <img className="w-[99%] h-[50%] rounded-lg" src={ CDN_URL + resData.info.cloudinaryImageId} alt="rest-img" />
            <h4 className="font-bold text-lg my-2">{resData.info.name}</h4>
            <h6 className="text-sm">{resData.info.cuisines.join(" ,")}</h6>
            <h6>{resData.info.avgRating}  Ratings</h6>
            <h6>Delivery time  {resData.info.sla.deliveryTime} minutes</h6>

        </div>
    )
};

export default RestaurantCard;