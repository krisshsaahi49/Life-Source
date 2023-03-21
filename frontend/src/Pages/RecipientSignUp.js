import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Banner from '../components/Banner';
import RecipientSignUpForm from '../components/RecipientSignUpForm';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const RecipientSignUp = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <RecipientSignUpForm/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default RecipientSignUp;