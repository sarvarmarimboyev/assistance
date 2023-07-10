import React from "react";
import PartnerController from "./../../components/PartnerController/PartnerController";
import { useTranslation } from "react-i18next";
import "./docs.css";
import Document1 from "../../locales/docsPageDocuments/O‘RQ-684 22.04.2021.doc";
import Document2 from "../../locales/docsPageDocuments/O‘RQ-730 23.11.2021.doc";
import Document3 from "../../locales/docsPageDocuments/YTH xabarnoma blankasi.pdf";
import Document4 from "../../locales/docsPageDocuments/Fuqarolik-kodeksi.pdf";

const Docs = () => {
  const { t } = useTranslation();

  // const document1 = () => {
  //   const fileUrl1 = "../../locales/docsPageDocuments/O‘RQ-684 22.04.2021.doc";
  //   window.location.href = fileUrl1;
  // };
  return (
    <div>
      <>
        <div className="docs__head">
          <div className="container">
            <h1>{t("docs.docs-title")}</h1>
            <div className="docs__bottomContent">
              <a href={Document1}>
                <div className="content__title">{t("docs.docs-title1")}</div>
                <div className="content__discription">
                  {t("docs.docs-discripton1")}
                </div>
              </a>

              <a href={Document2}>
                <div className="content__title">{t("docs.docs-title2")}</div>
                <div className="content__discription">
                  {t("docs.docs-discripton2")}
                </div>
              </a>

              <a href={Document3}>
                <div className="content__title">{t("docs.docs-title3")}</div>
                <div className="content__discription">
                  {t("docs.docs-discripton3")}
                </div>
              </a>
              <a href={Document4}>
                <div className="content__title">{t("docs.docs-title4")}</div>
                <div className="content__discription">
                  {t("docs.docs-discripton4")}
                </div>
              </a>
            </div>
          </div>
        </div>
        <PartnerController />
      </>
    </div>
  );
};
export default Docs;
