import { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./CVDocumentFrame.css";

const DOCUMENT_WIDTH = 750; // px — matches every template's existing max-width, unchanged

function CVDocumentFrame({ children, printRef, className = "", style = {} }) {
  const outerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [autoFit, setAutoFit] = useState(true);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    if (printRef.current) {
      setContentHeight(printRef.current.scrollHeight);
    }
  });

  useEffect(() => {
    function computeFit() {
      if (!autoFit || !outerRef.current) return;
      const availableWidth = outerRef.current.clientWidth;
      const nextScale = Math.min(1, availableWidth / DOCUMENT_WIDTH);
      setScale(nextScale > 0 ? nextScale : 1);
    }

    computeFit();
    window.addEventListener("resize", computeFit);
    return () => window.removeEventListener("resize", computeFit);
  }, [autoFit]);

  const zoomIn = () => {
    setAutoFit(false);
    setScale((prev) => Math.min(1.5, +(prev + 0.1).toFixed(2)));
  };

  const zoomOut = () => {
    setAutoFit(false);
    setScale((prev) => Math.max(0.3, +(prev - 0.1).toFixed(2)));
  };

  const fitToScreen = () => setAutoFit(true);

  const actualSize = () => {
    setAutoFit(false);
    setScale(1);
  };

  return (
    <div className="cv-document-viewport">
      <div className="cv-zoom-controls no-print">
        <button type="button" onClick={zoomOut} aria-label="Zoom out">
          <i className="fa-solid fa-magnifying-glass-minus"></i>
        </button>
        <span className="cv-zoom-level">{Math.round(scale * 100)}%</span>
        <button type="button" onClick={zoomIn} aria-label="Zoom in">
          <i className="fa-solid fa-magnifying-glass-plus"></i>
        </button>
        <button
          type="button"
          onClick={fitToScreen}
          className={autoFit ? "active" : ""}
        >
          Fit to Screen
        </button>
        <button
          type="button"
          onClick={actualSize}
          className={!autoFit && scale === 1 ? "active" : ""}
        >
          100%
        </button>
      </div>

      <div
        ref={outerRef}
        className="cv-document-outer"
        style={{ height: contentHeight ? contentHeight * scale : undefined }}
      >
        <div
          ref={printRef}
          id="cv-print-area"
          className={className}
          style={{
            ...style,
            width: DOCUMENT_WIDTH,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default CVDocumentFrame;
