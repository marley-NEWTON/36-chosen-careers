import "./ThemeCustomizer.css";

const accentColors = [
  { id: "blue", hex: "#2563eb" },
  { id: "emerald", hex: "#10b981" },
  { id: "navy", hex: "#0f172a" },
  { id: "purple", hex: "#7c3aed" },
  { id: "rose", hex: "#e11d48" },
];

function ThemeCustomizer({ activeColor, onSelect }) {
  return (
    <div className="theme-customizer">
      <span className="theme-customizer-label">Accent Color</span>
      <div className="theme-customizer-swatches">
        {accentColors.map((color) => (
          <button
            key={color.id}
            className={`theme-swatch ${activeColor === color.hex ? "active" : ""}`}
            style={{ backgroundColor: color.hex }}
            onClick={() => onSelect(color.hex)}
            aria-label={`Set accent color to ${color.id}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ThemeCustomizer;
