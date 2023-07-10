import React from "react";
import PartnerController from "../../components/PartnerController/PartnerController";
import "./service.css";
import { useTranslation } from "react-i18next";
import Serviceimg from "../../assets/services/service.jpg";
export default function Service() {
  const { t } = useTranslation();

  return (
    <>
      <div className="service-img">
        <img src={Serviceimg} alt="" />
      </div>
      <div className="container">
        <div className="service-content">
          <h2>{t("services.service-title1")}</h2>
          <p>{t("services.service-discription1")}</p>
          <h2>{t("services.service-title2")}</h2>
          <p>{t("services.service-discription2")}</p>
          <h2>{t("services.service-title3")}</h2>
          <p>{t("services.service-discription3")}</p>
          <h2>{t("services.service-title4")}</h2>
          <p>{t("services.service-discription4")}</p>
        </div>
      </div>
      <PartnerController />
    </>
  );
}
