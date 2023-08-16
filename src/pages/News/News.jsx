import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./news.css";
import { useTranslation } from "react-i18next";
import Right from "../../assets/right.png";
const apiUrlBase = "https://uzbekinvest.goldblock.uz";

function Card({ data, onClick }) {
  const { t } = useTranslation();

  return (
    <div className="NewsCard" onClick={() => onClick(data)}>
      <div>
  <p> {data.title}</p>
        <img
          src={data.image_path}
          alt={data.title}
          style={{ width: "100%", height: "auto" }}
        />

        <div className="bottomNews__Card">
          <h3>{t("home.home-button1")}</h3>
          <img src={Right} alt="" />
        </div>
      </div>
    </div>
  );
}

function News({ language }) {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `${apiUrlBase}/${language}/api/v1/news`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [language]);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    history.push(`/news/${cardData.id}`);
  };

  const { t } = useTranslation();
  return (
    <div>
      <div className="newsHead">
        <h1>{t("news.news-title1")}</h1>
      </div>
      <div className="newsCollect">
        {data.map((entry) => (
          <Card key={entry.id} data={entry} onClick={handleCardClick} />
        ))}
      </div>
      {selectedCard && (
        <div>
          <h2>{selectedCard.title}</h2>
          <img
            src={selectedCard.image_path}
            alt={selectedCard.title}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}

export default News;
