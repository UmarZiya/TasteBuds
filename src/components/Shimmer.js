const Shimmer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {Array(8)
                .fill("")
                .map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 animate-pulse rounded-lg shadow-md p-4 flex flex-col gap-4"
                    >
                        <div className="h-40 bg-gray-300 rounded-md"></div>
                        <div className="h-4 
                        bg-gray-300 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-3 bg-gray-300 rounded w-full"></div>
                    </div>
                ))}
        </div>
    );
};

export default Shimmer;
