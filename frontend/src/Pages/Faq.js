import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FaqSection from '../components/FaqSection';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';

const Faq = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="FAQ" Pdescription="You can have a look here.!!"/>
            <FaqSection/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Faq;