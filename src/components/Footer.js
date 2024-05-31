import React from 'react';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">© 2024 Your Name. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/yourusername" className="footer-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="footer-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:yourname@example.com" className="footer-link" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
