import React, {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [newResList, setNewResList] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [filterResList, setFilterResList] = useState([]);

    console.log("body rendered")
    
    useEffect(()=>{
        console.log("useEffect called")
        fetchData();
    }, []);
    
    const fetchData = async () => {
        //logic for fetching the data 
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.719515&lng=75.890046&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        //Optional Chaining 
        setNewResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    //Conditional Rendering -
    return newResList?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e)=>{
                            setsearchText(e.target.value);
                        }}
                        />
                    <button onClick={()=>{
                        const searchRestaurantList = newResList.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterResList(searchRestaurantList)

                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn" 
                    onClick={()=>{  
                        const tmpResList = newResList.filter((res) => res.info.avgRating > 4
                        );
                        setFilterResList(tmpResList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>    
            <div className="res-container">
                {
                    filterResList?.map((res)=>{
                        return <RestaurantCard  key={res.info.id} resData ={res}/>
                    })
                }
            </div>
        </div>
    );
}

export default Body;