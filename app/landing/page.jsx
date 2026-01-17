"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function UsedCarsLanding() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  // ✅ VALIDATION
  const validateForm = () => {
    if (form.name.length < 3) return "Please enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return "Please enter a valid email";
    if (!/^[0-9+ ]{7,15}$/.test(form.phone))
      return "Please enter a valid phone number";
    if (form.message.length < 5)
      return "Message should be at least 5 characters";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_41as7fk",
        "template_n9ycjp8",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "_DVTHeE3c0_9ZfOcp"
      );

         toast.success("Enquiry sent successfully! We will contact you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
         toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="used-landing">
      {/* HERO */}
   <section className="used-hero">

  {/* LOGO */}
  <img
    src="/assets/images/logo/logo5.png"
    alt="Logo"
    className="hero-logo"
  />

  {/* IMAGE */}
  <img
    src="/assets/images/landing/landing.png"
    alt="Used Car"
    className="hero-car"
  />

  {/* CONTENT BELOW IMAGE */}
  <div className="hero-content">
    <span className="hero-badge">Trusted Used Car Dealer</span>

    <h1>Buy Certified Used Cars in UAE</h1>

    <p>
      Transparent pricing • Verified cars • Instant assistance
    </p>

    <a href="#lead-form" className="used-cta">
      Get Best Deals
    </a>
  </div>

</section>


  




      {/* TRUST BAR */}
 {/* TRUST BAR */}
<section className="used-trust dark">
  <div className="trust-card">
    <span className="trust-icon">🚗</span>
    <h4>100% Verified Cars</h4>
    <p>Every vehicle is inspected and certified.</p>
  </div>

  <div className="trust-card">
    <span className="trust-icon">💰</span>
    <h4>No Hidden Charges</h4>
    <p>Transparent pricing with full clarity.</p>
  </div>

  <div className="trust-card">
    <span className="trust-icon">🏦</span>
    <h4>Finance Assistance</h4>
    <p>Easy approvals with top banks.</p>
  </div>

  <div className="trust-card">
    <span className="trust-icon">🛠️</span>
    <h4>After-Sales Support</h4>
    <p>We support you even after purchase.</p>
  </div>
</section>



      {/* FORM */}
       <section id="lead-form" className="used-form-section">
        <div className="form-card">
          <h3>Send Your Requirement</h3>

          <form onSubmit={handleSubmit} className="used-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Which car are you looking for?"
              rows="4"
              value={form.message}
              onChange={handleChange}
            />

            {error && <p className="form-error">{error}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>

          <div className="form-note">
            🔒 Your details are safe. We never share your data.
          </div>
        </div>
      </section>
    </div>
  );
}
