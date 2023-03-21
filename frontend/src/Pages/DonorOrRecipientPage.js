import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import CustomNavbar from '../components/CustomNavbar';

const DonorOrRecipientPage = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Thanks for registering" Pdescription="Blood is the most precious gift that anyone can give to another person — the gift of life"/>
        </div>
    )
}
export default DonorOrRecipientPage;