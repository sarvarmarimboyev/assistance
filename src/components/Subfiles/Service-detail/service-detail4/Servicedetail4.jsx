import Left from "../../../../assets/left.png";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import Carusel1 from "../../../../assets/home/home4.jpg";
import Carusel2 from "../../../../assets/subfiles/Carusel2.jpg";
import Carusel3 from "../../../../assets/subfiles/Carusel3.jpg";
import Carusel4 from "../../../../assets/subfiles/Carusel4.jpg";
import Carusel5 from "../../../../assets/subfiles/Carusel5.jpg";

import "./servicedetail4.css";
export default function Servicedetail4() {
  const { t } = useTranslation();

  return (
    <div className="service4">
      <div className="container">
        <div className="home__carousel">
          <Carousel autoplay dotPosition="bottom" className="custom-carousel">
            <div>
              <img src={Carusel1} alt="" />
            </div>
            <div>
              <img src={Carusel2} alt="" />
            </div>
            <div>
              <img src={Carusel3} alt="" />
            </div>
            <div>
              <img src={Carusel4} alt="" />
            </div>
            <div>
              <img src={Carusel5} alt="" />
            </div>
          </Carousel>
        </div>

        <h1>{t("home.home-title5")}</h1>
        <p>{t("home.service-detail4.service-detailDesc1")}</p>

        <div className="service__last">
          <Link to="/">
            <img src={Left} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
