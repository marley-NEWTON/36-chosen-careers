import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal.js";
import HeroSlider from "../components/HeroSlider.jsx";
import About from "../components/About.jsx";
import Features from "../components/Features.jsx";
import Services from "../components/Services.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";

function Home() {
  const location = useLocation();

  const [aboutRef, aboutVisible] = useScrollReveal();
  const [featuresRef, featuresVisible] = useScrollReveal();
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [testimonialsRef, testimonialsVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const [contactRef, contactVisible] = useScrollReveal();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const navbarOffset = 80;
        const top =
          el.getBoundingClientRect().top + window.scrollY - navbarOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <HeroSlider />

      <div ref={aboutRef} className={`reveal ${aboutVisible ? "visible" : ""}`}>
        <About />
      </div>

      <div
        ref={featuresRef}
        className={`reveal ${featuresVisible ? "visible" : ""}`}
      >
        <Features />
      </div>

      <div
        ref={servicesRef}
        className={`reveal ${servicesVisible ? "visible" : ""}`}
      >
        <Services />
      </div>

      <div
        ref={testimonialsRef}
        className={`reveal ${testimonialsVisible ? "visible" : ""}`}
      >
        <Testimonials />
      </div>

      <div ref={faqRef} className={`reveal ${faqVisible ? "visible" : ""}`}>
        <FAQ />
      </div>

      <div
        ref={contactRef}
        className={`reveal ${contactVisible ? "visible" : ""}`}
      >
        <Contact />
      </div>
    </>
  );
}

export default Home;
