import React from "react";

const LocationSearchPanel = ({ onLocationSelect }) => {
  const locations = [
    "Darshana Society, Gorai 2, Borivali West, Mumbai-400092",
    "Suvidhya School, Gorai Link Road, Gorai 1, Borivali West, Mumbai, Maharashtra 400092",
    "Borivali Railway Station West",
    "Mithibai College",
    "Vile Parle Railway Station West",
  ];

  return (
    <div className="h-full overflow-y-auto">
      {locations.map(function (location, idx) {
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
      })}
    </div>
  );
};

export default LocationSearchPanel;
