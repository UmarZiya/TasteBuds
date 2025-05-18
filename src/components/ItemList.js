const ItemList = (items) => {
    console.log(items);
    return (
        <div>
            {items.items.map((item) => (
                <div
                    key={item?.card?.info?.id}
                    className="flex justify-between items-start p-4 bg-white shadow-md rounded-lg mb-6 border-b"
                >
                    {/* Left: Item info */}
                    <div className="flex-1 pr-4">
                        <span className="font-semibold text-base text-gray-800">
                            {item?.card?.info?.name}
                        </span>
                        <p className="text-sm text-gray-700 mt-1">
                            ₹
                            {item?.card?.info?.defaultPrice
                                ? item?.card?.info?.defaultPrice / 100
                                : item?.card?.info?.price / 100}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                            {item?.card?.info?.description}
                        </p>
                    </div>

                    {/* Right: Image + Button */}
                    <div className="relative w-32">
                        <div className="bg-white shadow rounded-lg">
                            <img
                                src={
                                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                                    item?.card?.info?.imageId
                                }
                                alt={item?.card?.info?.name}
                                className="w-32 h-24 object-cover rounded-md"
                            />
                        </div>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                            <button className="bg-white border border-gray-300 px-3 py-1 text-sm text-green-600 font-medium rounded-md shadow hover:bg-gray-100 transition"
                                onClick={() => {
                                    alert("Coming soon");
                                }}
                            >
                                Add+
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
