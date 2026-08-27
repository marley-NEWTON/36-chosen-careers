import { useState } from "react";
import { generateSummary } from "../../api/aiApi.js";

function PersonalInfoStep({ data, onChange }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiError, setAiError] = useState("");

  const handleChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  const handleGenerateSummary = async () => {
    if (!data.targetJob) {
      setAiError("Please enter a Target Job Title first.");
      return;
    }

    setAiError("");
    setIsGenerating(true);
    try {
      const result = await generateSummary({
        targetJob: data.targetJob,
        skills: data.skills,
        experience: data.experience,
      });
      onChange({ ...data, summary: result.summary });
    } catch (error) {
      setAiError("Could not generate summary. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="order-step">
      <h2>Personal Information</h2>
      <p className="order-step-subtitle">Tell us a bit about yourself</p>

      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={data.fullName}
        onChange={handleChange}
        autoComplete="off"
        required
      />

      <label htmlFor="dob">Date of Birth</label>
      <input
        type="date"
        id="dob"
        name="dob"
        value={data.dob}
        onChange={handleChange}
        autoComplete="off"
      />

      <label htmlFor="nationality">Nationality</label>
      <input
        type="text"
        id="nationality"
        name="nationality"
        value={data.nationality}
        onChange={handleChange}
        autoComplete="off"
      />

      <label htmlFor="targetJob">Target Job Title</label>
      <input
        type="text"
        id="targetJob"
        name="targetJob"
        value={data.targetJob}
        onChange={handleChange}
        placeholder="e.g. Marketing Manager"
        autoComplete="off"
        required
      />

      <div className="ai-summary-header">
        <label htmlFor="summary">Professional Summary</label>
        <button
          type="button"
          className="ai-generate-btn"
          onClick={handleGenerateSummary}
          disabled={isGenerating}
        >
          <i className="fa-solid fa-wand-magic-sparkles"></i>{" "}
          {isGenerating ? "Generating..." : "Generate with AI"}
        </button>
      </div>
      <textarea
        id="summary"
        name="summary"
        rows="4"
        value={data.summary || ""}
        onChange={handleChange}
        placeholder="A short professional summary highlighting your strengths and career goals"
      ></textarea>
      {aiError && <span className="field-error">{aiError}</span>}
    </div>
  );
}

export default PersonalInfoStep;
