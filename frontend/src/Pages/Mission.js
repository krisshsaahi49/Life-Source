import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Mission = () => {
  return (
    <div id="mission" className="body_wrapper">
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Mission"
        Pdescription="Our mission is to create a user-friendly online portal that connects blood donors and recipients, making it easy for individuals and organizations to find and donate blood. Our goal is to facilitate the process of blood donation and increase the availability of blood for those in need, while ensuring the safety and privacy of all users. We strive to create a community of individuals who are passionate about saving lives and making a difference in the world through blood donation."
      />
    </div>
  );
};
export default Mission;
