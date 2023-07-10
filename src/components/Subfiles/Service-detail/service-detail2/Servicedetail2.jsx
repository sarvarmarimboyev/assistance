import React from "react";
import Sercice2__detailimg from "../../../../assets/home/home2.jpg";
import { useTranslation } from "react-i18next";
import Left from "../../../../assets/left.png";
import { Link } from "react-router-dom";
import "./servicedetail2.css";
export default function Servicedetail2() {
  const { t } = useTranslation();

  return (
    <div className="service2">
      <div className="container">
        <div className="service2__img">
          <img src={Sercice2__detailimg} alt="" />
        </div>
        <h1>{t("home.home-title3")}</h1>
        <p>{t("home.service-detail2.service-detailDesc1")}</p>
        <p>{t("home.service-detail2.service-detailDesc2")}</p>
        <p>{t("home.service-detail2.service-detailDesc3")}</p>

        <div className="service__last">
          <Link to="/">
            <img src={Left} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
