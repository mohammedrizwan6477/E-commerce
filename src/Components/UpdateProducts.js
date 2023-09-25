import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const UpdateProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  console.log("params==>", params);
  const navigate = useNavigate();
  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    const result = await axios.get(
      `http://localhost:5000/product/${params.id}`
    );
    console.log(result);
    setName(result.data.name);
    setPrice(result.data.price);
    setCategory(result.data.category);
    setImage(result.data.image);
    setCompany(result.data.company);
  };

  const handleUpdateProduct = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, image, company }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    navigate("/");
  };

  return (
    <div className="container mt-5" style={{ width: "400px" }}>
      <h3>Update Product Details</h3>
      <div className="mb-3 text-start">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="mb-3 text-start">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <div className="mb-3 text-start">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
      </div>
      <div className="mb-3 text-start">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Image URL"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </div>
      <div className="mb-3 text-start">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Company"
          onChange={(e) => setCompany(e.target.value)}
          value={company}
        />
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-primary m-3"
          onClick={handleUpdateProduct}
        >
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProducts;
