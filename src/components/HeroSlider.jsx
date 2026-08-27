import { useState, useCallback } from "react";
import heroSlides from "../data/heroSlides.js";
import useInterval from "../hooks/useInterval.js";
import HeroSlide from "./HeroSlide.jsx";
import HeroControls from "./HeroControls.jsx";
import HeroIndicators from "./HeroIndicators.jsx";
import "./HeroSlider.css";

const SLIDE_DURATION = 5000;

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  }, []);

  const goToSlide = (index) => setActiveIndex(index);

  useInterval(goToNext, SLIDE_DURATION);

  return (
    <section className="hero-slider">
      {heroSlides.map((slide, index) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          isActive={index === activeIndex}
        />
      ))}

      <HeroControls onPrev={goToPrev} onNext={goToNext} />
      <HeroIndicators
        total={heroSlides.length}
        activeIndex={activeIndex}
        onSelect={goToSlide}
      />
    </section>
  );
}

export default HeroSlider;
