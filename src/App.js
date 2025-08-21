import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobList from "./components/JonList";
import JobDetails from "./components/JobDetails";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <Routes>
              <Route path="/" element={<JobList />} />
              <Route path="/job/:id" element={<JobDetails />} />
              <Route path="/internships" element={<h2>Internships Coming Soon</h2>} />
              <Route path="/locations" element={<h2>Locations Coming Soon</h2>} />
            </Routes>
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer/>
    </Router>
  );
}
export default App;
