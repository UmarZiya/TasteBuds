const RestaurantCard = ({ reslist }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    locality,
  } = reslist.info;

  return (
    <div className="w-64 p-4 m-2 bg-white shadow-md rounded-lg hover:scale-105 transform transition duration-300">
      <img
        className="h-40 w-full object-cover rounded-md"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}
        alt={name}
      />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-sm text-gray-600">🍽 {cuisines.join(", ")}</p>
      <p className="text-sm text-green-600">⭐ {avgRating}</p>
      <p className="text-sm text-gray-500">📍 {locality}</p>
    </div>
  );
};
export default RestaurantCard;