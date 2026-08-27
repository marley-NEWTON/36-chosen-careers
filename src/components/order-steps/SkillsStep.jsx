import { useState } from "react";
import { suggestSkills } from "../../api/aiApi.js";

function SkillsStep({ data, onChange }) {
  const [inputValue, setInputValue] = useState("");
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [aiError, setAiError] = useState("");
  const skills = data.skills;

  const addSkill = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    if (skills.includes(trimmed)) {
      setInputValue("");
      return;
    }
    onChange({ ...data, skills: [...skills, trimmed] });
    setInputValue("");
  };

  const removeSkill = (skill) => {
    onChange({ ...data, skills: skills.filter((s) => s !== skill) });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleSuggestSkills = async () => {
    if (!data.targetJob) {
      setAiError("Please enter a Target Job Title on the first step.");
      return;
    }

    setAiError("");
    setIsSuggesting(true);
    try {
      const result = await suggestSkills({
        targetJob: data.targetJob,
        existingSkills: skills,
      });

      const newSkills = result.skills.filter((s) => !skills.includes(s));
      onChange({ ...data, skills: [...skills, ...newSkills] });
    } catch (error) {
      setAiError("Could not suggest skills. Please try again.");
    } finally {
      setIsSuggesting(false);
    }
  };

  return (
    <div className="order-step">
      <div className="ai-summary-header">
        <h2>Skills</h2>
        <button
          type="button"
          className="ai-generate-btn"
          onClick={handleSuggestSkills}
          disabled={isSuggesting}
        >
          <i className="fa-solid fa-wand-magic-sparkles"></i>{" "}
          {isSuggesting ? "Suggesting..." : "Suggest Skills with AI"}
        </button>
      </div>
      <p className="order-step-subtitle">
        Add your key skills — press Enter after each one
      </p>
      {aiError && <span className="field-error">{aiError}</span>}

      <label htmlFor="skillInput">Skill</label>
      <div className="skill-input-row">
        <input
          type="text"
          id="skillInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. Project Management"
          autoComplete="off"
        />
        <button type="button" className="skill-add-btn" onClick={addSkill}>
          Add
        </button>
      </div>

      <div className="skill-tags">
        {skills.length === 0 && (
          <p className="skill-empty">No skills added yet.</p>
        )}
        {skills.map((skill) => (
          <span className="skill-tag" key={skill}>
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(skill)}
              aria-label={`Remove ${skill}`}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsStep;
