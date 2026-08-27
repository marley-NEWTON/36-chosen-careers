const proficiencyLevels = ["Basic", "Conversational", "Fluent", "Native"];

function LanguagesStep({ data, onChange }) {
  const languages = data.languages;

  const updateEntry = (index, field, value) => {
    const updated = languages.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry,
    );
    onChange({ ...data, languages: updated });
  };

  const addEntry = () => {
    onChange({
      ...data,
      languages: [...languages, { name: "", level: "Conversational" }],
    });
  };

  const removeEntry = (index) => {
    onChange({
      ...data,
      languages: languages.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="order-step">
      <h2>Languages</h2>
      <p className="order-step-subtitle">
        Add languages you speak and your proficiency
      </p>

      {languages.map((entry, index) => (
        <div className="repeatable-entry" key={index}>
          {languages.length > 1 && (
            <button
              type="button"
              className="remove-entry-btn"
              onClick={() => removeEntry(index)}
              aria-label="Remove language entry"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}

          <div className="entry-row">
            <div>
              <label>Language</label>
              <input
                type="text"
                value={entry.name}
                onChange={(e) => updateEntry(index, "name", e.target.value)}
                placeholder="e.g. English"
              />
            </div>
            <div>
              <label>Proficiency</label>
              <select
                value={entry.level}
                onChange={(e) => updateEntry(index, "level", e.target.value)}
              >
                {proficiencyLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}

      <button type="button" className="add-entry-btn" onClick={addEntry}>
        <i className="fa-solid fa-plus"></i> Add Another Language
      </button>
    </div>
  );
}

export default LanguagesStep;
