import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container-fluid mt-4">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8 col-md-12">
            <Routes>
              <Route path="/" element={<JobList />} />
              <Route path="/job/:id" element={<JobDetails />} />
              <Route path="/internships" element={<h2>Internships Coming Soon</h2>} />
              <Route path="/locations" element={<h2>Locations Coming Soon</h2>} />
            </Routes>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 d-none d-lg-block">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
