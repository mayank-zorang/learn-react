import React from "react";
import  ReactDOM  from "react-dom/client";  
import restaurantList from "./restaurantList";

/*
 Header 
    -logo
    -Nav Items
 Body
    -Search
    -RestaurantContainer
    -RestaurantCard
        - Food-Image
        - Name, Rating, Price, cuisine  delivarytime etc
Footer
    -copyright
    -Links
    -Addressh    
*/

//Header Component

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://seeklogo.com/images/B/burger-food-logo-5B8B17C290-seeklogo.com.png"/>
            </div>
            <div className="nav-items"> 
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}



//RestaurantCard Component
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
    } = resData?.data;
    return(
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h4>{avgRating}⭐</h4>
            <h4>₹{costForTwo / 40}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}


//Restaurant Data


//body Component

//not using keys(not acceptable) <<<< index as key <<<<<<<<< unique id (best practice)
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    restaurantList.map((res)=>{
                        return <RestaurantCard  key={res.data.id} resData ={res}/>
                    })
                }
            </div>
        </div>
    );
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(Heading) 
root.render(<AppLayout />) 