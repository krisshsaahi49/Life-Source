import React from "react";
import Banner from "../components/Banner";
import Contacts from "../components/Contacts";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";

const Contact = () => {
  return (
    <div id="contact" className="body_wrapper">
      <Contacts />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default Contact;
