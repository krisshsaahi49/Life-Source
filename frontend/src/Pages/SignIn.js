import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Banner from '../components/Banner';
import SignInForm from '../components/SignInForm';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const SignIn = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <SignInForm/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default SignIn;