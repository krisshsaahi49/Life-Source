import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import RecipientSignUpForm from '../components/RecipientSignUpForm';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';

const RecipientSignUp = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Recipient Sign Up" Pdescription="Thank you for taking the first step towards potentially saving your life or the life of a loved one"/>
            <RecipientSignUpForm/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default RecipientSignUp;