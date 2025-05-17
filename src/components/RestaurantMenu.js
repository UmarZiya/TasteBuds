import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

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

  return (
    <div className="p-6 max-w-4xl mx-auto">
  {/* Restaurant name */}
  <h1 className="text-3xl font-bold mb-2 text-pink-700">{name}</h1>

  {/* Cuisines and Cost */}
  <p className="text-gray-600 mb-6 text-sm">
    {cuisines?.join(", ")} • {costForTwoMessage}
  </p>

  {/* Menu Heading */}
  <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Menu</h2>

  {/* Menu List */}
  <ul className="space-y-4">
    {itemCards?.map((item) => (
      <li
        key={item.card.info.id}
        className="bg-white rounded-lg shadow-md p-4 flex gap-4 items-start hover:shadow-lg transition"
      >
        {/* Image */}
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            item.card.info.imageId
          }
          alt={item.card.info.name}
          className="w-28 h-24 object-cover rounded-md border"
        />

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">
            {item.card.info.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            {item.card.info.description || "No description available."}
          </p>
          <p className="font-semibold text-gray-800">
            ₹{(item.card.info.defaultPrice || item.card.info.price) / 100}
          </p>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
};

export default RestaurantMenu;
