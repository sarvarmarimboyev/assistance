import React from "react";
import Sercice1__detailimg from "../../../../assets/home/home1.jpg";
import { useTranslation } from "react-i18next";
import Left from "../../../../assets/left.png";
import { Link } from "react-router-dom";
import "./servicedetail1.css"
export default function Servicedetail1() {
  const { t } = useTranslation();

  return (
    <div className="service1">
      <div className="container">
        <div className="service1__img">
          <img src={Sercice1__detailimg} alt="" />
        </div>
        <h1>{t("home.home-title2")}</h1>
        <p>{t("home.service-detail1.service-detailDesc1")}</p>
        <p>{t("home.service-detail1.service-detailDesc2")}</p>
        <p>{t("home.service-detail1.service-detailDesc3")}</p>
        <div className="service__last">
          <Link to="/">
            <img src={Left} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
