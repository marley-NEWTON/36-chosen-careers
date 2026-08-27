import { useState, useEffect } from "react";
import { getMe, updateMe } from "../api/authApi.js";
import "./Profile.css";

function Profile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const result = await getMe();
        setFormData({
          fullName: result.user.fullName || "",
          email: result.user.email || "",
          phone: "",
        });
      } catch (error) {
        setApiError("Could not load your profile. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setSuccessMessage("");
    setIsSaving(true);

    try {
      const result = await updateMe({
        fullName: formData.fullName,
        email: formData.email,
      });

      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...storedUser, ...result.user }),
      );

      setSuccessMessage("Profile updated successfully.");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.msg ||
        "Could not update profile. Please try again.";
      setApiError(message);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <p style={{ padding: "2rem" }}>Loading profile...</p>;
  }

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <p className="profile-subtitle">Manage your personal information</p>

      {apiError && <p className="api-error">{apiError}</p>}
      {successMessage && <p className="api-success">{successMessage}</p>}

      <form className="profile-form card" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="btn-primary profile-submit"
          disabled={isSaving}
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}

export default Profile;
