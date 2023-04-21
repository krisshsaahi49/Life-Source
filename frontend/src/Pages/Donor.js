import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import {Link} from 'react-router-dom';

const Donor = () => {
  return (
    <div id="donor" className="body_wrapper">
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Donor"
        Pdescription="Donors are individuals who voluntarily give blood or blood components for transfusion or other medical purposes. Data collected on donors includes demographic information like age, gender, race/ethnicity, medical history, and blood type. Donors are also screened for health conditions and infectious diseases to ensure the safety of the blood supply."
      />
    
    <div className="link_wrapper">
        <Link exact title="donorSignIn" className="nav-link" to='/DonorSignIn'><button type="submit" className="btn_three sign_btn_transparent">Sign In</button></Link>
        <Link exact title="donorSignUp" className="nav-link" to='/DonorSignUp'><button type="submit" className="btn_three sign_btn_transparent">Sign Up</button></Link>
        <Link exact title="Faq" className="nav-link" to='/Faq'><button type="submit" className="btn_three sign_btn_transparent">FAQ</button></Link> 
      </div> 
    </div>
  );
};
export default Donor;