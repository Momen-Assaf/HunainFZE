import { useEffect } from "react"
import AboutUs from "../../components/AboutUs"
import ContactUs from "../../components/ContactUs"
import Effect from "./components/Effect"
import HeroSection from "./components/HeroSection"
import OurProjects from "./components/OurProjects"
import OurServices from "./components/OurServices"

const LandingPage = () => {

  useEffect(() => {
    document.title = "Hunain FZE";
  }, []);

  return (
    <div>
      <HeroSection />
      <Effect />
      <AboutUs />
      <OurServices />
      <OurProjects />
      <ContactUs />
    </div>
  )
}

export default LandingPage