import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Register successful!");
        navigate("/login");
    };

    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3" to="/">JobNest</Link>
                    <div className="d-flex align-items-center">
                        <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                        <Link to="/register" className="btn btn-outline-light me-2">Register</Link>
                        <Link to="/post-job" className="btn btn-warning text-black fw-bold">
                            <i className="fa fa-edit me-1"></i> Post a Job
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="container d-flex flex-column align-items-center justify-content-center flex-grow-1">
                <div className="card shadow p-4 mt-5 w-100" style={{maxWidth: 400}}>
                    <h2 className="text-center mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input
                                type="text"
                                name="city"
                                className="form-control"
                                placeholder="City"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">State</label>
                            <input
                                type="text"
                                name="state"
                                className="form-control"
                                placeholder="State"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                name="password_confirmation"
                                className="form-control"
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-3">
                            Register
                        </button>
                        <div className="text-center">
                            <span>Already have an account? </span>
                            <Link to="/login" className="text-primary">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
