import "./TemplateFour.css";

function TemplateFour({ data }) {
  return (
    <div className="cv-template template-four">
      <header className="t4-header">
        {data.photoPreview && (
          <img
            src={data.photoPreview}
            alt={data.fullName}
            className="t4-photo"
          />
        )}
        <h1>{data.fullName || "Your Name"}</h1>
        <p className="t4-target">{data.targetJob || "Target Job Title"}</p>
        <div className="t4-contact">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.address && <span>{data.address}</span>}
          {data.dob && <span>{data.dob}</span>}
          {data.nationality && <span>{data.nationality}</span>}
        </div>
        {(data.linkedin ||
          data.socialLinks?.portfolio ||
          data.socialLinks?.github ||
          data.socialLinks?.twitter) && (
          <div className="t4-contact t4-links">
            {data.linkedin && <span>{data.linkedin}</span>}
            {data.socialLinks?.portfolio && (
              <span>{data.socialLinks.portfolio}</span>
            )}
            {data.socialLinks?.github && <span>{data.socialLinks.github}</span>}
            {data.socialLinks?.twitter && (
              <span>{data.socialLinks.twitter}</span>
            )}
          </div>
        )}
      </header>

      <hr className="t4-divider" />
      {data.summary && (
        <section className="t4-section t4-summary">
          <p>{data.summary}</p>
        </section>
      )}

      {data.experience?.some((e) => e.company) && (
        <section className="t4-section">
          <h2>Experience</h2>
          {data.experience.map((entry, i) => (
            <div key={i} className="t4-entry">
              <div className="t4-entry-row">
                <span className="t4-entry-title">
                  {entry.role}, {entry.company}
                </span>
                <span className="t4-entry-date">
                  {entry.startDate} – {entry.endDate}
                </span>
              </div>
              {entry.description && <p>{entry.description}</p>}
            </div>
          ))}
        </section>
      )}

      {data.education?.some((e) => e.institution) && (
        <section className="t4-section">
          <h2>Education</h2>
          {data.education.map((entry, i) => (
            <div key={i} className="t4-entry">
              <div className="t4-entry-row">
                <span className="t4-entry-title">
                  {entry.qualification}, {entry.institution}
                </span>
                <span className="t4-entry-date">
                  {entry.startYear} – {entry.endYear}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}

      {data.projects?.some((p) => p.title) && (
        <section className="t4-section">
          <h2>Projects</h2>
          {data.projects.map((entry, i) => (
            <div key={i} className="t4-entry">
              <span className="t4-entry-title">{entry.title}</span>
              {entry.description && <p>{entry.description}</p>}
              {entry.link && <p className="t4-plain-list">{entry.link}</p>}
            </div>
          ))}
        </section>
      )}

      {data.certificates?.some((c) => c.name) && (
        <section className="t4-section">
          <h2>Certificates</h2>
          {data.certificates.map((entry, i) => (
            <div key={i} className="t4-entry">
              <div className="t4-entry-row">
                <span className="t4-entry-title">
                  {entry.name}
                  {entry.issuer ? `, ${entry.issuer}` : ""}
                </span>
                <span className="t4-entry-date">{entry.year}</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {data.awards?.some((a) => a.title) && (
        <section className="t4-section">
          <h2>Awards</h2>
          {data.awards.map((entry, i) => (
            <div key={i} className="t4-entry">
              <div className="t4-entry-row">
                <span className="t4-entry-title">
                  {entry.title}
                  {entry.issuer ? `, ${entry.issuer}` : ""}
                </span>
                <span className="t4-entry-date">{entry.year}</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {data.skills?.length > 0 && (
        <section className="t4-section">
          <h2>Skills</h2>
          <p className="t4-plain-list">{data.skills.join(", ")}</p>
        </section>
      )}

      {data.languages?.some((l) => l.name) && (
        <section className="t4-section">
          <h2>Languages</h2>
          <p className="t4-plain-list">
            {data.languages.map((l) => `${l.name} (${l.level})`).join(", ")}
          </p>
        </section>
      )}

      {data.interests?.length > 0 && (
        <section className="t4-section">
          <h2>Interests</h2>
          <p className="t4-plain-list">{data.interests.join(", ")}</p>
        </section>
      )}

      {data.references?.some((r) => r.name) && (
        <section className="t4-section">
          <h2>References</h2>
          {data.references.map((entry, i) => (
            <div key={i} className="t4-entry">
              <span className="t4-entry-title">{entry.name}</span>
              {entry.relationship && <p>{entry.relationship}</p>}
              {entry.contact && <p>{entry.contact}</p>}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default TemplateFour;
