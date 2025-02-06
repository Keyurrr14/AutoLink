import React from "react";
import { Link } from "react-router-dom";
import OnBoarding from "../assets/images/OnBoarding.webp";

const Home = () => {
  return (
    <div>
      <div className={`w-full h-screen flex justify-between flex-col`}>
        <img className="w-full h-full object-cover" src={OnBoarding} alt="" />
        <div className="font-UberMoveMedium bg-white pb-8 py-4 px-4">
          <h2 className="text-[30px] font-semibold">
            Get Started with AutoLink
          </h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
