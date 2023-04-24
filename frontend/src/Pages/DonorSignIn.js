import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';
import DonorSignInFrom from '../components/DonorSignInForm';

const DonorSignIn = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Donor Sign In" Pdescription="Blood is the most precious gift that anyone can give to another person — the gift of life"/>
            <DonorSignInFrom/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default DonorSignIn;