import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SingUp = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    let URL = "http://localhost:5000/register";
    const res = await axios.post(URL, user);
    console.log(res);
    navigate("/login");
  };
  return (
    <>
      <div className="container mt-5" style={{ width: "400px" }}>
        <h1>SingUp</h1>
        <form onSubmit={handleForm}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SingUp;
