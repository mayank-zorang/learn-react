import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  // console.log(props)
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="res-card m-4 p-4 w-52 bg-gray-10  0 rounded-lg  hover:bg-gray-200" >
      <img
        className="res-logo rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRating}⭐</h4>
      <h4>₹{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
