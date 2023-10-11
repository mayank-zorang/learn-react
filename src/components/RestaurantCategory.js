import { useState } from "react";
import MenuList from "./MenuList";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
  const handleShowMenuItems = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* header */}
      <div
        className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 cursor-pointer"
        onClick={handleShowMenuItems}
      >
        <div className="flex justify-between">
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>  
        {/* controlled component */}
        {showItems && <MenuList items={data.itemCards} />}
      </div>
      {/* accordian body */}
    </div>
  );
};

export default RestaurantCategory;
