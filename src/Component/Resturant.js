import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";






const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);

  return (
    <>
 
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;