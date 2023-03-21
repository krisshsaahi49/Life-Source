import React from "react";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';

const Donor = () => {
  return (
    <div id="donor" className="body_wrapper">
    
    <div className="link_wrapper">
        <Link exact title="signIn" className="nav-link" to='/SignIn'><button type="submit" className="btn_three sign_btn_transparent">Sign In</button></Link>
        <Link exact title="signUp" className="nav-link" to='/SignUp'><button type="submit" className="btn_three sign_btn_transparent">Sign Up</button></Link>
        <Link exact title="Faq" className="nav-link" to='/Faq'><button type="submit" className="btn_three sign_btn_transparent">FAQ</button></Link> 
      </div> 
    </div>
  );
};
export default Donor;