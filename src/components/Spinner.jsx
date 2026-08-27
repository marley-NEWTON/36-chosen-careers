import "./Spinner.css";

function Spinner({ size = "md" }) {
  return <div className={`spinner spinner-${size}`}></div>;
}

export default Spinner;
