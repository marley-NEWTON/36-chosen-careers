function AwardsStep({ data, onChange }) {
  const awards = data.awards;

  const updateEntry = (index, field, value) => {
    const updated = awards.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry,
    );
    onChange({ ...data, awards: updated });
  };

  const addEntry = () => {
    onChange({
      ...data,
      awards: [...awards, { title: "", issuer: "", year: "" }],
    });
  };

  const removeEntry = (index) => {
    onChange({
      ...data,
      awards: awards.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="order-step">
      <h2>Awards</h2>
      <p className="order-step-subtitle">
        Add any awards or recognitions (optional)
      </p>

      {awards.map((entry, index) => (
        <div className="repeatable-entry" key={index}>
          {awards.length > 1 && (
            <button
              type="button"
              className="remove-entry-btn"
              onClick={() => removeEntry(index)}
              aria-label="Remove award entry"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}

          <label>Award Title</label>
          <input
            type="text"
            value={entry.title}
            onChange={(e) => updateEntry(index, "title", e.target.value)}
          />

          <div className="entry-row">
            <div>
              <label>Issuing Organization</label>
              <input
                type="text"
                value={entry.issuer}
                onChange={(e) => updateEntry(index, "issuer", e.target.value)}
              />
            </div>
            <div>
              <label>Year</label>
              <input
                type="text"
                value={entry.year}
                onChange={(e) => updateEntry(index, "year", e.target.value)}
                placeholder="2023"
              />
            </div>
          </div>
        </div>
      ))}

      <button type="button" className="add-entry-btn" onClick={addEntry}>
        <i className="fa-solid fa-plus"></i> Add Another Award
      </button>
    </div>
  );
}

export default AwardsStep;
