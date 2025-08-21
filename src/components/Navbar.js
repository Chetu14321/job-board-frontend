import { Link, NavLink } from "react-router-dom";
import { Briefcase, GraduationCap, X } from "lucide-react"; // 👈 icons (install: npm install lucide-react)

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-light shadow-sm sticky-top"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container">
        {/* Logo / Brand */}
        <Link
          className="navbar-brand fw-bold text-dark"
          to="/"
          style={{ fontSize: "1.7rem" }}
        >
          <span className="text-primary">Job</span>Board
        </Link>

        {/* Mobile Toggle (Sidebar) */}
        <button
          className="btn btn-outline-primary d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
          aria-controls="mobileSidebar"
        >
          ☰
        </button>

        {/* Desktop Nav Links */}
        <ul className="navbar-nav ms-auto d-none d-lg-flex flex-row gap-4">
          <li className="nav-item">
            <NavLink end className="nav-link fw-semibold" to="/">
              Jobs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-semibold" to="/internships">
              Internships
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Offcanvas Sidebar for Mobile (Right Side) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
        style={{ width: "260px" }} // 👈 narrower, like a sidebar
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold text-primary" id="mobileSidebarLabel">
            JobBoard Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        <div className="offcanvas-body p-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <NavLink
                end
                to="/"
                data-bs-dismiss="offcanvas"
                className="d-flex align-items-center gap-2 text-decoration-none text-dark"
              >
                <Briefcase size={18} className="text-primary" />
                <span className="fw-semibold">Jobs</span>
              </NavLink>
            </li>
            <li className="list-group-item">
              <NavLink
                to="/internships"
                data-bs-dismiss="offcanvas"
                className="d-flex align-items-center gap-2 text-decoration-none text-dark"
              >
                <GraduationCap size={18} className="text-success" />
                <span className="fw-semibold">Internships</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
