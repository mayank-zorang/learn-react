import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    // console.log(props)
    const {resData} = props;
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
        cloudinaryImageId
    } = resData?.info;
    return(
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h4>{avgRating}⭐</h4>
            <h4>₹{costForTwo / 40}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard