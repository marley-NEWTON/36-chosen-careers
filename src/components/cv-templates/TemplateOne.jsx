import "./TemplateOne.css";

function TemplateOne({ data }) {
  return (
    <div className="cv-template template-one">
      <header className="t1-header">
        {data.photoPreview && (
          <img
            src={data.photoPreview}
            alt={data.fullName}
            className="t1-photo"
          />
        )}
        <div>
          <h1>{data.fullName || "Your Name"}</h1>
          <p className="t1-target">{data.targetJob || "Target Job Title"}</p>
          <div className="t1-contact">
            {data.email && (
              <span>
                <i className="fa-solid fa-envelope"></i> {data.email}
              </span>
            )}
            {data.phone && (
              <span>
                <i className="fa-solid fa-phone"></i> {data.phone}
              </span>
            )}
            {data.address && (
              <span>
                <i className="fa-solid fa-location-dot"></i> {data.address}
              </span>
            )}
            {data.dob && (
              <span>
                <i className="fa-solid fa-cake-candles"></i> {data.dob}
              </span>
            )}
            {data.nationality && (
              <span>
                <i className="fa-solid fa-flag"></i> {data.nationality}
              </span>
            )}
          </div>
          {(data.linkedin ||
            data.socialLinks?.portfolio ||
            data.socialLinks?.github ||
            data.socialLinks?.twitter) && (
            <div className="t1-contact t1-links">
              {data.linkedin && (
                <span>
                  <i className="fa-brands fa-linkedin"></i> {data.linkedin}
                </span>
              )}
              {data.socialLinks?.portfolio && (
                <span>
                  <i className="fa-solid fa-globe"></i>{" "}
                  {data.socialLinks.portfolio}
                </span>
              )}
              {data.socialLinks?.github && (
                <span>
                  <i className="fa-brands fa-github"></i>{" "}
                  {data.socialLinks.github}
                </span>
              )}
              {data.socialLinks?.twitter && (
                <span>
                  <i className="fa-brands fa-x-twitter"></i>{" "}
                  {data.socialLinks.twitter}
                </span>
              )}
            </div>
          )}
        </div>
      </header>

      {data.summary && (
        <section className="t1-section t1-summary">
          <h2>Professional Summary</h2>
          <p>{data.summary}</p>
        </section>
      )}

      {data.education?.some((e) => e.institution) && (
        <section className="t1-section">
          <h2>Education</h2>
          {data.education.map((entry, i) => (
            <div key={i} className="t1-entry">
              <div className="t1-entry-row">
                <strong>{entry.qualification}</strong>
                <span>
                  {entry.startYear} – {entry.endYear}
                </span>
              </div>
              <p>{entry.institution}</p>
            </div>
          ))}
        </section>
      )}

      {data.experience?.some((e) => e.company) && (
        <section className="t1-section">
          <h2>Work Experience</h2>
          {data.experience.map((entry, i) => (
            <div key={i} className="t1-entry">
              <div className="t1-entry-row">
                <strong>{entry.role}</strong>
                <span>
                  {entry.startDate} – {entry.endDate}
                </span>
              </div>
              <p className="t1-company">{entry.company}</p>
              {entry.description && <p>{entry.description}</p>}
            </div>
          ))}
        </section>
      )}

      {data.projects?.some((p) => p.title) && (
        <section className="t1-section">
          <h2>Projects</h2>
          {data.projects.map((entry, i) => (
            <div key={i} className="t1-entry">
              <strong>{entry.title}</strong>
              {entry.description && <p>{entry.description}</p>}
              {entry.link && (
                <p className="t1-link">
                  <i className="fa-solid fa-link"></i> {entry.link}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {data.skills?.length > 0 && (
        <section className="t1-section">
          <h2>Skills</h2>
          <p>{data.skills.join(" · ")}</p>
        </section>
      )}

      {data.languages?.some((l) => l.name) && (
        <section className="t1-section">
          <h2>Languages</h2>
          <p>
            {data.languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
          </p>
        </section>
      )}

      {data.certificates?.some((c) => c.name) && (
        <section className="t1-section">
          <h2>Certificates</h2>
          {data.certificates.map((entry, i) => (
            <div key={i} className="t1-entry">
              <div className="t1-entry-row">
                <strong>{entry.name}</strong>
                <span>{entry.year}</span>
              </div>
              {entry.issuer && <p>{entry.issuer}</p>}
            </div>
          ))}
        </section>
      )}

      {data.awards?.some((a) => a.title) && (
        <section className="t1-section">
          <h2>Awards</h2>
          {data.awards.map((entry, i) => (
            <div key={i} className="t1-entry">
              <div className="t1-entry-row">
                <strong>{entry.title}</strong>
                <span>{entry.year}</span>
              </div>
              {entry.issuer && <p>{entry.issuer}</p>}
            </div>
          ))}
        </section>
      )}

      {data.interests?.length > 0 && (
        <section className="t1-section">
          <h2>Interests</h2>
          <p>{data.interests.join(" · ")}</p>
        </section>
      )}

      {data.references?.some((r) => r.name) && (
        <section className="t1-section">
          <h2>References</h2>
          {data.references.map((entry, i) => (
            <div key={i} className="t1-entry">
              <strong>{entry.name}</strong>
              {entry.relationship && <p>{entry.relationship}</p>}
              {entry.contact && <p>{entry.contact}</p>}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default TemplateOne;
