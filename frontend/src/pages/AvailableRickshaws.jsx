import React from "react";
import Map from "../assets/images/map.webp";
import Rickshaw from "../assets/images/Rickshaw.webp";
import { Link } from "react-router-dom";

const AvailableRickshaws = () => {
  const rickshaws = [
    {
      id: 1,
      name: "Keyur Rathod",
      number: "MH 04 GS 2504",
      type: "Bajaj Auto Rickshaw",
    },
    {
      id: 2,
      name: "Nakul Gohil",
      number: "MH 02 NS 1312",
      type: "Bajaj Auto Rickshaw",
    },
    {
      id: 3,
      name: "Vaibhav Patel",
      number: "MH 47 HG 4949",
      type: "Bajaj Auto Rickshaw",
    },
  ];
  return (
    <div className="h-screen font-UberMoveMedium">
      <Link to="/home" className="h-14 w-14 absolute top-10 right-5 flex items-center justify-center bg-white rounded-full">
      <i className="text-3xl text-black font-bold ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img className="h-full w-full object-cover" src={Map} alt="" />
      </div>
      <div className="h-1/2 bg-white p-4">
        <h1 className="text-2xl ml-4 mb-5">Available Rickshaws</h1>

        {rickshaws.map((rickshaw, idx) => (
          <div key={idx} className="flex items-center justify-between py-5">
            <img className="h-20" src={Rickshaw} alt="" />
            <div className="text-right">
              <h2 className="text-xl font-medium capitalize">
                {rickshaw.name}
              </h2>
              <h4 className="text-2xl font-semibold">{rickshaw.number}</h4>
              <p className="text-md text-gray-600">{rickshaw.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableRickshaws;
