import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import {Link} from 'react-router-dom';

const Recipient = () => {
  return (
    <div id="recipient" className="body_wrapper">
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Recipient"
        Pdescription="Recipients are individuals who receive blood or blood components for medical purposes, like treating a medical condition, injury, or surgery. Data collected on recipients includes age, gender, medical history, and the reason for the transfusion. Compatibility between the donor's and recipient's blood is critical, which is determined through blood typing. Recipients may also receive additional treatments and monitoring to support their immune system and ensure they respond well to the transfusion."
      />
    
    <div className="link_wrapper">
        <Link exact title="signIn" className="nav-link" to='/SignIn'><button type="submit" className="btn_three sign_btn_transparent">Sign In</button></Link>
        <Link exact title="signUp" className="nav-link" to='/RecipientSignUp'><button type="submit" className="btn_three sign_btn_transparent">Sign Up</button></Link>
        <Link exact title="Faq" className="nav-link" to='/Faq'><button type="submit" className="btn_three sign_btn_transparent">FAQ</button></Link> 
      </div> 
    </div>
    
  );
};
export default Recipient;