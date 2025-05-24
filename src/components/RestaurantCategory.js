import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    };

    return (
        <div className="bg-white shadow-md rounded-xl mb-6">
            {/* Header */}
            <div
                onClick={handleClick}
                className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-50 rounded-t-xl"
            >
                <h2 className="font-semibold text-lg text-gray-800">
                    {data.title} ({data.itemCards.length})
                </h2>
                <span className="text-xl transition-transform duration-200">
                    {showItems ? "⬆️" : "⬇️"}
                </span>
            </div>

            {/* ItemList */}
            {showItems && (
                <div className="px-4 pb-4">
                    <ItemList items={data?.itemCards }  />

                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;
