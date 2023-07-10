import React from "react";
import { useTranslation } from "react-i18next";
import Right from "../../assets/right.png";
import "./partners.css";
import PartnerController from "./../../components/PartnerController/PartnerController";
import { Link } from "react-router-dom";
export default function Partners() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container">
        <div className="partners">
          <h1>{t("partners.partners-title")}</h1>
          <div className="contacts-discription">
            <h2>{t("partners.partners-title1")}</h2>
            <p>{t("partners.partners-discription1")}</p>
            <div className="partners__contact">
            
            <Link to="/contact">
              <h3>{t("partners.partners-contact")}</h3>
              <img src={Right} alt="" />
            </Link>
            </div>

            <div className="partners__bottom">
              <ul>
                <li>
                  <a href="https://ariainsurance.uz/uz/">
                    <h3>{t("partners.partners-bottomTitle1")} </h3>
                    <h4>{t("partners.partners-bottomDisc1")}</h4>
                    <img src={Right} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://avtoritetgroup.uz/uz/">
                    <h3>{t("partners.partners-bottomTitle2")} </h3>
                    <h4>{t("partners.partners-bottomDisc2")}</h4>
                    <img src={Right} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://uzbekinvest.uz/uz">
                    <h3>{t("partners.partners-bottomTitle3")} </h3>
                    <h4>{t("partners.partners-bottomDisc3")}</h4>
                    <img src={Right} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.eurasia-assistance.com/">
                    <h3>{t("partners.partners-bottomTitle4")} </h3>
                    <h4>{t("partners.partners-bottomDisc4")}</h4>
                    <img src={Right} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.remedassistance.com/ru">
                    <h3>{t("partners.partners-bottomTitle5")} </h3>
                    <h4>{t("partners.partners-bottomDisc5")}</h4>
                    <img src={Right} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.remedassistance.com/ru">
                    <h3>{t("partners.partners-bottomTitle6")} </h3>
                    <h4>{t("partners.partners-bottomDisc6")}</h4>
                    <img src={Right} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://gvassistance.com/">
                    <h3>{t("partners.partners-bottomTitle7")} </h3>
                    <h4>{t("partners.partners-bottomDisc7")}</h4>
                    <img src={Right} alt="" />
                  </a>
                </li>
                <li>
                  <a href="http://www.missadena.com/" style={{ borderBottom: "1px solid"}}>
                    <h3>{t("partners.partners-bottomTitle8")} </h3>{" "}
                    <h4>{t("partners.partners-bottomDisc8")}</h4>{" "}
                    <img src={Right} alt="" />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <PartnerController />
        </div>
      </div>
    </div>
  );
}
