// // Navbar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import './Navbar.css';

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const changeLanguage = (language) => {
//     i18n.changeLanguage(language);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-items">
//         <Link to="/">{t('navbar.item1')}</Link>
//         <Link to="/news">{t('navbar.item2')}</Link>
//         <Link to="/services">{t('navbar.item3')}</Link>
//         <Link to="/about">{t('navbar.item4')}</Link>
//         <Link to="/contact">{t('navbar.item5')}</Link>
//         <Link to="/partners">{t('navbar.item6')}</Link>
//         <select
//           value={i18n.language}
//           onChange={(e) => changeLanguage(e.target.value)}
//         >
//           <option value="ru">Russian</option>
//           <option value="uz">Uzbek</option>
//         </select>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="navbar-items">
        <Link to="/">{t("navbar.item1")}</Link>
        <Link to="/news">{t("navbar.item2")}</Link>
        <Link to="/services">{t("navbar.item3")}</Link>
        <Link to="/about">{t("navbar.item4")}</Link>
        <Link to="/contact">{t("navbar.item5")}</Link>
        <Link to="/partners">{t("navbar.item6")}</Link>
        <select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="ru">Russian</option>
          <option value="uz">Uzbek</option>
        </select>
      </div>
      <Button
        className="navbar-button"
        icon={<MenuOutlined />}
        onClick={toggleDrawer}
      />
      <Drawer placement="right" visible={drawerVisible} onClose={toggleDrawer}>
        <div className="drawer-items">
          <Link to="/">{t("navbar.item1")}</Link>
          <Link to="/news">{t("navbar.item2")}</Link>
          <Link to="/services">{t("navbar.item3")}</Link>
          <Link to="/about">{t("navbar.item4")}</Link>
          <Link to="/contact">{t("navbar.item5")}</Link>
          <Link to="/partners">{t("navbar.item6")}</Link>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
