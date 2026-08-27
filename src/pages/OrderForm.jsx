import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import PersonalInfoStep from "../components/order-steps/PersonalInfoStep.jsx";
import ContactInfoStep from "../components/order-steps/ContactInfoStep.jsx";
import EducationStep from "../components/order-steps/EducationStep.jsx";
import ExperienceStep from "../components/order-steps/ExperienceStep.jsx";
import SkillsStep from "../components/order-steps/SkillsStep.jsx";
import LanguagesStep from "../components/order-steps/LanguagesStep.jsx";
import ProjectsStep from "../components/order-steps/ProjectsStep.jsx";
import CertificatesStep from "../components/order-steps/CertificatesStep.jsx";
import AwardsStep from "../components/order-steps/AwardsStep.jsx";
import ReferencesStep from "../components/order-steps/ReferencesStep.jsx";
import InterestsStep from "../components/order-steps/InterestsStep.jsx";
import SocialLinksStep from "../components/order-steps/SocialLinksStep.jsx";
import ImageUploadStep from "../components/order-steps/ImageUploadStep.jsx";
import PreviewStep from "../components/order-steps/PreviewStep.jsx";
import { createOrder, getMyOrders, updateOrderDraft } from "../api/orderApi.js";
import services from "../data/services.js";
import "./OrderForm.css";

const steps = [
  "Personal Information",
  "Contact Information",
  "Education",
  "Work Experience",
  "Skills",
  "Languages",
  "Projects",
  "Certificates",
  "Awards",
  "References",
  "Interests",
  "Social Links",
  "Profile Photo",
  "Preview",
];

const DRAFT_KEY = "orderFormDraft";

const defaultFormData = {
  fullName: "",
  dob: "",
  nationality: "",
  targetJob: "",
  summary: "",
  coverLetter: "",
  email: "",
  phone: "",
  address: "",
  linkedin: "",
  education: [
    { institution: "", qualification: "", startYear: "", endYear: "" },
  ],
  experience: [
    { company: "", role: "", startDate: "", endDate: "", description: "" },
  ],
  skills: [],
  languages: [{ name: "", level: "Conversational" }],
  projects: [{ title: "", description: "", link: "" }],
  certificates: [{ name: "", issuer: "", year: "" }],
  awards: [{ title: "", issuer: "", year: "" }],
  references: [{ name: "", relationship: "", contact: "" }],
  interests: [],
  socialLinks: { portfolio: "", github: "", twitter: "" },
  photoFile: null,
  photoPreview: "",
};

function OrderForm() {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("service");
  const selectedService = services.find((s) => s.id === serviceId);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(defaultFormData);
  const [draftSaved, setDraftSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [currentOrderId, setCurrentOrderId] = useState(null);

  useEffect(() => {
    async function loadExistingDraft() {
      if (!selectedService) return;

      try {
        const result = await getMyOrders();
        const existingDraft = result.orders.find(
          (order) =>
            order.service === selectedService.name &&
            order.status === "Pending",
        );

        if (existingDraft) {
          setCurrentOrderId(existingDraft._id);
          setFormData({
            ...defaultFormData,
            ...existingDraft.formData,
            photoFile: null,
          });
        } else {
          setFormData(defaultFormData);
        }
        return;
      } catch (error) {
        // Backend fetch failed (e.g. network issue) — fall back to local draft only in this case
        const saved = localStorage.getItem(DRAFT_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setFormData({ ...defaultFormData, ...parsed, photoFile: null });
        }
      }
    }

    loadExistingDraft();
  }, [selectedService]);

  const goNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const saveDraft = async () => {
    if (!selectedService) {
      setSaveError(
        "No valid service selected. Please go back and choose a service.",
      );
      return;
    }

    setSaveError("");
    setIsSaving(true);

    const { photoFile, photoPreview, ...formDataForApi } = formData;

    try {
      if (currentOrderId) {
        await updateOrderDraft(currentOrderId, { formData: formDataForApi });
      } else {
        const result = await createOrder({
          serviceId: selectedService.id,
          formData: formDataForApi,
        });
        setCurrentOrderId(result.order._id);
      }
      const { photoFile: _pf, ...draftData } = formData;
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({ ...draftData, serviceId: selectedService.id }),
      );

      setDraftSaved(true);
      setTimeout(() => setDraftSaved(false), 2000);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.msg ||
        "Could not save your draft. Please try again.";
      setSaveError(message);
    } finally {
      setIsSaving(false);
    }
  };

  if (!selectedService) {
    return (
      <div className="order-form-page">
        <div className="container order-form-container">
          <div className="order-form-card card no-service-card">
            <h2>No Service Selected</h2>
            <p>
              Please choose a service from our Services section to start your
              order.
            </p>
            <Link to="/#services" className="btn-primary">
              View Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-form-page">
      <div className="container order-form-container">
        <div className="selected-service-banner card">
          <div>
            <span className="selected-service-label">Ordering</span>
            <h2>{selectedService.name}</h2>
          </div>
          <div className="selected-service-meta">
            <span>
              <i className="fa-regular fa-clock"></i> {selectedService.delivery}
            </span>
            <span className="selected-service-price">
              {selectedService.price}
            </span>
          </div>
        </div>

        <div className="order-progress">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`order-progress-step ${
                index === currentStep ? "active" : ""
              } ${index < currentStep ? "done" : ""}`}
            >
              <span className="order-progress-dot">{index + 1}</span>
              <span className="order-progress-label">{step}</span>
            </div>
          ))}
        </div>

        {saveError && <p className="api-error order-form-error">{saveError}</p>}

        <div className="order-form-card card">
          {currentStep === 0 && (
            <PersonalInfoStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 1 && (
            <ContactInfoStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 2 && (
            <EducationStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 3 && (
            <ExperienceStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 4 && (
            <SkillsStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 5 && (
            <LanguagesStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 6 && (
            <ProjectsStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 7 && (
            <CertificatesStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 8 && (
            <AwardsStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 9 && (
            <ReferencesStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 10 && (
            <InterestsStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 11 && (
            <SocialLinksStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 12 && (
            <ImageUploadStep data={formData} onChange={setFormData} />
          )}
          {currentStep === 13 && <PreviewStep data={formData} />}

          <div className="order-form-actions">
            <div className="order-form-actions-left">
              {currentStep > 0 && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={goBack}
                >
                  Back
                </button>
              )}
            </div>

            <div className="order-form-actions-right">
              <button
                type="button"
                className="draft-save-btn"
                onClick={saveDraft}
                disabled={isSaving}
              >
                <i className="fa-solid fa-floppy-disk"></i>{" "}
                {isSaving ? "Saving..." : draftSaved ? "Saved!" : "Save Draft"}
              </button>

              {currentStep === steps.length - 1 && (
                <>
                  <Link
                    to="/template-preview"
                    className="btn-primary view-template-btn"
                  >
                    <i className="fa-solid fa-eye"></i> View CV Templates
                  </Link>
                  <Link
                    to="/cover-letter"
                    className="btn-secondary view-template-btn"
                  >
                    <i className="fa-solid fa-envelope-open-text"></i> Generate
                    Cover Letter
                  </Link>
                </>
              )}

              <button
                type="button"
                className="btn-primary"
                onClick={goNext}
                disabled={currentStep === steps.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
