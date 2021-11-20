import React, { useState } from "react"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { homeObjOne } from "./../components/InfoSection/Data"
import Projects from "../components/ProjectsSection/index"
import Footer from "../components/Footer"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Projects />
      <Footer />
    </>
  )
}

export default Home
