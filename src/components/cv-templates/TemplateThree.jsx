import "./TemplateThree.css";

function TemplateThree({ data }) {
  return (
    <div className="cv-template template-three">
      <header className="t3-header">
        {data.photoPreview && (
          <img
            src={data.photoPreview}
            alt={data.fullName}
            className="t3-photo"
          />
        )}
        <div>
          <h1>{data.fullName || "Your Name"}</h1>
          <p className="t3-target">{data.targetJob || "Target Job Title"}</p>
        </div>
      </header>

      <div className="t3-contact-bar">
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
        <div className="t3-contact-bar t3-links-bar">
          {data.linkedin && (
            <span>
              <i className="fa-brands fa-linkedin"></i> {data.linkedin}
            </span>
          )}
          {data.socialLinks?.portfolio && (
            <span>
              <i className="fa-solid fa-globe"></i> {data.socialLinks.portfolio}
            </span>
          )}
          {data.socialLinks?.github && (
            <span>
              <i className="fa-brands fa-github"></i> {data.socialLinks.github}
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

      <div className="t3-body">
        {data.summary && (
          <section className="t3-section t3-summary">
            <h2>
              <i className="fa-solid fa-user"></i> Professional Summary
            </h2>
            <p>{data.summary}</p>
          </section>
        )}

        {data.experience?.some((e) => e.company) && (
          <section className="t3-section">
            <h2>
              <i className="fa-solid fa-briefcase"></i> Work Experience
            </h2>
            {data.experience.map((entry, i) => (
              <div key={i} className="t3-entry">
                <div className="t3-entry-row">
                  <strong>{entry.role}</strong>
                  <span>
                    {entry.startDate} – {entry.endDate}
                  </span>
                </div>
                <p className="t3-company">{entry.company}</p>
                {entry.description && <p>{entry.description}</p>}
              </div>
            ))}
          </section>
        )}

        {data.education?.some((e) => e.institution) && (
          <section className="t3-section">
            <h2>
              <i className="fa-solid fa-graduation-cap"></i> Education
            </h2>
            {data.education.map((entry, i) => (
              <div key={i} className="t3-entry">
                <div className="t3-entry-row">
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
          <section className="t3-section">
            <h2>
              <i className="fa-solid fa-diagram-project"></i> Projects
            </h2>
            {data.projects.map((entry, i) => (
              <div key={i} className="t3-entry">
                <strong>{entry.title}</strong>
                {entry.description && <p>{entry.description}</p>}
                {entry.link && (
                  <p className="t3-link">
                    <i className="fa-solid fa-link"></i> {entry.link}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {data.certificates?.some((c) => c.name) && (
          <section className="t3-section">
            <h2>
              <i className="fa-solid fa-certificate"></i> Certificates
            </h2>
            {data.certificates.map((entry, i) => (
              <div key={i} className="t3-entry">
                <div className="t3-entry-row">
                  <strong>{entry.name}</strong>
                  <span>{entry.year}</span>
                </div>
                {entry.issuer && <p>{entry.issuer}</p>}
              </div>
            ))}
          </section>
        )}

        {data.awards?.some((a) => a.title) && (
          <section className="t3-section">
            <h2>
              <i className="fa-solid fa-trophy"></i> Awards
            </h2>
            {data.awards.map((entry, i) => (
              <div key={i} className="t3-entry">
                <div className="t3-entry-row">
                  <strong>{entry.title}</strong>
                  <span>{entry.year}</span>
                </div>
                {entry.issuer && <p>{entry.issuer}</p>}
              </div>
            ))}
          </section>
        )}

        <div className="t3-two-col">
          {data.skills?.length > 0 && (
            <section className="t3-section">
              <h2>
                <i className="fa-solid fa-star"></i> Skills
              </h2>
              <div className="t3-tags">
                {data.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </section>
          )}

          {data.languages?.some((l) => l.name) && (
            <section className="t3-section">
              <h2>
                <i className="fa-solid fa-language"></i> Languages
              </h2>
              {data.languages.map((l, i) => (
                <p key={i}>
                  {l.name} — {l.level}
                </p>
              ))}
            </section>
          )}
        </div>

        {data.interests?.length > 0 && (
          <section className="t3-section">
            <h2>
              <i className="fa-solid fa-heart"></i> Interests
            </h2>
            <div className="t3-tags">
              {data.interests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
          </section>
        )}

        {data.references?.some((r) => r.name) && (
          <section className="t3-section">
            <h2>
              <i className="fa-solid fa-address-book"></i> References
            </h2>
            {data.references.map((entry, i) => (
              <div key={i} className="t3-entry">
                <strong>{entry.name}</strong>
                {entry.relationship && <p>{entry.relationship}</p>}
                {entry.contact && <p>{entry.contact}</p>}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default TemplateThree;
