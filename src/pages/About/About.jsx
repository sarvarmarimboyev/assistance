import React from "react";
import "./about.css";
import { useTranslation } from "react-i18next";
import data from "../../locales/ru.json"
import { Location } from './../../components/Location/Location';
const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        {/* <div className="animated-text">
          <h1 className="slide-in">Welcome</h1>
        </div>
        <div className="cube">
          
        </div> */}

        <div className="about__head">
          <h1>{t("about.about-title1")}</h1>
          <p>
            {t("about.about-discription1")}
            <br />
            <br />
            {t("about.about-title2")}
          </p>
        </div>

        <div className="about__employee">
          <div className="about__employeeHead">
            <h1>{t("about.about-title3")}</h1>
          </div>
          <div className="employeeBoxs">
          <div className="employeeBox">
            <div className="boximg">
              <img src={data.about["employee-img1"]} alt="" />
            </div>
              <div className="employeeContent">
               <h1>{t("about.employee-name1")}</h1>
               <h2>{t("about.employee-position1")}</h2>
                <p>{t("about.employee-contact1")}</p>
                <p>{t("about.employee-entrance1")}</p>
                <p>{t("about.employee-email1")}</p>
                <p>{t("about.employee-discription1")}</p>
                <p>{t("about.employee-current-position1")}</p>
              </div>
            </div>

            <div className="employeeBox">

            <div className="boximg">
              <img src={data.about["employee-img2"]} alt="" />

            </div>
              <div className="employeeContent">
               <h1>{t("about.employee-name2")}</h1>
               <h2>{t("about.employee-position2")}</h2>
                <p>{t("about.employee-contact2")}</p>
                <p>{t("about.employee-entrance2")}</p>
                <p>{t("about.employee-email2")}</p>
                <p>{t("about.employee-discription2")}</p>
                <p>{t("about.employee-current-position2")}</p>
              </div>
            </div>
            <div className="employeeBox">
            <div className="boximg">
              <img src={data.about["employee-img3"]} alt="" />
            </div>
              <div className="employeeContent">
               <h1>{t("about.employee-name3")}</h1>
               <h2>{t("about.employee-position3")}</h2>
                <p>{t("about.employee-contact3")}</p>
                <p>{t("about.employee-entrance3")}</p>
                <p>{t("about.employee-email3")}</p>
                <p>{t("about.employee-discription3")}</p>
                <p>{t("about.employee-current-position3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Location/>
    </>
  );
};
export default About;
