import "./Testimonials.css";

const testimonials = [
  {
    name: "Amina Yusuf",
    role: "Marketing Graduate",
    quote:
      "The Professional CV service helped me land three interviews within a week of applying.",
    service: "Professional CV Writing",
  },
  {
    name: "David Otieno",
    role: "Operations Manager",
    quote:
      "My Executive CV made me stand out immediately. Worth every shilling.",
    service: "Executive CV Writing",
  },
  {
    name: "Grace Wanjiru",
    role: "Recent Graduate",
    quote: "Affordable, fast, and professional. My CV finally looks the part.",
    service: "Basic CV Writing",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="testimonials-title">What Our Clients Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <i className="fa-solid fa-quote-left"></i>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
                <span className="testimonial-service">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
