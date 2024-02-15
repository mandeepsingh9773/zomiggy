import React, { useState } from "react";
import { useEffect } from "react";
import { FETCH_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(FETCH_MENU_URL);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  return (
    <div className="menu p-10 m-10">
      <h1>Name Of Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Paneer Masala</li>
        <li>Burger</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
