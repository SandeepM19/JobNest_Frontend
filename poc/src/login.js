
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "sandeep.modugu@wipro.com" && password === "S@ndeep098") {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/");
        } else {
            alert("Invalid email or password");
        }
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
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-3">
                            Login
                        </button>
                        <div className="text-center">
                            <span>Don't have an account? </span>
                            <Link to="/register" className="text-primary">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
