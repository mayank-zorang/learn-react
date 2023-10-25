import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withVegLabel } from "./RestaurantCard";

const Body = () => {
  const [newResList, setNewResList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterResList, setFilterResList] = useState([]);

  const RestaurantCardVeg = withVegLabel(RestaurantCard);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.719515&lng=75.890046&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setNewResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return <h1>Oop! You are offline, check Your Internet Connect </h1>;

  //Conditional Rendering
  return filterResList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-100 px-4 py-1 m-4 rounded-md"
            onClick={() => {
              const searchRestaurantList = newResList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterResList(searchRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-100 px-4 py-1 m-4 rounded-lg"
          onClick={() => {
            const tmpResList = newResList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterResList(tmpResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap rounded-lg">
        {filterResList?.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
              {res?.info?.veg ? (
                <RestaurantCardVeg resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
