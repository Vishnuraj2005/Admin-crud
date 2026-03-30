import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const fetchpost = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/userlist/${id}`);
                setEmail(res.data[0].email);
                setPassword(res.data[0].password);
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchpost();

    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5000/edituser/${id}`, { email, password });
            navigate('/');
        }
        catch (err) {
            console.log(err);
        }
    }

    return (

        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="card shadow">
                        <div className="card-header text-center">
                            <h4>Edit User</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Update User
                                </button>

                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Edituser;