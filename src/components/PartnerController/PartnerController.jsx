import partner1 from "../../assets/partners/partner1.jpg";
import partner2 from "../../assets/partners/partner2.jpg";
import partner3 from "../../assets/partners/partner3.jpg";
import partner4 from "../../assets/partners/partner4.jpg";
import partner5 from "../../assets/partners/partner5.jpg";
import partner6 from "../../assets/partners/partner6.jpg";
import RightLine from "../../assets/right.png";
import LefttLine from "../../assets/left.png";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import "./PartnerController.css";
const imageData = [
  {
    id: 1,
    image: partner1,
  },
  {
    id: 2,
    image: partner2,
  },
  {
    id: 3,
    image: partner3,
  },
  {
    id: 4,
    image: partner4,
  },
  {
    id: 5,
    image: partner5,
  },
  {
    id: 6,
    image: partner6,
  },
];

function PartnerController() {
  const carousel = useRef(null);
  const { t } = useTranslation();

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="partnerController">
      <div className="container">
        <div className="pageController">
          <h2>{t("pageControllerText")}</h2>
          <div className="controllerImages">
            <img onClick={handleLeftClick} src={LefttLine} alt="" />
            <img onClick={handleRightClick} src={RightLine} alt="" />
          </div>
        </div>
        <div className="carousel" ref={carousel}>
          {imageData.map((item) => {
            const { id, name, image } = item;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt={name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PartnerController;
