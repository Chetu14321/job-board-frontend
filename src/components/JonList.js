import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdSlot from "./AdSlot";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  useEffect(() => {
    axios
      .get("https://job-board-backend-o49r.onrender.com/api/jobs") // backend API
      .then((res) => setJobs(res.data));
  }, []);

  // 🔹 Filter jobs based on search and role
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      roleFilter === "all" ||
      job.title.toLowerCase().includes(roleFilter.toLowerCase());

    return matchesSearch && matchesRole;
  });

  return (
    <div
      className="py-5"
      style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}
    >
      <div className="container">
        <h5 className="mb-5 text-center fw-bold display-6 text-dark">
          🚀 Latest Opportunities
        </h5>

        {/* 🔹 Search + Filter Controls */}
        <div className="row mb-4">
          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="🔍 Search jobs by title or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-2">
            <select
              className="form-select rounded-pill"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="all">All Roles</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full Stack Developer</option>
              <option value="intern">Internship</option>
              <option value="designer">Designer</option>
              <option value="mernstack">Mern Stack Developer</option>
            </select>
          </div>
        </div>

        {/* 🔹 Job Cards */}
        <div className="row g-4">
          {filteredJobs.length === 0 ? (
            <p className="text-center text-muted">No jobs found 😢</p>
          ) : (
            filteredJobs.map((job, i) => (
              <div key={job._id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 rounded-4">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark">
                      {job.title}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {job.company}
                    </h6>

                    <p className="mb-2">
                      <span className="badge bg-primary">{job.location}</span>
                      {job.isWFH && (
                        <span className="badge bg-success ms-2">Remote</span>
                      )}
                    </p>

                    {/* <p className="text-secondary small flex-grow-1">
                      {job.description?.length > 100
                        ? job.description.substring(0, 100) + "..."
                        : job.description}
                    </p> */}

                    <Link
                      to={`/job/${job._id}`}
                      className="btn btn-dark rounded-pill mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                  <div className="card-footer text-muted small bg-light">
                    📅 {new Date(job.postedAt).toLocaleDateString()}
                  </div>
                </div>

                {/* 🔹 Ad block after every 3 jobs */}
                {(i + 1) % 3 === 0 && (
                  <div className="col-12 my-3">
                    <AdSlot slot="1234567890" />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
