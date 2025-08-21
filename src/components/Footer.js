// Footer.js
import { Link } from "react-router-dom";
// import "./Footer.css"; // optional custom styles

export default function Footer() {
  return (
    <footer className="bg-light text-dark mt-5 border-top">
      <div className="container py-4">
        <div className="row">
          {/* Brand Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">
              <span className="text-primary">Job</span>Board
            </h5>
            <p className="small">
              Find your dream job, internships, and opportunities in one place.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link className="text-decoration-none text-dark" to="/">
                  Jobs
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-dark" to="/internships">
                  Internships
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-dark" to="/locations">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1">📧 support@jobboard.com</p>
            <p className="small">📍 Bangalore, India</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center border-top pt-3">
          <p className="mb-0 small">
            © {new Date().getFullYear()} JobBoard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
