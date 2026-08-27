function HeroControls({ onPrev, onNext }) {
  return (
    <>
      <button
        className="hero-arrow hero-arrow-left"
        onClick={onPrev}
        aria-label="Previous slide"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        className="hero-arrow hero-arrow-right"
        onClick={onNext}
        aria-label="Next slide"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </>
  );
}

export default HeroControls;
