import React from "react";
import Rickshaw from "../assets/images/Rickshaw.webp";

const ConfirmRide = (props) => {
  return (
    <div className="font-UberMoveMedium">
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl ml-4 mb-5">Looking for Rickshaws ...</h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img className="h-20" src={Rickshaw} alt="" />

        <div className="w-full mt-5">
          <div className="flex flex-shrink-0 items-center gap-5 p-3">
            <h2 className="h-12 w-12 flex-shrink-0 flex items-center justify-center bg-gray-200 rounded-full text-black">
              <i className="ri-map-pin-line text-2xl"></i>
            </h2>{" "}
            <div>
              <h1 className="text-lg text-black">
                Darshana Society, Gorai 2, Borivali West, Mumbai-400092
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
      </div>
    </div>
  );
};

export default ConfirmRide;
