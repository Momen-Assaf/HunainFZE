import { effect } from "../../assets"
import HeroSection from "./components/HeroSection"

const LandingPage = () => {
  return (
    <div>
      <HeroSection/>
      {/* Image Section */}
      <div className="w-full flex justify-center mt-8">
        <img
          src={effect} // Update with your image path
          alt="Hero Effect"
          className="w-full" // Responsive image styling
        />
      </div>
    </div>
  )
}

export default LandingPage