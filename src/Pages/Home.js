import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import DesignBanner from '../components/Banner/AppBanner';
import Service from '../components/Service/Service';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

export const Home = () => (
    <div className="body_wrapper">
        <CustomNavbar  mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>
        <DesignBanner/>
        <Service/>
        <Subscribe FooterData={FooterData}/>
        <Footer FooterData={FooterData}/>
    </div>
)