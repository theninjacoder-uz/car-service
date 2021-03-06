import React from  'react';

// components
import Navbar from '../../components/Navbar'
import SimpleSlider from '../../components/hero'
import FooterSection from '../../components/Footer'
import AboutSection from '../../components/about'
import Services from '../../components/services'
import FunFact from '../../components/FunFact'
import Pricing from '../../components/Pricing'
import TeamSection from '../../components/Team'
import BlogSection from '../../components/BlogSection'
import ContactSection from '../../components/ContactSection'
import PartnerSlider from '../../components/partner'


const Homepage = () => {
    return(
       <div className="page-wrapper">
           <Navbar/>
           <SimpleSlider/>
           <AboutSection/>
           <Services/>
           <FunFact/>
           <Pricing/>
           <TeamSection/>
           <BlogSection/>
           <ContactSection/>
           <PartnerSlider/>
           <FooterSection/>
       </div>
    )
}

export default Homepage;