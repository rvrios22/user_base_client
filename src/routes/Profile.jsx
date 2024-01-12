import React, { useEffect, useState } from "react";
import ProfileUserInfo from "../components/profileUserInfo/ProfileUserInfo";

function Profile() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const getProfile = () => {
    fetch("http://localhost:8080/profile", requestOptions)
      .then((res) => res.json())
      .then((payload) => {
        setUser({
          name: payload.name,
          email: payload.email,
          admin: payload.admin
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    getProfile();
  }, [token]);

  return (
    <>
      <ProfileUserInfo user={user}/>
    </>
  );
}

export default Profile;
