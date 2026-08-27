function HeroIndicators({ total, activeIndex, onSelect }) {
  return (
    <div className="hero-indicators">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          className={`hero-dot ${index === activeIndex ? "active" : ""}`}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === activeIndex}
        ></button>
      ))}
    </div>
  );
}

export default HeroIndicators;
