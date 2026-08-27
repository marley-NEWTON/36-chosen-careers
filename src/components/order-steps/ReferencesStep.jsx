function ReferencesStep({ data, onChange }) {
  const references = data.references;

  const updateEntry = (index, field, value) => {
    const updated = references.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry,
    );
    onChange({ ...data, references: updated });
  };

  const addEntry = () => {
    onChange({
      ...data,
      references: [...references, { name: "", relationship: "", contact: "" }],
    });
  };

  const removeEntry = (index) => {
    onChange({
      ...data,
      references: references.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="order-step">
      <h2>References</h2>
      <p className="order-step-subtitle">
        Add professional references (optional)
      </p>

      {references.map((entry, index) => (
        <div className="repeatable-entry" key={index}>
          {references.length > 1 && (
            <button
              type="button"
              className="remove-entry-btn"
              onClick={() => removeEntry(index)}
              aria-label="Remove reference entry"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}

          <label>Full Name</label>
          <input
            type="text"
            value={entry.name}
            onChange={(e) => updateEntry(index, "name", e.target.value)}
          />

          <div className="entry-row">
            <div>
              <label>Relationship</label>
              <input
                type="text"
                value={entry.relationship}
                onChange={(e) =>
                  updateEntry(index, "relationship", e.target.value)
                }
                placeholder="e.g. Former Manager"
              />
            </div>
            <div>
              <label>Contact (Email or Phone)</label>
              <input
                type="text"
                value={entry.contact}
                onChange={(e) => updateEntry(index, "contact", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button type="button" className="add-entry-btn" onClick={addEntry}>
        <i className="fa-solid fa-plus"></i> Add Another Reference
      </button>
    </div>
  );
}

export default ReferencesStep;
