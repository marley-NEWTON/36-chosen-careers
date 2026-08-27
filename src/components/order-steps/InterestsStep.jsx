import { useState } from "react";

function InterestsStep({ data, onChange }) {
  const [inputValue, setInputValue] = useState("");
  const interests = data.interests;

  const addInterest = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    if (interests.includes(trimmed)) {
      setInputValue("");
      return;
    }
    onChange({ ...data, interests: [...interests, trimmed] });
    setInputValue("");
  };

  const removeInterest = (interest) => {
    onChange({ ...data, interests: interests.filter((i) => i !== interest) });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addInterest();
    }
  };

  return (
    <div className="order-step">
      <h2>Interests</h2>
      <p className="order-step-subtitle">
        Add hobbies or interests you'd like on your CV (optional)
      </p>

      <label htmlFor="interestInput">Interest</label>
      <div className="skill-input-row">
        <input
          type="text"
          id="interestInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. Photography"
        />
        <button type="button" className="skill-add-btn" onClick={addInterest}>
          Add
        </button>
      </div>

      <div className="skill-tags">
        {interests.length === 0 && (
          <p className="skill-empty">No interests added yet.</p>
        )}
        {interests.map((interest) => (
          <span className="skill-tag" key={interest}>
            {interest}
            <button
              type="button"
              onClick={() => removeInterest(interest)}
              aria-label={`Remove ${interest}`}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default InterestsStep;
