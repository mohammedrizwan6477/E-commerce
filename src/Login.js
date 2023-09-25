import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [login, setLogin] = useState({});
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    let postLogin = await axios.post("http://localhost:5000/login", login);
    console.log(postLogin.data);
    if (postLogin.data.email) {
      localStorage.setItem("user", JSON.stringify(postLogin.data));
      navigate("/");
    } else {
      alert("Please Enter correct details");
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="container mt-5" style={{ width: "400px" }}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              value={login.email}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              value={login.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
