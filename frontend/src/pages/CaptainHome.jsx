import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import map from "../assets/images/map.webp";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUps from "../components/RidePopUps";
import { CaptainDataContext } from "../context/CaptainContext";
import { SocketContext } from "../context/SocketContext";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit("join", {
      userType: "captain",
      userId: captain._id,
    });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log({
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
          socket.emit("update-location-captain", {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 15000);
    updateLocation();
  });

  socket.on("new-ride", (data) => {
    console.log(data);
  });

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );

  return (
    <div className="h-screen font-UberMoveMedium">
      <Link
        to="/captain-login"
        className="fixed right-5 top-5 h-12 w-12 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-2xl font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-3/5">
        <img className="w-full h-full object-cover" src={map} alt="" />
      </div>

      <div className="h-2/5 p-4">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <RidePopUps setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
