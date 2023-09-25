import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    let result = await axios.get("http://localhost:5000/getProduct");
    setProduct(result.data);
  };
  // Delete Product
  const handleDeleteProduct = async (id) => {
    const result = await axios.delete(`http://localhost:5000/product/${id}`);
    if (result) {
      alert("Product delete successfully!");
      getProduct();
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  const auth = localStorage.getItem("user");
  return (
    <div>
      <div className="d-flex flex-wrap p-2">
        {product.map((item, ind) => {
          return (
            <div
              className="card m-3 p-5"
              style={{ width: "18rem", cursor: "pointer" }}
              key={ind}
            >
              {auth ? (
                <h5 className="card-title postion-relative">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    fill="currentColor"
                    className="bi bi-trash3 text-danger position-absolute top-0 end-0 m-2"
                    viewBox="0 0 16 16"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteProduct(item._id)}
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                  <NavLink to={`/update/${item._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="25"
                      fill="currentColor"
                      className="bi bi-pencil-square text-warning "
                      viewBox="0 0 16 16"
                      style={{
                        cursor: "pointer",
                        position: "relative",
                        bottom: "42px",
                        left: "100px",
                      }}
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </NavLink>
                </h5>
              ) : null}
              <h5 className="card-title">
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/showProduct/${item._id}`}
                >
                  {item.name}
                </NavLink>
              </h5>
              <NavLink
                to={`/showProduct/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <img src={item.image} width={200} alt="product" />
              </NavLink>
              <p className="card-text">{item.price}</p>
              <p className="card-text">
                {" "}
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/showProduct/${item._id}`}
                >
                  {item.category}
                </NavLink>
              </p>
              <p className="card-text">
                <NavLink
                  to={`/showProduct/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  {item.company}
                </NavLink>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
