import React, { useEffect, useState } from "react";

function ProfileUserInfo({ user }) {
  return (
    <>
      <img
        src="https://static.thenounproject.com/png/526867-200.png"
        alt="generic"
      />
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
}

export default ProfileUserInfo;
