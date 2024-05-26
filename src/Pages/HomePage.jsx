import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Specialisations from '../Components/Specialisations'
import Specialists from '../Components/Specialists'
import Caring from '../Components/Caring'
import News from '../Components/News'
import Families from '../Components/Families'
import FAQ from '../Components/FAQ'
import Download from '../Components/Download'
import Footer from '../Components/Footer'


const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Specialisations/>
    <Specialists/>
    <Caring/>
    <News/>
    <Families/>
    <FAQ/>
    <Download/>
    <Footer/>
    </>
  )
}

export default HomePage