import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Admin = () => {

  const [user, setuser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/userlist")
    .then((res) => {
      setuser(res.data);
    });
  }, []);  

  // delete user

  const handleDelete=async(id)=>{
    await axios.delete(`http://localhost:5000/deleteuser/${id}`);
    setuser(user.filter(user=>user.id!=id));
  }

  return (
    <div className="container mt-5">
      <h2>Users List</h2>

      <table className="table table-striped">

        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <Link to={`/edituser/${user.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button onClick={()=>handleDelete(user.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Admin;