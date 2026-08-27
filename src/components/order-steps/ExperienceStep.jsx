import { useState } from "react";
import { improveExperience } from "../../api/aiApi.js";

function ExperienceStep({ data, onChange }) {
  const experience = data.experience;
  const [improvingIndex, setImprovingIndex] = useState(null);
  const [aiError, setAiError] = useState("");

  const updateEntry = (index, field, value) => {
    const updated = experience.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry,
    );
    onChange({ ...data, experience: updated });
  };

  const addEntry = () => {
    onChange({
      ...data,
      experience: [
        ...experience,
        { company: "", role: "", startDate: "", endDate: "", description: "" },
      ],
    });
  };

  const removeEntry = (index) => {
    onChange({
      ...data,
      experience: experience.filter((_, i) => i !== index),
    });
  };

  const handleImprove = async (index) => {
    const entry = experience[index];
    if (!entry.role || !entry.description) {
      setAiError("Please fill in Job Title and a basic Description first.");
      return;
    }

    setAiError("");
    setImprovingIndex(index);
    try {
      const result = await improveExperience({
        role: entry.role,
        company: entry.company,
        description: entry.description,
      });
      updateEntry(index, "description", result.improved);
    } catch (error) {
      setAiError("Could not improve description. Please try again.");
    } finally {
      setImprovingIndex(null);
    }
  };

  return (
    <div className="order-step">
      <h2>Work Experience</h2>
      <p className="order-step-subtitle">Add your relevant work history</p>
      {aiError && <span className="field-error">{aiError}</span>}

      {experience.map((entry, index) => (
        <div className="repeatable-entry" key={index}>
          {experience.length > 1 && (
            <button
              type="button"
              className="remove-entry-btn"
              onClick={() => removeEntry(index)}
              aria-label="Remove experience entry"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}

          <label>Company Name</label>
          <input
            type="text"
            value={entry.company}
            onChange={(e) => updateEntry(index, "company", e.target.value)}
            autoComplete="off"
          />

          <label>Job Title</label>
          <input
            type="text"
            value={entry.role}
            onChange={(e) => updateEntry(index, "role", e.target.value)}
            autoComplete="off"
          />

          <div className="entry-row">
            <div>
              <label>Start Date</label>
              <input
                type="text"
                value={entry.startDate}
                onChange={(e) =>
                  updateEntry(index, "startDate", e.target.value)
                }
                placeholder="Jan 2021"
                autoComplete="off"
              />
            </div>
            <div>
              <label>End Date</label>
              <input
                type="text"
                value={entry.endDate}
                onChange={(e) => updateEntry(index, "endDate", e.target.value)}
                placeholder="Present"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="ai-summary-header">
            <label>Description</label>
            <button
              type="button"
              className="ai-generate-btn"
              onClick={() => handleImprove(index)}
              disabled={improvingIndex === index}
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i>{" "}
              {improvingIndex === index ? "Improving..." : "Improve with AI"}
            </button>
          </div>
          <textarea
            rows="3"
            value={entry.description}
            onChange={(e) => updateEntry(index, "description", e.target.value)}
            placeholder="Key responsibilities and achievements"
          ></textarea>
        </div>
      ))}

      <button type="button" className="add-entry-btn" onClick={addEntry}>
        <i className="fa-solid fa-plus"></i> Add Another Experience
      </button>
    </div>
  );
}

export default ExperienceStep;
