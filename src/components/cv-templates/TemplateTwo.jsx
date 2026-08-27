import "./TemplateTwo.css";

function TemplateTwo({ data }) {
  return (
    <div className="cv-template template-two">
      <aside className="t2-sidebar">
        {data.photoPreview && (
          <img
            src={data.photoPreview}
            alt={data.fullName}
            className="t2-photo"
          />
        )}
        <h1>{data.fullName || "Your Name"}</h1>
        <p className="t2-target">{data.targetJob || "Target Job Title"}</p>

        <div className="t2-block">
          <h2>Contact</h2>
          {data.email && (
            <p>
              <i className="fa-solid fa-envelope"></i> {data.email}
            </p>
          )}
          {data.phone && (
            <p>
              <i className="fa-solid fa-phone"></i> {data.phone}
            </p>
          )}
          {data.address && (
            <p>
              <i className="fa-solid fa-location-dot"></i> {data.address}
            </p>
          )}
          {data.dob && (
            <p>
              <i className="fa-solid fa-cake-candles"></i> {data.dob}
            </p>
          )}
          {data.nationality && (
            <p>
              <i className="fa-solid fa-flag"></i> {data.nationality}
            </p>
          )}
        </div>

        {(data.linkedin ||
          data.socialLinks?.portfolio ||
          data.socialLinks?.github ||
          data.socialLinks?.twitter) && (
          <div className="t2-block">
            <h2>Links</h2>
            {data.linkedin && (
              <p>
                <i className="fa-brands fa-linkedin"></i> {data.linkedin}
              </p>
            )}
            {data.socialLinks?.portfolio && (
              <p>
                <i className="fa-solid fa-globe"></i>{" "}
                {data.socialLinks.portfolio}
              </p>
            )}
            {data.socialLinks?.github && (
              <p>
                <i className="fa-brands fa-github"></i>{" "}
                {data.socialLinks.github}
              </p>
            )}
            {data.socialLinks?.twitter && (
              <p>
                <i className="fa-brands fa-x-twitter"></i>{" "}
                {data.socialLinks.twitter}
              </p>
            )}
          </div>
        )}

        {data.skills?.length > 0 && (
          <div className="t2-block">
            <h2>Skills</h2>
            <div className="t2-tags">
              {data.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        )}

        {data.languages?.some((l) => l.name) && (
          <div className="t2-block">
            <h2>Languages</h2>
            {data.languages.map((l, i) => (
              <p key={i}>
                {l.name} — {l.level}
              </p>
            ))}
          </div>
        )}

        {data.interests?.length > 0 && (
          <div className="t2-block">
            <h2>Interests</h2>
            <div className="t2-tags">
              {data.interests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
          </div>
        )}
      </aside>

      <main className="t2-main">
        {data.summary && (
          <section className="t2-section t2-summary">
            <h2>Professional Summary</h2>
            <p>{data.summary}</p>
          </section>
        )}

        {data.experience?.some((e) => e.company) && (
          <section className="t2-section">
            <h2>Work Experience</h2>
            {data.experience.map((entry, i) => (
              <div key={i} className="t2-entry">
                <div className="t2-entry-row">
                  <strong>{entry.role}</strong>
                  <span>
                    {entry.startDate} – {entry.endDate}
                  </span>
                </div>
                <p className="t2-company">{entry.company}</p>
                {entry.description && <p>{entry.description}</p>}
              </div>
            ))}
          </section>
        )}

        {data.education?.some((e) => e.institution) && (
          <section className="t2-section">
            <h2>Education</h2>
            {data.education.map((entry, i) => (
              <div key={i} className="t2-entry">
                <div className="t2-entry-row">
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

        {data.projects?.some((p) => p.title) && (
          <section className="t2-section">
            <h2>Projects</h2>
            {data.projects.map((entry, i) => (
              <div key={i} className="t2-entry">
                <strong>{entry.title}</strong>
                {entry.description && <p>{entry.description}</p>}
                {entry.link && (
                  <p className="t2-link">
                    <i className="fa-solid fa-link"></i> {entry.link}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {data.certificates?.some((c) => c.name) && (
          <section className="t2-section">
            <h2>Certificates</h2>
            {data.certificates.map((entry, i) => (
              <div key={i} className="t2-entry">
                <div className="t2-entry-row">
                  <strong>{entry.name}</strong>
                  <span>{entry.year}</span>
                </div>
                {entry.issuer && <p>{entry.issuer}</p>}
              </div>
            ))}
          </section>
        )}

        {data.awards?.some((a) => a.title) && (
          <section className="t2-section">
            <h2>Awards</h2>
            {data.awards.map((entry, i) => (
              <div key={i} className="t2-entry">
                <div className="t2-entry-row">
                  <strong>{entry.title}</strong>
                  <span>{entry.year}</span>
                </div>
                {entry.issuer && <p>{entry.issuer}</p>}
              </div>
            ))}
          </section>
        )}

        {data.references?.some((r) => r.name) && (
          <section className="t2-section">
            <h2>References</h2>
            {data.references.map((entry, i) => (
              <div key={i} className="t2-entry">
                <strong>{entry.name}</strong>
                {entry.relationship && <p>{entry.relationship}</p>}
                {entry.contact && <p>{entry.contact}</p>}
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default TemplateTwo;
