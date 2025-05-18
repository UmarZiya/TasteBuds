import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" +
        resId +
        "&submitAction=ENTER"
    );
    const json = await data.json();

    setResInfo(json);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  // Safely extract menu itemCards
  const regularCards = resInfo?.data?.cards.find(
    (c) => c.groupedCard?.cardGroupMap?.REGULAR
  );

  const menuCards = regularCards?.groupedCard?.cardGroupMap?.REGULAR?.cards;
 

  const menu = menuCards?.find((c) => c.card?.card?.itemCards);

  const itemCards = menu?.card?.card?.itemCards;
  console.log(itemCards);

  const categories= menuCards.filter((c)=> c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories);

  return (
    <div className="p-6 max-w-4xl mx-auto">
  {/* Restaurant name */}
  <h1 className="text-3xl font-bold mb-2 text-pink-700">{name}</h1>

  {/* Cuisines and Cost */}
  <p className="text-gray-600 mb-6 text-sm">
    {cuisines?.join(", ")} • {costForTwoMessage}
  </p>

  {/* Menu Heading */}
 
    
    <div>  
      {categories.map((category)=>(
        <div key={category?.card?.card?.title} className="mb-6">
        
        <RestaurantCategory data={category?.card?.card} />
        
        </div>
      ))}
   
      </div>
    </div>

  
  );
};

export default RestaurantMenu;
