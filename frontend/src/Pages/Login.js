import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';
import Donor from './Donor';
import Recipient from './Recipient';
import '../assets/login.css';

const Login = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb
        breadcrumbClass="breadcrumb_area_two"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Welcome"
        Pdescription="Welcome to Life Source"
      />
            <div className="login-wrapper">
                <div className="donor-wrapper">
                    <Donor />
                </div>
                <div className="recipient-wrapper">
                    <Recipient />
                </div>
            </div>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Login;