"use client";
import React, { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/user").then((response) => {
      console.log(response);
      setUserData(response);
    });
  }, []);

  return (
    <div>
      {userData?.map((item, index) => {
        return <h1 key={index}>{item.name}</h1>;
      })}
    </div>
  );
};

export default User;
