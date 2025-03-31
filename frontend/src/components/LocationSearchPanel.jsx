import React from "react";

const LocationSearchPanel = ({ locations, onLocationSelect }) => {
  return (
    <div className="h-full overflow-y-auto">
      {locations.length > 0 ? (
        locations.map(function (location, idx) {
          return (
            <div
              key={idx}
              className="flex items-center justify-start gap-5 border-2 border-gray-100 active:border-black p-3 rounded-xl my-2 font-UberMoveMedium cursor-pointer"
              onClick={() => onLocationSelect(location)}
            >
              <h2 className="h-10 w-10 flex-shrink-0 flex items-center justify-center text-xl bg-gray-200 rounded-full text-black">
                <i className="ri-map-pin-line"></i>
              </h2>{" "}
              <h1 className="text-lg">{location}</h1>
            </div>
          );
        })
      ) : (
        <div className="p-3 text-center text-gray-500">
          Enter location to see suggestions
        </div>
      )}
    </div>
  );
};

export default LocationSearchPanel;
