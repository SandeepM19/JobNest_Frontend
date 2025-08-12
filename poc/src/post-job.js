import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PostJob = () => {
    return (
        <div>
            <header className="bg-primary text-white p-4">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="h3 font-weight-bold">
                        <Link to="/" className="text-white text-decoration-none">
                            JobNest
                        </Link>
                    </h1>
                    <nav>
                        <Link to="/login" className="text-white text-decoration-none me-3">
                            Login
                        </Link>
                        <Link to="/register" className="text-white text-decoration-none me-3">
                            Register
                        </Link>
                        <Link
                            to="/post-job"
                            className="btn btn-warning text-dark"
                        >
                            <i className="fa fa-edit"></i> Post Job Listing
                        </Link>
                    </nav>
                </div>
            </header>

            <section className="d-flex justify-content-center align-items-center mt-5">
                <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: "600px" }}>
                    <h2 className="text-center font-weight-bold mb-4">Create Job Listing</h2>
                    <form
                        method="POST"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.target;
                            const title = form.title.value.trim();
                            const description = form.description.value.trim();
                            const email = form.email.value.trim();

                            if (!title || !description || !email) {
                                alert("Please fill in all required fields (Job Title, Description, and Email).");
                                return;
                            }

                            alert("Form submitted successfully!");
                        }}
                    >
                        <h3 className="h5 font-weight-bold mb-3 text-center text-secondary">
                            Job Info
                        </h3>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="title"
                                placeholder="Job Title"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                name="description"
                                placeholder="Job Description"
                                className="form-control"
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="salary"
                                placeholder="Annual Salary"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="requirements"
                                placeholder="Requirements"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="benefits"
                                placeholder="Benefits"
                                className="form-control"
                            />
                        </div>
                        <h3 className="h5 font-weight-bold mb-3 text-center text-secondary">
                            Company Info & Location
                        </h3>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="company"
                                placeholder="Company Name"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address For Applications"
                                className="form-control"
                            />
                        </div>
                        <button className="btn btn-success w-100 mb-3">
                            Save
                        </button>
                        <a
                            href="/"
                            className="btn btn-danger w-100"
                        >
                            Cancel
                        </a>
                    </form>
                </div>
            </section>

            <section className="container my-5">
                <div className="bg-primary text-white rounded p-4 d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="h5 font-weight-bold">Looking to hire?</h2>
                        <p className="text-light mt-2">
                            Post your job listing now and find the perfect candidate.
                        </p>
                    </div>
                    <a
                        href="post-job.html"
                        className="btn btn-warning text-dark"
                    >
                        <i className="fa fa-edit"></i> Post a Job
                    </a>
                </div>
            </section>
        </div>
    );
};

export default PostJob;
