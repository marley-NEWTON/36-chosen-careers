import "./LayoutCustomizer.css";

function LayoutCustomizer({ activeDensity, onSelect }) {
  return (
    <div className="layout-customizer">
      <span className="layout-customizer-label">Spacing</span>
      <div className="layout-customizer-options">
        <button
          className={`layout-option-btn ${activeDensity === "compact" ? "active" : ""}`}
          onClick={() => onSelect("compact")}
        >
          Compact
        </button>
        <button
          className={`layout-option-btn ${activeDensity === "comfortable" ? "active" : ""}`}
          onClick={() => onSelect("comfortable")}
        >
          Comfortable
        </button>
      </div>
    </div>
  );
}

export default LayoutCustomizer;
