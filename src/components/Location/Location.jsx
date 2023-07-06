import React from "react";
import { useTranslation } from "react-i18next";

export const Location = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="location__main">
        <div className="location__left">
          <div className="location__leftTop">
            <h4>{t("location.location-table-title1")}</h4>
            <p>{t("location.location-table-discription1")}</p>
          </div>
          <div className="location__leftBottom"><h3>{t("location.location-table-title2")}</h3><p>{t("location.location-table-discription2")}</p></div>
          <div className="location__leftBottom"><h3>{t("location.location-table-title3")}</h3><p>{t("location.location-table-discription3")}</p></div>
          <div className="location__leftBottom"><h3>{t("location.location-table-title4")}</h3><p>{t("location.location-table-discription4")}</p></div>
          <div className="location__leftBottom"><h3>{t("location.location-table-title5")}</h3><p>{t("location.location-table-discription5")}</p></div>
        </div>
        <div className="location__right">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1499.080600384637!2d69.20836998882983!3d41.28359599282833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b36a50c9793%3A0x995b33e6f8b66565!2z0JrQrdCY0KEgItCj0LfQsdC10LrQuNC90LLQtdGB0YIi!5e0!3m2!1sru!2s!4v1688489963379!5m2!1sru!2s"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};
