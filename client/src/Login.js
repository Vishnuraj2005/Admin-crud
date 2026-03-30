import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "0000") {
            navigate("/admin")
            return;
        } else {
            alert("Invalid admin credentials");
        }

        axios.post("http://localhost:5000/login", {
            email: email,
            password: password
        })
            .then((res) => {
                if (res.data.message === "Login Successful") {
                    navigate("/home");
                } else {

                    alert(res.data.message);
                }
            });
    };

    return (
        <section className="login">
            <div className="container vh-100 d-flex justify-content-center align-items-center" >
                <div className="card p-4 shadow" style={{ width: "350px", }}>

                    <h3 className="text-center mb-3">Login</h3>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button className="btn btn-primary w-100">
                            Login
                        </button>

                    </form>

                    <p className="text-center mt-3">
                        New user? <Link to="/register">Register</Link>
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Login;