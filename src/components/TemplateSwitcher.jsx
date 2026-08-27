import cvTemplates from "../data/cvTemplates.js";
import "./TemplateSwitcher.css";

function TemplateSwitcher({ activeTemplate, onSelect }) {
  return (
    <div className="template-switcher">
      {cvTemplates.map((template) => (
        <button
          key={template.id}
          className={`template-switcher-btn ${
            activeTemplate === template.id ? "active" : ""
          }`}
          onClick={() => onSelect(template.id)}
        >
          {template.name}
        </button>
      ))}
    </div>
  );
}

export default TemplateSwitcher;
