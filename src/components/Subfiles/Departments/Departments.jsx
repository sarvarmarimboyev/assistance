import React from "react";
import DepMain from "../../../assets/subfiles/departments/depmain.jpg";
import { useTranslation } from "react-i18next";
import Right from "../../../assets/right.png";
import DepMain2 from "../../../assets/subfiles/departments/main2.png";
import DepMain3 from "../../../assets/subfiles/departments/main3.png";
import "./departments.css"
export const Departments = () => {
  const { t } = useTranslation();

  return (
    <div className="departments__main">
      <div className="container">
        <section className="first">


          <div className="head__img">
            <img src={DepMain} alt="" />
          </div>

          <div className="head__content">
            <h1>{t("departments.main-title1")}</h1>
            <p>{t("departments.main-description1")}</p>
            <p>{t("departments.main-description2")}</p>
            <p>{t("departments.main-description3")}</p>
            <p>{t("departments.main-description4")}</p>
          </div>

          <div className="bottom__boxs">
            <div className="bottom__box">
              <h3>{t("departments.departmentBox.box-title1")}</h3>
              <p>{t("departments.departmentBox.box-description1")}</p>
              <div className="box__last">
                <h1>{t("home.home-button1")}</h1>
                <img src={Right} alt="" />
              </div>
            </div>

            <div className="bottom__box">
              <h3>{t("departments.departmentBox.box-title1")}</h3>
              <p>{t("departments.departmentBox.box-description1")}</p>
              <div className="box__last">
                <h1>{t("home.home-button1")}</h1>
                <img src={Right} alt="" />
              </div>
            </div>

            <div className="bottom__box">
              <h3>{t("departments.departmentBox.box-title3")}</h3>
              <p>{t("departments.departmentBox.box-description3")}</p>
              <div className="box__last">
                <h1>{t("home.home-button1")}</h1>
                <img src={Right} alt="" />
              </div>
            </div>

          </div>
        </section>

        <section className="secound">
          <div className="head__img">
            <img src={DepMain2} alt="" />
          </div>
          <div className="head__content">
            <h1>{t("departments.main-title1")}</h1>
            <p>{t("departments.main-description1")}</p>
            <p>{t("departments.main-description2")}</p>
            <p>{t("departments.main-description3")}</p>
            <p>{t("departments.main-description4")}</p>
          </div>
          <div className="bottom__boxs">
            <div className="bottom__box">
              <h2>{t("departments.departmentBox.box-title4")}</h2>
              <p>{t("departments.departmentBox.box-discription4")}</p>
              <div className="box__last">
                <img src={Right} alt="" />
                <h1>{t("home.home-button1")}</h1>
              </div>
            </div>

            <div className="bottom__box">
              <h2>{t("departments.departmentBox.box-title5")}</h2>
              <p>{t("departments.departmentBox.box-discription5")}</p>
              <div className="box__last">
                <img src={Right} alt="" />
                <h1>{t("home.home-button1")}</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="third">
          <div className="head__img">
            <img src={DepMain3} alt="" />
          </div>
          <div className="head__content">
            <h1>{t("departments.main-title1")}</h1>
            <p>{t("departments.main-description1")}</p>
            <p>{t("departments.main-description2")}</p>
            <p>{t("departments.main-description3")}</p>
            <p>{t("departments.main-description4")}</p>
          </div>
        </section>
      </div>
    </div>
  );
};
