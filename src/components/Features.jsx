import "./Features.css";

const features = [
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "AI-Powered Content",
    description:
      "Get smart suggestions for summaries, skills, and experience descriptions.",
  },
  {
    icon: "fa-solid fa-palette",
    title: "Professional Templates",
    description: "Choose from multiple clean, recruiter-approved CV templates.",
  },
  {
    icon: "fa-solid fa-file-pdf",
    title: "Instant PDF Export",
    description:
      "Download a polished, print-ready CV or cover letter in seconds.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Secure & Private",
    description:
      "Your data is protected with industry-standard authentication.",
  },
];

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2 className="features-title">Why Choose Us</h2>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
