import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import map from "../assets/images/map.webp";
import ConfirmRide from "../components/ConfirmRide";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  const handleLocationSelect = (location) => {
    setDestination(location);
    setPanelOpen(false);
    setConfirmRidePanel(true);
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "80%",
        padding: 15,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  return (
    <div className="h-screen relative font-UberMoveMedium overflow-hidden">
      <h1 className="absolute top-5 left-5 text-3xl font-UberMoveMedium">
        AutoLink
      </h1>
      <div className="h-screen w-screen">
        <img className="w-full h-full object-cover" src={map} alt="" />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[20%] bg-white p-5 relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 text-3xl top-5 right-6"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h1 className="text-2xl font-UberMoveMedium">
            Find a Rickshaw Stand
          </h1>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              className="w-full px-5 py-4 rounded-md mt-5 border-2 border-gray-300 placeholder:text-xl"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => {
                setPanelOpen(true);
              }}
              placeholder="Enter your location"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0%] bg-white">
          <LocationSearchPanel onLocationSelect={handleLocationSelect} />
        </div>
        <div
          ref={confirmRidePanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
        >
          <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} />
        </div>
      </div>
    </div>
  );
};

export default Home;
