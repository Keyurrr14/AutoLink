import React from "react";
import CaptainImage from "../assets/images/CaptainImage.webp";

const RidePopUps = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl ml-4 mb-5">New Rides Available</h3>

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4 ml-4">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={CaptainImage}
            alt=""
          />
          <h4 className="text-xl font-medium">Keyur Rathod</h4>
        </div>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex flex-shrink-0 items-center gap-5 p-3">
            <h2 className="h-12 w-12 flex-shrink-0 flex items-center justify-center bg-gray-200 rounded-full text-black">
              <i className="ri-map-pin-line text-2xl"></i>
            </h2>{" "}
            <div>
              <h1 className="text-lg text-black">
                Borivali Railway Station
              </h1>
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center gap-5 p-3">
            <h2 className="h-12 w-12 flex-shrink-0 flex items-center justify-center bg-gray-200 rounded-full text-black">
              <i className="ri-currency-line text-2xl"></i>
            </h2>{" "}
            <div>
              <p className="text-xl text-black">Cash</p>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg">
          Confirm
        </button>
        <button
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className="w-full mt-2 bg-gray-200 text-black font-semibold p-3 rounded-lg"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUps;
