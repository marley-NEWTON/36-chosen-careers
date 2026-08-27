import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/validators.js";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateEmail(email);
    setError(validationError);
    if (validationError) return;

    console.log("Password reset requested for:", email);
    setSubmitted(true);
  };

  return (
    <div className="forgot-page">
      {!submitted ? (
        <>
          <h1 className="forgot-title">Forgot Password?</h1>
          <p className="forgot-subtitle">
            Enter your email and we'll send you a link to reset your password.
          </p>

          <form className="forgot-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={error ? "input-error" : ""}
            />
            {error && <span className="field-error">{error}</span>}

            <button type="submit" className="btn-primary forgot-submit">
              Send Reset Link
            </button>
          </form>
        </>
      ) : (
        <div className="forgot-success">
          <i className="fa-solid fa-circle-check"></i>
          <h1 className="forgot-title">Check Your Email</h1>
          <p className="forgot-subtitle">
            If an account exists for {email}, a reset link has been sent.
          </p>
        </div>
      )}

      <p className="forgot-footer">
        <Link to="/login">
          <i className="fa-solid fa-arrow-left"></i> Back to Login
        </Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
