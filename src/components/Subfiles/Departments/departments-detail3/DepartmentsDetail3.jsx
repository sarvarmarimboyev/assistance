import React from "react";
import "./departmentsDetail3.css";
import Left from "../../../../assets/left.png";
import Carusel1 from "../../../../assets/subfiles/departments/main3.png";
import Carusel2 from "../../../../assets/subfiles/departments/main7.png";
import { useTranslation } from "react-i18next";
import { Carousel } from "antd";
import { Link } from "react-router-dom";


export default function DepartmentsDetail3() {
 
  const { t } = useTranslation();
 

 return <div className="departments__detail3">
   <div className="container">
        <div className="home__carousel">
          <Carousel autoplay dotPosition="bottom" className="custom-carousel">
            <div>
              <img src={Carusel1} alt="" />
            </div>
            <div>
              <img src={Carusel2} alt="" />
            </div>
          </Carousel>
        </div>
        <div className="detail3__bottom">
          <h1>{t("departments.department-detail3.detail-title1")}</h1>
          <p>{t("departments.department-detail3.detail-description1")}</p>
          <p>{t("departments.department-detail3.detail-description2")}</p>
          <p>{t("departments.department-detail3.detail-description3")}</p>
          <p>{t("departments.department-detail3.detail-description4")}</p>
          <p>{t("departments.department-detail3.detail-description5")}</p>
          <p>{t("departments.department-detail3.detail-description6")}</p>
          <p>{t("departments.department-detail3.detail-description7")}</p>
        </div>
        <Link to="/departments">
          <img src={Left} alt="" width="50px" />
        </Link>
      </div>
  </div>;
}
