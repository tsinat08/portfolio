import React from 'react';
import Navbar from './component/Navbar/Navbar';
import RBanner from './component/Banner/RippleBanner';
import About from './component/About';
// import Service from './component/Service';
import Portfolio from './component/Portfolio/Portfolio';
// import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';
import tsinatData from './component/tsinatData';

//TODO get testimonials

export const Home = () => (
    <div className="body_wrapper">
        <Navbar mainlogo="kc.png" stickylogo="tw-reverse.png"/>
        <RBanner tsinatData={tsinatData} bClass="banner_shap" imag="hero-darker.jpg" textLeft="text-left"/>
        <About aClass="about_area" tsinatData={tsinatData}/>
        {/*<Service wClass="work_area" tsinatData={tsinatData}/>*/}
        <Portfolio/>
        {/*<Testimonial/>*/}
        <Contact tsinatData={tsinatData}/>
        <Footer tsinatData={tsinatData}/>
    </div>
)