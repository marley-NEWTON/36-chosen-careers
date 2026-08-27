function ProjectsStep({ data, onChange }) {
  const projects = data.projects;

  const updateEntry = (index, field, value) => {
    const updated = projects.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry,
    );
    onChange({ ...data, projects: updated });
  };

  const addEntry = () => {
    onChange({
      ...data,
      projects: [...projects, { title: "", description: "", link: "" }],
    });
  };

  const removeEntry = (index) => {
    onChange({
      ...data,
      projects: projects.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="order-step">
      <h2>Projects</h2>
      <p className="order-step-subtitle">
        Add relevant projects to showcase your work (optional)
      </p>

      {projects.map((entry, index) => (
        <div className="repeatable-entry" key={index}>
          {projects.length > 1 && (
            <button
              type="button"
              className="remove-entry-btn"
              onClick={() => removeEntry(index)}
              aria-label="Remove project entry"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}

          <label>Project Title</label>
          <input
            type="text"
            value={entry.title}
            onChange={(e) => updateEntry(index, "title", e.target.value)}
          />

          <label>Description</label>
          <textarea
            rows="3"
            value={entry.description}
            onChange={(e) => updateEntry(index, "description", e.target.value)}
            placeholder="What did you build and what was the impact?"
          ></textarea>

          <label>Project Link (optional)</label>
          <input
            type="url"
            value={entry.link}
            onChange={(e) => updateEntry(index, "link", e.target.value)}
            placeholder="https://..."
          />
        </div>
      ))}

      <button type="button" className="add-entry-btn" onClick={addEntry}>
        <i className="fa-solid fa-plus"></i> Add Another Project
      </button>
    </div>
  );
}

export default ProjectsStep;
