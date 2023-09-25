// import axios from "axios";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signUp");
  };
  // const handleSearch = async (e) => {
  //   const searchQuery = e.target.value;
  //   const result = await axios.get(
  //     `http://localhost:5000/search/${searchQuery}`
  //   );
  // };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg text-center"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand text-muted">
            <img
              src="images/pngwing.com.png"
              width="50"
              height="50"
              alt="eCommerce Logo"
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {auth ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active text-muted" to="/">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/add" className="nav-link text-muted">
                    Add Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-muted"
                    to={`/userProfile/:id`}
                  >
                    Profiles
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/signUp"
                    onClick={logout}
                    className="nav-link text-muted"
                  >
                    Logout{" "}
                    <span style={{ color: "darksalmon" }}>
                      ({JSON.parse(auth).name})
                    </span>
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active text-muted" to="/">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-muted" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-muted" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
            <div className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Product"
                aria-label="Search"
                // onChange={search}
              />
            </div>
            <div className="btn btn-outline-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
