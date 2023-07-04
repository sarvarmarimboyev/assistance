// Footer.jsx

import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";
import { Link } from "react-router-dom";
import Footerimg from "../../assets/footer-logo.png";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="footer_info">
          <div className="footer_info1">
            <img src={Footerimg} alt="" />
          </div>
          <div className="footer_info2">
            <div className="footer-items">
              <ul>
                <li>
                  <Link to="/">{t("footer.item1")}</Link>
                </li>
                <li>
                  <Link to="/news">{t("footer.item2")}</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/services">{t("footer.item3")}</Link>
                </li>
                <li>
                  <Link to="/about">{t("footer.item4")}</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/contact">{t("footer.item5")}</Link>
                </li>
                <li>
                  <Link to="/partners">{t("footer.item6")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p>
        © 2022 by <span>Koko Digital Agency</span>
      </p>
    </footer>
  );
};

export default Footer;
