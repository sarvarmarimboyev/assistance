import React from "react";
import Sercice3__detailimg from "../../../../assets/home/home3.jpg";
import { useTranslation } from "react-i18next";
import Left from "../../../../assets/left.png";
import { Link } from "react-router-dom";
import "./servicedetail3.css";
export default function Servicedetail3() {
  const { t } = useTranslation();

  return (
    <div className="service3">
      <div className="container">
        <div className="service3__img">
          <img src={Sercice3__detailimg} alt="" />
        </div>
        <h1>{t("home.home-title4")}</h1>
        <p>{t("home.service-detail3.service-detailDesc1")}</p>
        <p>{t("home.service-detail3.service-detailDesc2")}</p>
        <p>{t("home.service-detail3.service-detailDesc3")}</p>

        <div className="service__last">
          <Link to="/">
            <img src={Left} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
