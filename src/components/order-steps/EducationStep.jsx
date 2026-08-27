function EducationStep({ data, onChange }) {
  const education = data.education;

  const updateEntry = (index, field, value) => {
    const updated = education.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry,
    );
    onChange({ ...data, education: updated });
  };

  const addEntry = () => {
    onChange({
      ...data,
      education: [
        ...education,
        { institution: "", qualification: "", startYear: "", endYear: "" },
      ],
    });
  };

  const removeEntry = (index) => {
    onChange({
      ...data,
      education: education.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="order-step">
      <h2>Education</h2>
      <p className="order-step-subtitle">Add your academic background</p>

      {education.map((entry, index) => (
        <div className="repeatable-entry" key={index}>
          {education.length > 1 && (
            <button
              type="button"
              className="remove-entry-btn"
              onClick={() => removeEntry(index)}
              aria-label="Remove education entry"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}

          <label>Institution Name</label>
          <input
            type="text"
            value={entry.institution}
            onChange={(e) => updateEntry(index, "institution", e.target.value)}
          />

          <label>Qualification / Degree</label>
          <input
            type="text"
            value={entry.qualification}
            onChange={(e) =>
              updateEntry(index, "qualification", e.target.value)
            }
          />

          <div className="entry-row">
            <div>
              <label>Start Year</label>
              <input
                type="text"
                value={entry.startYear}
                onChange={(e) =>
                  updateEntry(index, "startYear", e.target.value)
                }
                placeholder="2018"
              />
            </div>
            <div>
              <label>End Year</label>
              <input
                type="text"
                value={entry.endYear}
                onChange={(e) => updateEntry(index, "endYear", e.target.value)}
                placeholder="2022"
              />
            </div>
          </div>
        </div>
      ))}

      <button type="button" className="add-entry-btn" onClick={addEntry}>
        <i className="fa-solid fa-plus"></i> Add Another Education
      </button>
    </div>
  );
}

export default EducationStep;
