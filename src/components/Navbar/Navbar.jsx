// import React from "react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
// import {  Button } from "antd";
// import "./Navbar.css";
// import Logo from "../../assets/Logo.png";

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [drawerVisible, setDrawerVisible] = React.useState(false);

//   const toggleDrawer = () => {
//     setDrawerVisible(!drawerVisible);
//   };

//   const changeLanguage = (language) => {
//     i18n.changeLanguage(language);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">
//           <img src={Logo} alt="" />
//         </Link>
//       </div>
//       <ul className={`navbar-items ${drawerVisible ? "active" : ""}`}>
//         <li>
//           <Link to="/">{t("navbar.item1")}</Link>
//         </li>
//         <li>
//           <Link to="/news">{t("navbar.item2")}</Link>
//         </li>
//         <li>
//           <Link to="/services">{t("navbar.item3")}</Link>
//         </li>
//         <li>
//           <Link to="/about">{t("navbar.item4")}</Link>
//         </li>
//         <li>
//           <Link to="/contact">{t("navbar.item5")}</Link>
//         </li>
//         <li>
//           <Link to="/partners">{t("navbar.item6")}</Link>
//         </li>
//         <li>
//           <Link to="/docs">{t("navbar.item7")}</Link>
//         </li>
//       </ul>
//       <select
//         value={i18n.language}
//         onChange={(e) => changeLanguage(e.target.value)}
//       >
//         <option value="ru">Ru</option>
//         <option value="uz">Uz</option>
//       </select>
//       {!drawerVisible ? (
//         <Button
//           color="white"
//           className="navbar-button"
//           icon={<MenuOutlined />}
//           onClick={toggleDrawer}
//         />
//       ) : (
//         <Button
//           color="white"
//           className="navbar-button close-button"
//           icon={<CloseOutlined />}
//           onClick={toggleDrawer}
//         />
//       )}

//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [collectVisible, setCollectVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
    setCollectVisible(!drawerVisible);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className={`collect ${collectVisible ? "active" : ""}`}>
        <ul className={`navbar-items ${drawerVisible ? "active" : ""}`}>
          {drawerVisible ? (
            <Button
              className="navbar-button close-button"
              icon={<CloseOutlined />}
              onClick={toggleDrawer}
            />
          ) : null}
          <li>
            <Link to="/">{t("navbar.item1")}</Link>
          </li>
          <li>
            <Link to="/news">{t("navbar.item2")}</Link>
          </li>
          <li>
            <Link to="/services">{t("navbar.item3")}</Link>
          </li>
          <li>
            <Link to="/about">{t("navbar.item4")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("navbar.item5")}</Link>
          </li>
          <li>
            <Link to="/partners">{t("navbar.item6")}</Link>
          </li>
          <li>
            <Link to="/docs">{t("navbar.item7")}</Link>
          </li>
        </ul>
      </div>
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="ru">Ru</option>
        <option value="uz">Uz</option>
      </select>
      <Button
        color="white"
        className={`navbar-button menu-button ${
          drawerVisible ? "hidden" : ""
        }`}
        icon={<MenuOutlined />}
        onClick={toggleDrawer}
      />
    </nav>
  );
};

export default Navbar;
