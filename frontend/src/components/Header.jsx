import Styles from "../styles/Header.module.css";
import pizza from "../assets/Pizza.png";
import { BsTelephone } from "react-icons/bs";

import { BsInstagram } from "react-icons/bs";

const Header = () => {
  return (
    <div className={Styles.headerContainer}>
      <div className={Styles.header}>
        <div>
          <h1 className={Styles.headerText}>مرحبًا بكم عند أسامة</h1>
          <ul className={Styles.contactList}>
            <li style={{ color: "white" }}>
              <BsTelephone style={{ marginLeft: "10px" }} /> 05-60-71-33-37
            </li>
            <li>
              <a href="https://www.instagram.com/oussama.sd2/" target="_blank" rel="noopener noreferrer">
                
                  <BsInstagram
                    style={{ color: "#e4405f", marginLeft: "10px" }}
                  />
                  oussama
              </a>
            </li>
          </ul>
        </div>
        <img className={Styles.pizzaImage} src={pizza} alt="Pizza" />
      </div>
    </div>
  );
};

export default Header;
