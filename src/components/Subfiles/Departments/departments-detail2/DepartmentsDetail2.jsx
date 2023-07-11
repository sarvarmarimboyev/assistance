import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import Carusel1 from "../../../../assets/subfiles/departments/main2.png";
import Carusel2 from "../../../../assets/subfiles/departments/main5.png";
import Carusel3 from "../../../../assets/subfiles/departments/main6.png";

import "./departmentsDetail2.css";
import Left from "../../../../assets/left.png";
import Right from "../../../../assets/right.png";

export default function DepartmentsDetail2() {
  const { t } = useTranslation();

  return (
    <div className="departments__detail2">
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
          </Carousel>
        </div>
        <div className="detail2__bottom">
          <h1>{t("departments.department-detail2.detail-title1")}</h1>
          <p>{t("departments.department-detail2.detail-description1")}</p>
          <p>{t("departments.department-detail2.detail-description2")}</p>

          <div className="detail2__boxs">
            <div className="detail2-box">
              <h3>{t("departments.department-detail2.detailBox-title1")}</h3>
              <p>
                {t("departments.department-detail2.detailBox-discription1")}
              </p>
              <h2>
                {t("home.home-button1")} <img src={Right} alt="" />
              </h2>
            </div>

            <div className="detail2-box">
              <h3>{t("departments.department-detail2.detailBox-title2")}</h3>
              <p>
                {t("departments.department-detail2.detailBox-discription2")}
              </p>
              <h2>
                {t("home.home-button1")} <img src={Right} alt="" />
              </h2>
            </div>
          </div>
        </div>

        <Link to="/departments">
          <img src={Left} alt="" width="50px" />
        </Link>
      </div>
    </div>
  );
}
