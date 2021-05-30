import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Bloglists from '../components/Blog/Bloglists'
import FooterTwo from '../components/Footer/FooterSecurity';
import FooterData from '../components/Footer/FooterData';

const Bloglist = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Blog List" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <Bloglists/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Bloglist;