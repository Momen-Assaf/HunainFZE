import AboutUs from "../../components/AboutUs"
import ContactUs from "../../components/ContactUs"
import Effect from "./components/Effect"
import HeroSection from "./components/HeroSection"
import OurProjects from "./components/OurProjects"
import OurServices from "./components/OurServices"

const LandingPage = () => {
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