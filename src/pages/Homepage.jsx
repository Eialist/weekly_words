// import { HomepageTextComponent } from "../components/HomepageTextComponent";

import { YearInfoComponent } from "../components/YearInfoComponent";
import BoxCardComponent from "../components/BoxCardComponent";
import { Footer } from "../components/Footer";
import { HeroTextComponent } from "../components/HeroTextComponent";
import { InformationBoxComponent } from "../components/InformationBoxComponent";
import NavbarBoot from "../components/NavbarBoot";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { AboutUsComponent } from "../components/AboutUsComponent";
// import Navbar from "../components/Navbar";

export const Homepage = () => {
  return (
    <div className="background-hero">
      <NavbarBoot />
      <HeroTextComponent />
      <BoxCardComponent />
      <AnimationOnScroll animateIn="animate__bounceIn">
        <InformationBoxComponent />
      </AnimationOnScroll>
      <YearInfoComponent />
      <AboutUsComponent />
      <Footer />
    </div>
  );
};

export default Homepage;
