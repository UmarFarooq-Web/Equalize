import Navbar from "../components/Navbar"
import EndSection from "./EndSection"
import FAQSection from "./FAQSection"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import SecuritySection from "./SecuritySection"
import TestimonialSection from "./TestimonialSection"
import WorkSection from "./WorkSection"

const HomePage = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <HeroSection />
      <WorkSection />
      <SecuritySection />
      <TestimonialSection />
      <FAQSection />
      <EndSection />
      <Footer />
    </ div>
  )
}
export default HomePage