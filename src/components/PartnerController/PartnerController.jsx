

import partner1 from "../../assets/partners/partner1.jpg";
import partner2 from "../../assets/partners/partner2.jpg";
import partner3 from "../../assets/partners/partner3.jpg";
import partner4 from "../../assets/partners/partner4.jpg";
import partner5 from "../../assets/partners/partner5.jpg";
import partner6 from "../../assets/partners/partner6.jpg";





import {  useRef } from 'react';
import "./PartnerController.css"
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
  },{
    id: 4,
    image: partner4,
  },{
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

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="container">
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
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

export default PartnerController;
