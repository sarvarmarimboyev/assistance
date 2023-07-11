import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "antd";
import Carusel1 from "../../assets/home/carusel1.jpg";
import Carusel2 from "../../assets/home/carusel2.jpg";
import Carusel3 from "../../assets/home/carusel3.jpg";
import "./home.css";
import PartnerController from "../../components/PartnerController/PartnerController";
import Homebox1 from "../../assets/home/home1.jpg";
import Homebox2 from "../../assets/home/home2.jpg";
import Homebox3 from "../../assets/home/home3.jpg";
import Homebox4 from "../../assets/home/home4.jpg";
import Right from "../../assets/right.png";
import { Location } from "../../components/Location/Location";
import { Link } from "react-router-dom";
const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="home__first">
        <div className="home__carousel">
          <Carousel autoplay dotPosition="bottom" className="custom-carousel">
            <div>
              <img src={Carusel1} alt="" />
            </div>
            <div>
              <img src={Carusel2} alt="" />
            </div>
            <div>
              <img src={Carusel3} alt="" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="home__secound">
        <div className="container">
          <h1>{t("home.home-title1")}</h1>
          <div className="home__boxs">
            <div className="home__box">
              <div className="home__boxleft">
                <img src={Homebox1} alt="" />
              </div>
              <div className="home__boxright">
                <h3>{t("home.home-title2")}</h3>
                <p>{t("home.home-discription1")}</p>
                <Link to="/service-detail1">
                  <button>{t("home.home-button1")}</button>
                </Link>
              </div>
            </div>
            <div className="home__box">
              <div className="home__boxleft">
                <img src={Homebox2} alt="" />
              </div>
              <div className="home__boxright">
                <h3>{t("home.home-title3")}</h3>
                <p>{t("home.home-discription2")}</p>
                <Link to="/service-detail2">
                  <button>{t("home.home-button1")}</button>
                </Link>
              </div>
            </div>
            <div className="home__box">
              <div className="home__boxleft">
                <img src={Homebox3} alt="" />
              </div>
              <div className="home__boxright">
                <h3>{t("home.home-title4")}</h3>
                <p>{t("home.home-discription3")}</p>
                <Link to="/service-detail3">
                  <button>{t("home.home-button1")}</button>
                </Link>
              </div>
            </div>
            <div className="home__box">
              <div className="home__boxleft">
                <img src={Homebox4} alt="" />
              </div>
              <div className="home__boxright">
                <h3>{t("home.home-title5")}</h3>
                <p>{t("home.home-discription4")}</p>
                <Link to="/service-detail4">
                  <button>{t("home.home-button1")}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home__third">
        <div className="container">
          <div className="home__thirdSupport">
            <div className="home__thirdLeft">
              <h1>{t("home.home-box-title1")}</h1>
              <p>{t("home.home-box-discription1")}</p>
            </div>
            <div className="home__thirdRight">
              <div className="third__rightBoxs">
                <Link to="/department-detail1" className="home-link">
                  <div className="third__rightBox">
                    <h2>{t("home.home-box-title2")}</h2>
                    <p>{t("home.home-box-discription2")}</p>
                    <div className="rightbox__bottom">
                      <h4>{t("home.home-button1")}</h4>
                      <img src={Right} alt="" />
                    </div>
                  </div>
                </Link>

                <Link to="/department-detail2" className="home-link">
                  <div className="third__rightBox">
                    <h2>{t("home.home-box-title3")}</h2>
                    <p>{t("home.home-box-discription3")}</p>
                    <div className="rightbox__bottom">
                      <h4>{t("home.home-button1")}</h4>
                      <img src={Right} alt="" />
                    </div>
                  </div>
                </Link>

                <Link className="home-link" to="/department-detail3">
                  <div className="third__rightBox">
                    <h2>{t("home.home-box-title4")}</h2>
                    <p>{t("home.home-box-discription4")}</p>
                    <div className="rightbox__bottom">
                      <h4>{t("home.home-button1")}</h4>
                      <img src={Right} alt="" />
                    </div>
                  </div>
                </Link>
                <Link to="/department-detail4" className="home-link">
                  <div className="third__rightBox">
                    <h2>{t("home.home-box-title5")}</h2>
                    <p>{t("home.home-box-discription5")}</p>
                    <div className="rightbox__bottom">
                      <h4>{t("home.home-button1")}</h4>
                      <img src={Right} alt="" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Link to="departments">
            <button>{t("home.home-button2")}</button>
          </Link>
        </div>
      </section>

      <PartnerController />
      <Location />
    </>
  );
};

export default Home;