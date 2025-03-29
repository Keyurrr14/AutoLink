import React from "react";
import CaptainImage from "../assets/images/CaptainImage.webp";

function CaptainDetails() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4 mt-5">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={CaptainImage}
            alt=""
          />
          <h4 className="text-xl font-medium">Nakul Gohil</h4>
        </div>
        <div className="mt-5">
          <h4 className="text-xl font-semibold">₹ 1407</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex bg-gray-100 rounded-lg p-5 items-start justify-center gap-10 mt-10">
        <div className="text-center">
          <i className="text-3xl mb-2 ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetails;
