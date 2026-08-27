import { useState } from "react";
import { Link } from "react-router-dom";
import {
  validateFullName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../utils/validators.js";
import { getPasswordStrength } from "../utils/passwordStrength.js";
import { registerUser } from "../api/authApi.js";
import { useAuth } from "../context/AuthContext.jsx";
import "./Register.css";

function Register() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registeredSuccess, setRegisteredSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const strength = getPasswordStrength(formData.password);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword(
        formData.password,
        formData.confirmPassword,
      ),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await registerUser({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      login(result.user, result.token);
      setRegisteredSuccess(true);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.msg ||
        "Registration failed. Please try again.";
      setApiError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (registeredSuccess) {
    return (
      <div className="register-page register-success">
        <i className="fa-solid fa-circle-check register-success-icon"></i>
        <h1 className="register-title">Account Created!</h1>
        <p className="register-subtitle">
          Welcome to 36 Chosen Careers. What would you like to do next?
        </p>
        <div className="register-success-actions">
          <Link to="/" className="btn-secondary">
            Go to Homepage
          </Link>
          <Link to="/dashboard" className="btn-primary">
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="register-page">
      <h1 className="register-title">Create Your Account</h1>
      <p className="register-subtitle">
        Sign up to order and manage your CV services
      </p>

      {apiError && <p className="api-error">{apiError}</p>}

      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={errors.fullName ? "input-error" : ""}
        />
        {errors.fullName && (
          <span className="field-error">{errors.fullName}</span>
        )}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="field-error">{errors.email}</span>}

        <label htmlFor="password">Password</label>
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <i
              className={
                showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
              }
            ></i>
          </button>
        </div>

        {formData.password && (
          <div className="strength-meter">
            <div className={`strength-bar strength-${strength.score}`}></div>
            <span className={`strength-label strength-label-${strength.score}`}>
              {strength.label}
            </span>
          </div>
        )}

        {errors.password && (
          <span className="field-error">{errors.password}</span>
        )}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? "input-error" : ""}
        />
        {errors.confirmPassword && (
          <span className="field-error">{errors.confirmPassword}</span>
        )}

        <button
          type="submit"
          className="btn-primary register-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <p className="register-footer">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

export default Register;
