import React from "react";
import PartnerController from "../../components/PartnerController/PartnerController";
import "./service.css";
import Serviceimg from "../../assets/services/service.jpg";
export default function Service() {
  return (
    <>
      <div className="service-img">
        <img src={Serviceimg} alt="" />
      </div>
      <div className="container">

<h3></h3>
<p></p>
      </div>
      <PartnerController />
    </>
  );
}
