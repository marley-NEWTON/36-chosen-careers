import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
import TemplateSwitcher from "../components/TemplateSwitcher.jsx";
import ThemeCustomizer from "../components/ThemeCustomizer.jsx";
import FontCustomizer from "../components/FontCustomizer.jsx";
import LayoutCustomizer from "../components/LayoutCustomizer.jsx";
import CVDocumentFrame from "../components/CVDocumentFrame.jsx";
import TemplateOne from "../components/cv-templates/TemplateOne.jsx";
import TemplateTwo from "../components/cv-templates/TemplateTwo.jsx";
import TemplateThree from "../components/cv-templates/TemplateThree.jsx";
import TemplateFour from "../components/cv-templates/TemplateFour.jsx";
import "./TemplatePreview.css";

const DRAFT_KEY = "orderFormDraft";

function TemplatePreview() {
  const [data, setData] = useState(null);
  const [activeTemplate, setActiveTemplate] = useState("one");
  const [accentColor, setAccentColor] = useState("#2563eb");
  const [fontFamily, setFontFamily] = useState("'Manrope', sans-serif");
  const [density, setDensity] = useState("comfortable");
  const [isDownloading, setIsDownloading] = useState(false);
  const printRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    if (!printRef.current) return;
    setIsDownloading(true);

    const fileName = `${data.fullName || "CV"}-36ChosenCareers.pdf`.replace(
      /\s+/g,
      "-",
    );

    const originalTransform = printRef.current.style.transform;
    printRef.current.style.transform = "none";

    const options = {
      margin: [24, 18, 24, 18],
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
      pagebreak: {
        mode: ["css", "legacy"],
        avoid: [
          ".t1-section",
          ".t1-entry",
          ".t2-section",
          ".t2-block",
          ".t2-entry",
          ".t3-section",
          ".t3-entry",
          ".t4-section",
          ".t4-entry",
        ],
      },
    };

    html2pdf()
      .set(options)
      .from(printRef.current)
      .save()
      .then(() => {
        printRef.current.style.transform = originalTransform;
        setIsDownloading(false);
      })
      .catch(() => {
        printRef.current.style.transform = originalTransform;
        setIsDownloading(false);
      });
  };

  if (!data) {
    return (
      <div className="template-preview-empty">
        <p>No draft data found. Fill out the order form first.</p>
      </div>
    );
  }

  return (
    <div className="template-preview-page">
      {data.serviceId && (
        <div className="template-preview-back-link-wrapper">
          <Link
            to={`/order?service=${data.serviceId}`}
            className="template-preview-back-link"
          >
            <i className="fa-solid fa-arrow-left"></i> Back to Order Form
          </Link>
        </div>
      )}

      <div className="template-preview-controls no-print">
        <TemplateSwitcher
          activeTemplate={activeTemplate}
          onSelect={setActiveTemplate}
        />
        <ThemeCustomizer activeColor={accentColor} onSelect={setAccentColor} />
        <FontCustomizer activeFont={fontFamily} onSelect={setFontFamily} />
        <LayoutCustomizer activeDensity={density} onSelect={setDensity} />
        <button className="print-btn" onClick={handlePrint}>
          <i className="fa-solid fa-print"></i> Print CV
        </button>
        <button
          className="print-btn pdf-btn"
          onClick={handleDownloadPdf}
          disabled={isDownloading}
        >
          <i className="fa-solid fa-file-arrow-down"></i>{" "}
          {isDownloading ? "Generating..." : "Download PDF"}
        </button>
      </div>

      <CVDocumentFrame
        printRef={printRef}
        className={`cv-density-${density}`}
        style={{ "--cv-accent": accentColor, "--cv-font": fontFamily }}
      >
        {activeTemplate === "one" && <TemplateOne data={data} />}
        {activeTemplate === "two" && <TemplateTwo data={data} />}
        {activeTemplate === "three" && <TemplateThree data={data} />}
        {activeTemplate === "four" && <TemplateFour data={data} />}
      </CVDocumentFrame>
    </div>
  );
}

export default TemplatePreview;
