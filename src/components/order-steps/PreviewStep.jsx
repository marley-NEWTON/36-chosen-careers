function PreviewStep({ data }) {
  return (
    <div className="order-step">
      <h2>Review Your Information</h2>
      <p className="order-step-subtitle">
        Confirm everything looks correct before submitting your order
      </p>

      {data.photoPreview && (
        <img src={data.photoPreview} alt="Profile" className="preview-photo" />
      )}

      <div className="preview-section">
        <h3>Personal Information</h3>
        <p>
          <strong>Name:</strong> {data.fullName || "—"}
        </p>
        <p>
          <strong>Target Job:</strong> {data.targetJob || "—"}
        </p>
        <p>
          <strong>Nationality:</strong> {data.nationality || "—"}
        </p>
      </div>

      <div className="preview-section">
        <h3>Contact Information</h3>
        <p>
          <strong>Email:</strong> {data.email || "—"}
        </p>
        <p>
          <strong>Phone:</strong> {data.phone || "—"}
        </p>
        <p>
          <strong>Address:</strong> {data.address || "—"}
        </p>
      </div>

      <div className="preview-section">
        <h3>Education</h3>
        {data.education.map((entry, i) => (
          <p key={i}>
            {entry.qualification || "—"} at {entry.institution || "—"} (
            {entry.startYear}–{entry.endYear})
          </p>
        ))}
      </div>

      <div className="preview-section">
        <h3>Work Experience</h3>
        {data.experience.map((entry, i) => (
          <p key={i}>
            {entry.role || "—"} at {entry.company || "—"} ({entry.startDate}–
            {entry.endDate})
          </p>
        ))}
      </div>

      <div className="preview-section">
        <h3>Skills</h3>
        <p>{data.skills.length ? data.skills.join(", ") : "—"}</p>
      </div>

      <div className="preview-section">
        <h3>Languages</h3>
        {data.languages.map((entry, i) => (
          <p key={i}>
            {entry.name || "—"} — {entry.level}
          </p>
        ))}
      </div>

      <div className="preview-section">
        <h3>Projects</h3>
        {data.projects.map((entry, i) => (
          <p key={i}>{entry.title || "—"}</p>
        ))}
      </div>

      <div className="preview-section">
        <h3>Certificates</h3>
        {data.certificates.map((entry, i) => (
          <p key={i}>
            {entry.name || "—"} ({entry.issuer}, {entry.year})
          </p>
        ))}
      </div>

      <div className="preview-section">
        <h3>Awards</h3>
        {data.awards.map((entry, i) => (
          <p key={i}>
            {entry.title || "—"} ({entry.issuer}, {entry.year})
          </p>
        ))}
      </div>

      <div className="preview-section">
        <h3>References</h3>
        {data.references.map((entry, i) => (
          <p key={i}>
            {entry.name || "—"} — {entry.relationship}
          </p>
        ))}
      </div>

      <div className="preview-section">
        <h3>Interests</h3>
        <p>{data.interests.length ? data.interests.join(", ") : "—"}</p>
      </div>

      <div className="preview-section">
        <h3>Social Links</h3>
        <p>
          <strong>Portfolio:</strong> {data.socialLinks.portfolio || "—"}
        </p>
        <p>
          <strong>GitHub:</strong> {data.socialLinks.github || "—"}
        </p>
        <p>
          <strong>Twitter/X:</strong> {data.socialLinks.twitter || "—"}
        </p>
      </div>
    </div>
  );
}

export default PreviewStep;
