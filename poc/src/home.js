import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem("isLoggedIn") === "true");

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    React.useEffect(() => {
        const onStorage = () => setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-3" href="/">JobNest</a>
                    <div className="d-flex align-items-center">
                        {isLoggedIn ? (
                            <>
                                <button onClick={handleLogout} className="btn btn-outline-light me-2">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                                <Link to="/register" className="btn btn-outline-light me-2">Register</Link>
                            </>
                        )}
                        <Link to="/post-job" className="btn btn-warning text-black fw-bold">
                            <i className="fa fa-edit me-1"></i> Post a Job
                        </Link>
                    </div>
                </div>
            </nav>

            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="display-5 fw-bold mb-4 text-primary">Find Your Dream Job</h2>
                    <form className="row g-2 justify-content-center mb-4">
                        <div className="col-12 col-md-4">
                            <input type="text" name="keywords" placeholder="Keywords" className="form-control" />
                        </div>
                        <div className="col-12 col-md-4">
                            <input type="text" name="location" placeholder="Location" className="form-control" />
                        </div>
                        <div className="col-12 col-md-2">
                            <button className="btn btn-primary w-100">
                                <i className="fa fa-search me-1"></i> Search
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="bg-primary text-white py-5 text-center">
                <div className="container">
                    <h2 className="display-6 fw-semibold">Unlock Your Career Potential</h2>
                    <p className="lead mt-2 mb-0">
                        Discover the perfect job opportunity for you.
                    </p>
                </div>
            </section>

            <section>
                <div className="container py-4 mt-4">
                    <div className="h3 mb-4 fw-bold border border-secondary p-3 bg-light text-center rounded">
                        Recent Jobs
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4 mb-4">
                            <JobCard
                                title="Software Engineer"
                                description="We are seeking a skilled software engineer to develop high-quality software solutions."
                                salary="$80,000"
                                location="New York"
                                tags={["Development", "Coding"]}
                                locationType="Local"
                            />
                        </div>
                        <div className="col-md-4 mb-4">
                            <JobCard
                                title="Marketing Specialist"
                                description="We are looking for a Marketing Specialist to create and manage marketing campaigns."
                                salary="$70,000"
                                location="San Francisco"
                                tags={["Marketing", "Advertising"]}
                                locationType="Remote"
                            />
                        </div>
                        <div className="col-md-4 mb-4">
                            <JobCard
                                title="Web Developer"
                                description="Join our team as a Web Developer and create amazing web applications."
                                salary="$75,000"
                                location="Los Angeles"
                                tags={["Web Development", "Programming"]}
                                locationType="Local"
                            />
                        </div>
                    </div>
                    <Link to="/listings" className="d-block h5 text-center text-primary">
                        <i className="fa fa-arrow-alt-circle-right me-1"></i> Show All Jobs
                    </Link>
                </div>
            </section>

            <section className="container my-5">
                <div className="bg-primary text-white rounded p-4 d-flex align-items-center justify-content-between">
                    <div>
                        <h2 className="h5 fw-semibold mb-2">Looking to hire?</h2>
                        <p className="mb-0 lead">
                            Post your job listing now and find the perfect candidate.
                        </p>
                    </div>
                    <Link
                        to="/post-job"
                        className="btn btn-warning text-black fw-bold ms-3"
                    >
                        <i className="fa fa-edit me-1"></i> Post a Job
                    </Link>
                </div>
            </section>
        </>
    );
};

const JobCard = ({ title, description, salary, location, tags, locationType }) => {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title h5 fw-bold">{title}</h2>
                <p className="card-text mb-3">{description}</p>
                <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">
                        <strong>Salary:</strong> {salary}
                    </li>
                    <li className="list-group-item">
                        <strong>Location:</strong> {location}
                        <span className="badge bg-primary ms-2">{locationType}</span>
                    </li>
                    <li className="list-group-item">
                        <strong>Tags:</strong> {tags.map((tag, index) => (
                            <span key={index}>{tag}{index < tags.length - 1 && ", "}</span>
                        ))}
                    </li>
                </ul>
                <Link
                    to="/details"
                    className="btn btn-outline-primary w-100"
                >
                    Details
                </Link>
            </div>
        </div>
    );
};

export default Home;
