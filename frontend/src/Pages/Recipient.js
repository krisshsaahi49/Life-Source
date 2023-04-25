import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import {Link} from 'react-router-dom';

const Recipient = () => {
  return (
    <div id="recipient" className="body_wrapper">
      <Breadcrumb
        breadcrumbClass="breadcrumb_area_login"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Recipient"
        Pdescription="Recipients are individuals who receive blood for medical purposes, like treating a medical condition, injury, or surgery. Data collected on recipients includes age, gender, medical history, and the reason for the transfusion. Compatibility between the donor's and recipient's blood is critical. Recipients may also receive additional treatments and monitoring to support their immune system and ensure they respond well to the transfusion."
      />
    
    <div className="link_wrapper">
        <Link exact title="recipientSignIn" className="nav-link" to='/RecipientSignIn'><button type="submit" className="btn_three sign_btn_transparent">Sign In</button></Link>
        <Link exact title="recipientSignUp" className="nav-link" to='/RecipientSignUp'><button type="submit" className="btn_three sign_btn_transparent">Sign Up</button></Link>
        <Link exact title="Faq" className="nav-link" to='/Faq'><button type="submit" className="btn_three sign_btn_transparent">FAQ</button></Link> 
      </div> 
    </div>
    
  );
};
export default Recipient;