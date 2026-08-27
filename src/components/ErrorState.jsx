import "./ErrorState.css";

function ErrorState({ message = "Something went wrong.", onRetry }) {
  return (
    <div className="error-state">
      <i className="fa-solid fa-triangle-exclamation"></i>
      <p>{message}</p>
      {onRetry && (
        <button className="error-retry-btn" onClick={onRetry}>
          <i className="fa-solid fa-rotate-right"></i> Retry
        </button>
      )}
    </div>
  );
}

export default ErrorState;
