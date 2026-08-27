function CertificatesStep({ data, onChange }) {
  const certificates = data.certificates;

  const updateEntry = (index, field, value) => {
    const updated = certificates.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry,
    );
    onChange({ ...data, certificates: updated });
  };

  const addEntry = () => {
    onChange({
      ...data,
      certificates: [...certificates, { name: "", issuer: "", year: "" }],
    });
  };

  const removeEntry = (index) => {
    onChange({
      ...data,
      certificates: certificates.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="order-step">
      <h2>Certificates</h2>
      <p className="order-step-subtitle">
        Add relevant certifications (optional)
      </p>

      {certificates.map((entry, index) => (
        <div className="repeatable-entry" key={index}>
          {certificates.length > 1 && (
            <button
              type="button"
              className="remove-entry-btn"
              onClick={() => removeEntry(index)}
              aria-label="Remove certificate entry"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}

          <label>Certificate Name</label>
          <input
            type="text"
            value={entry.name}
            onChange={(e) => updateEntry(index, "name", e.target.value)}
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
        <i className="fa-solid fa-plus"></i> Add Another Certificate
      </button>
    </div>
  );
}

export default CertificatesStep;
