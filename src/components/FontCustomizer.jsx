import cvFonts from "../data/cvFonts.js";
import "./FontCustomizer.css";

function FontCustomizer({ activeFont, onSelect }) {
  return (
    <div className="font-customizer">
      <span className="font-customizer-label">Font</span>
      <select
        value={activeFont}
        onChange={(e) => onSelect(e.target.value)}
        className="font-customizer-select"
      >
        {cvFonts.map((font) => (
          <option key={font.id} value={font.family}>
            {font.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FontCustomizer;
