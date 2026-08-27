import "./Footer.css";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {year} 36 Chosen Careers. All rights reserved.</p>

        <div className="footer-socials">
          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
