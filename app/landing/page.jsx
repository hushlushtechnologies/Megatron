 "use client";

import { useState } from "react";

export default function UsedCarsLanding() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}
`;

    window.open(
      `https://wa.me/971565049928?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="used-landing">
      {/* HERO */}
      <section className="used-hero">
        <div className="hero-content">
          <span className="hero-badge">Trusted Used Car Dealer</span>
          <h1>Buy Certified Used Cars in UAE</h1>
          <p>
            Transparent pricing • Verified cars • Instant assistance  
            Find the perfect car without stress.
          </p>

          <div className="hero-cta-group">
            <a href="#lead-form" className="used-cta">
              Get Best Deals
            </a>
            <span className="hero-subtext">No spam • Quick response</span>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="used-trust">
        <div>✅ 100% Verified Cars</div>
        <div>✅ No Hidden Charges</div>
        <div>✅ Finance Assistance</div>
        <div>✅ After-Sales Support</div>
      </section>

      {/* FORM */}
      <section id="lead-form" className="used-form-section">
        <div className="form-card">
          <h2>Send Your Requirement</h2>
          <p>Fill the form and our expert will contact you shortly</p>

          <form onSubmit={handleSubmit} className="used-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Which car are you looking for?"
              rows="4"
              required
              onChange={handleChange}
            />

            <button type="submit">Submit Enquiry</button>
          </form>

          <div className="form-note">
            🔒 Your details are safe. We never share your data.
          </div>
        </div>
      </section>
    </div>
  );
}
