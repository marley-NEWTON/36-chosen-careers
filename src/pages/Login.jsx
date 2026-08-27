import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validators.js";
import { loginUser } from "../api/authApi.js";
import { useAuth } from "../context/AuthContext.jsx";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
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
      const result = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      login(result.user, result.token);

      const redirectTo = location.state?.from
        ? location.state.from.pathname + location.state.from.search
        : "/dashboard";

      navigate(redirectTo, { replace: true });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.msg ||
        "Login failed. Please check your credentials.";
      setApiError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <h1 className="login-title">Welcome Back</h1>
      <p className="login-subtitle">Log in to access your CV orders</p>

      {apiError && <p className="api-error">{apiError}</p>}

      <form className="login-form" onSubmit={handleSubmit} noValidate>
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
        {errors.password && (
          <span className="field-error">{errors.password}</span>
        )}

        <Link to="/forgot-password" className="login-forgot">
          Forgot Password?
        </Link>

        <button
          type="submit"
          className="btn-primary login-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging In..." : "Log In"}
        </button>
      </form>

      <p className="login-footer">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
