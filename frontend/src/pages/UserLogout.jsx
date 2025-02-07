import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";

const UserLogout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserDataContext);

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem("token");
      try {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        // console.log("Logout error:", error);
      } finally {
        // Clear user data regardless of API success/failure
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
      }
    };

    logout();
  }, []);

  return <div>Logging out...</div>;
};

export default UserLogout;
