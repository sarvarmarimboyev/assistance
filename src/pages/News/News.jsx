import React from "react";
import { useTranslation } from "react-i18next";

import "./news.css";
const News = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="news__head">
        <div className="animated-text">
          <h1 className="slide-in">{t("news.news-title1")}</h1>
        </div>
      </div>
    </div>
  );
};
export default News;
