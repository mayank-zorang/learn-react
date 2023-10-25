import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import React, { useState } from "react";

const RestaurantMenu = () => {
  //Creating Custom Hooks
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/*categories accordian*/}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showItems={index == showIndex ? true: false}
          setShowIndex={()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

// const [resInfo, setResInfo] = useState(null);
// const { resID } = useParams();
// useEffect(() => {
//   fetchMenu();
// }, []);

// const fetchMenu = async () => {
//   const data = await fetch(MENU_API + resID);
//   const json = await data.json();
//   setResInfo(json?.data);
// };
