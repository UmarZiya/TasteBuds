import RestaurantCard from "./RestaurantCard";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";



  

// import reslist from "../utils/mockData";

// import {RestaurantList} from "../utils/mockData";
 
const Body = () => {
  const [restaurantlist,setreslist] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant]=useState([])
  const [searchText,setsearchText]=useState("")
  



const fetchData = async () => {
  const response = await fetch("https://handler-cors.vercel.app/fetch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    }),
  });

  const json = await response.json();


  setreslist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};


    useEffect(()=>{
      fetchData()
    },[])
    
    


    if(filteredRestaurant.length===0){
      return (
        <Shimmer />
      );
    }


    
  return (
  <div className="body">


  <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-6">
    
    <div className="flex-1"></div>

    <div className="flex flex-1 justify-center">
      <input
        type="text"
        className="border border-gray-300 rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-pink-500 "
        value={searchText}
        placeholder="Search"
        onChange={(e) => setsearchText(e.target.value)}
      />
      <button
        className="bg-pink-600 text-white rounded-r-lg px-4 py-2 hover:bg-pink-700 transition duration-300 active:bg-pink-900"
        onClick={() => {
          const filterRestaurant = restaurantlist.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filterRestaurant);
        }}
      >
        Search
      </button>
    </div>

    {/* Top Rated Button on the right */}
    <div className="flex-1 flex justify-end">
      <button
        className="bg-pink-600 text-white rounded-lg px-4 py-2 hover:bg-pink-700 transition duration-300 active:bg-pink-900"
        onClick={() => {
          const filteredlist = filteredRestaurant.filter(
            (res) => res.info.avgRating > 4.2
          );
          setFilteredRestaurant(filteredlist);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  </div>

  <div className="flex flex-wrap gap-4 justify-center p-4">
    {filteredRestaurant.map((resdata) => (
      <Link to={"/restaurant/" + resdata.info.id} key={resdata.info.id}>
        <RestaurantCard reslist={resdata} />
      </Link>
    ))}
  </div>
</div>
    );
  }
export default Body;

 