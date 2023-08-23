import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

    //state variable = super powerful variable 
    const [newResList, setNewResList] = useState(resList);

    //Normal variable 
    let list = [];

    //Normal js varialble
    // let newResList = [
    //     {
    //         data: {
    //           type: "F",
    //           id: "334475",
    //           name: "KFC",
    //           cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //           cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    //           costForTwo: 40000,
    //           deliveryTime: 36,
    //           avgRating: "4.8",
    //         },
    //       },
    //       {
    //         data: {
    //           id: "229",
    //           name: "Meghana Foods",
    //           cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
    //           cuisines: [
    //             "Biryani",
    //             "Andhra",
    //             "South Indian",
    //             "North Indian",
    //             "Chinese",
    //             "Seafood",
    //           ],
    //           costForTwo: 50000,
    //           deliveryTime: 29,
    //           avgRating: "3.4",
    //         },
    //      }, 

    //      {
    //         data: {
    //           id: "121603",
    //           name: "Kannur Food Point",
    //           cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
    //           cuisines: ["Kerala", "Chinese"],
    //           costForTwo: 30000,
    //           deliveryTime: 31,
    //           avgRating: "4.1",
    //         },
    //     }, 
    // ]


    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{  
                        //need only Filter logic here
                        const filterResList = newResList.filter((res) => res.data.avgRating > 4
                        );
                        console.log(filterResList);
                        setNewResList(filterResList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>    
            <div className="res-container">
                {
                    newResList.map((res)=>{
                        return <RestaurantCard  key={res.data.id} resData ={res}/>
                    })
                }
            </div>
        </div>
    );
}

export default Body;