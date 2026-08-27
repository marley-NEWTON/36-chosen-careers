function SocialLinksStep({ data, onChange }) {
  const handleChange = (e) => {
    onChange({
      ...data,
      socialLinks: { ...data.socialLinks, [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="order-step">
      <h2>Social Links</h2>
      <p className="order-step-subtitle">
        Add additional links to include on your CV (optional)
      </p>

      <label htmlFor="portfolio">Portfolio Website</label>
      <input
        type="url"
        id="portfolio"
        name="portfolio"
        value={data.socialLinks.portfolio}
        onChange={handleChange}
        placeholder="https://yourportfolio.com"
      />

      <label htmlFor="github">GitHub Profile</label>
      <input
        type="url"
        id="github"
        name="github"
        value={data.socialLinks.github}
        onChange={handleChange}
        placeholder="https://github.com/yourname"
      />

      <label htmlFor="twitter">Twitter / X Profile</label>
      <input
        type="url"
        id="twitter"
        name="twitter"
        value={data.socialLinks.twitter}
        onChange={handleChange}
        placeholder="https://x.com/yourname"
      />
    </div>
  );
}

export default SocialLinksStep;
