import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
import { generateCoverLetter } from "../api/aiApi.js";
import { getMyOrders, updateOrderDraft } from "../api/orderApi.js";
import Spinner from "../components/Spinner.jsx";
import "./CoverLetter.css";

const DRAFT_KEY = "orderFormDraft";

function CoverLetter() {
  const [data, setData] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [letter, setLetter] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const printRef = useRef(null);

  useEffect(() => {
    async function loadDraft() {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (!saved) return;

      const parsed = JSON.parse(saved);
      setData(parsed);
      setLetter(parsed.coverLetter || "");

      if (parsed.serviceId) {
        try {
          const result = await getMyOrders();
          const matchingOrder = result.orders.find(
            (order) =>
              order.formData?.fullName === parsed.fullName &&
              order.status === "Pending",
          );
          if (matchingOrder) {
            setOrderId(matchingOrder._id);
          }
        } catch (err) {
          // Letter still displays from localStorage even if this lookup fails
        }
      }
    }

    loadDraft();
  }, []);

  const persistCoverLetter = async (newLetter) => {
    const updatedData = { ...data, coverLetter: newLetter };
    setData(updatedData);

    const { photoFile, photoPreview, ...draftData } = updatedData;
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draftData));

    if (orderId) {
      try {
        const {
          photoFile: _pf,
          photoPreview: _pp,
          ...formDataForApi
        } = updatedData;
        await updateOrderDraft(orderId, { formData: formDataForApi });
      } catch (err) {
        // Local copy still holds the letter even if the backend save fails
      }
    }
  };

  const handleGenerate = async () => {
    if (!data) return;
    setError("");
    setIsGenerating(true);
    try {
      const result = await generateCoverLetter({
        fullName: data.fullName,
        targetJob: data.targetJob,
        summary: data.summary,
        skills: data.skills,
        experience: data.experience,
      });
      setLetter(result.coverLetter);
      await persistCoverLetter(result.coverLetter);
    } catch (err) {
      setError("Could not generate cover letter. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(letter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPdf = () => {
    if (!printRef.current) return;
    setIsDownloading(true);

    const fileName =
      `${data.fullName || "Cover-Letter"}-36ChosenCareers.pdf`.replace(
        /\s+/g,
        "-",
      );

    const options = {
      margin: [50, 50, 50, 50],
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"] },
    };

    html2pdf()
      .set(options)
      .from(printRef.current)
      .save()
      .then(() => setIsDownloading(false))
      .catch(() => setIsDownloading(false));
  };

  if (!data) {
    return (
      <div className="cover-letter-page">
        <p className="cover-letter-empty">
          No CV draft found. Please fill out the order form first.
        </p>
      </div>
    );
  }

  return (
    <div className="cover-letter-page">
      <div className="container cover-letter-container">
        {data.serviceId && (
          <div className="cover-letter-back-link-wrapper no-print">
            <Link
              to={`/order?service=${data.serviceId}`}
              className="cover-letter-back-link"
            >
              <i className="fa-solid fa-arrow-left"></i> Back to Order Form
            </Link>
          </div>
        )}

        <h1 className="no-print">AI Cover Letter</h1>
        <p className="cover-letter-subtitle no-print">
          Generate a cover letter based on your CV information
        </p>

        {!letter && !isGenerating && (
          <button className="btn-primary no-print" onClick={handleGenerate}>
            <i className="fa-solid fa-wand-magic-sparkles"></i> Generate Cover
            Letter
          </button>
        )}

        {isGenerating && (
          <div className="cover-letter-loading no-print">
            <Spinner size="lg" />
          </div>
        )}

        {error && <p className="api-error no-print">{error}</p>}

        {letter && !isGenerating && (
          <>
            <div
              id="cover-letter-print-area"
              ref={printRef}
              className="cover-letter-result card"
            >
              <div className="cover-letter-letterhead">
                <h2>{data.fullName}</h2>
                {data.email && <p>{data.email}</p>}
                {data.phone && <p>{data.phone}</p>}
              </div>
              <div className="cover-letter-text">
                {letter
                  .split("\n")
                  .map((paragraph, i) =>
                    paragraph.trim() ? <p key={i}>{paragraph}</p> : null,
                  )}
              </div>
            </div>

            <div className="cover-letter-actions no-print">
              <button className="btn-secondary" onClick={handleGenerate}>
                <i className="fa-solid fa-rotate-right"></i> Regenerate
              </button>
              <button className="btn-secondary" onClick={handleCopy}>
                <i className="fa-solid fa-copy"></i>{" "}
                {copied ? "Copied!" : "Copy Text"}
              </button>
              <button
                className="btn-primary"
                onClick={handleDownloadPdf}
                disabled={isDownloading}
              >
                <i className="fa-solid fa-file-arrow-down"></i>{" "}
                {isDownloading ? "Generating..." : "Download PDF"}
              </button>
            </div>

            <div className="cover-letter-next-steps no-print">
              <Link to="/template-preview" className="btn-secondary">
                <i className="fa-solid fa-eye"></i> View CV Templates
              </Link>
              <Link to="/dashboard/orders" className="btn-primary">
                <i className="fa-solid fa-gauge"></i> Go to My Orders
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CoverLetter;
