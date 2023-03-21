import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Contacts from "../components/Contacts";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";

const Contact = () => {
  return (
    <div id="contact" className="body_wrapper">
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Contact Us"
        Pdescription="Thank you for visiting our blood donation portal. We are here to help connect donors and recipients to ensure that everyone has access to life-saving blood when they need it.

If you have any questions, comments, or feedback, please do not hesitate to contact us. Our dedicated team is always ready to assist you in any way possible."
      />
      <Contacts />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default Contact;
