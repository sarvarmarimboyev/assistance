import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import Carusel1 from "../../../../assets/subfiles/departments/depmain.jpg";
import Carusel2 from "../../../../assets/subfiles/departments/main4.png";
import Carusel3 from "../../../../assets/subfiles/Carusel5.jpg";
import "./departmentsDetail1.css";
import Left from "../../../../assets/left.png";
import Right from "../../../../assets/right.png";

const DepartmentsDetail1 = () => {
  const { t } = useTranslation();
  return (
    <div className="departments__detail1">
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

        <div className="detail1__bottom">
          <h1>{t("departments.department-detail1.detail-title1")}</h1>
          <p>{t("departments.department-detail1.detail-description1")}</p>
          <p>{t("departments.department-detail1.detail-description2")}</p>
          <p>{t("departments.department-detail1.detail-description3")}</p>
          <p>{t("departments.department-detail1.detail-description4")}</p>

          <div className="detail1__boxs">
            <div className="detail1-box">
              <h3>{t("departments.department-detail1.detailBox-title1")}</h3>
              <h1>{t("departments.department-detail1.detailBox-center1")}</h1>
              <p>
                {t("departments.department-detail1.detailBox-discription1")}
              </p>
              <h2>
                {t("home.home-button1")} <img src={Right} alt="" />
              </h2>
            </div>

            <div className="detail1-box">
              <h3>{t("departments.department-detail1.detailBox-title2")}</h3>
              <h1>{t("departments.department-detail1.detailBox-center2")}</h1>
              <p>
                {t("departments.department-detail1.detailBox-discription2")}
              </p>
              <h2>
                {t("home.home-button1")} <img src={Right} alt="" />
              </h2>
            </div>
            <div className="detail1-box">
              <h3>{t("departments.department-detail1.detailBox-title3")}</h3>
              <h1>{t("departments.department-detail1.detailBox-center3")}</h1>
              <p>
                {t("departments.department-detail1.detailBox-discription3")}
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
};
export default DepartmentsDetail1;
