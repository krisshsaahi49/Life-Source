import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import DonorSignUpForm from '../components/DonorSignUpForm';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';

const DonorSignUp = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Donor Sign Up" Pdescription="The blood you donate will give someone another chance to live. One day that someone may be a close relative, a friend, a loved one—or even you."/>
            <DonorSignUpForm/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default DonorSignUp;