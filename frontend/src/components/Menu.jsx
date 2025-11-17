import React from "react";
import MenuItem from "./MenuItem"; // Import the new component
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <h2 className="menu-title">قائمة الطعام</h2>
      <ul className="menu-list">
        {/* Pizza Section */}
        <li className="menu-section">
          <h3>بيتزا</h3>
          <ul>
            <MenuItem name="بيتزا مارغريتا" price={250} />
            <MenuItem name="كوكا" price={50} />
            <MenuItem name="بيتزا كاري" price={30} />
          </ul>
        </li>

        {/* Sandwich Section */}
        <li className="menu-section">
          <h3>ساندويتش</h3>
          <ul>
            <MenuItem name="سبيسيال" price={150} />
            <MenuItem name="فريت اوملات" price={100} />
            <MenuItem name="كران" price={20} />
          </ul>
        </li>
        {/*momalahat section*/}
        <li className="menu-section">
          <h3>المملحات</h3>
          <MenuItem name="تشيز" price={100} />
          <MenuItem name="بطبوط" price={60} />
          <MenuItem name="ميني طاكوس" price={80} />
        </li>
        {/* Drinks Section */}
        <li className="menu-section">
          <h3>مشروبات</h3>
          <ul>
            <MenuItem name="jus Rami" price={70} />
            <MenuItem name="Selecto/Kimo" price={40} />
            <MenuItem name="jus daily" price={30} />
            <MenuItem name="jus citron" price={20} />
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
