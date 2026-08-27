function ContactInfoStep({ data, onChange }) {
  const handleChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="order-step">
      <h2>Contact Information</h2>
      <p className="order-step-subtitle">
        How can we and future employers reach you?
      </p>

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        autoComplete="off"
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        autoComplete="off"
        required
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={data.address}
        onChange={handleChange}
        autoComplete="off"
      />

      <label htmlFor="linkedin">LinkedIn Profile URL (optional)</label>
      <input
        type="url"
        id="linkedin"
        name="linkedin"
        value={data.linkedin}
        onChange={handleChange}
        autoComplete="off"
        placeholder="https://linkedin.com/in/yourname"
      />
    </div>
  );
}

export default ContactInfoStep;
