import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  const handleAddProduct = async () => {
    if (!name || !price || !category || !company || !image) {
      setError(true);
      return false;
    }
    let userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch(`http://localhost:5000/product`, {
      method: "post",
      body: JSON.stringify({ userId, name, price, category, company, image }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await result.json();
    navigate("/");
  };
  return (
    <div className="container mt-5" style={{ width: "400px" }}>
      <div className="mb-3 text-start">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        {error && !name && (
          <span className="text-danger">Enter Valid Name</span>
        )}
      </div>
      <div className="mb-3 text-start">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        {error && !price && (
          <span className="text-danger">Enter Valid Price</span>
        )}
      </div>
      <div className="mb-3 text-start">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        {error && !category && (
          <span className="text-danger">Enter Valid Category</span>
        )}
      </div>
      <div className="mb-3 text-start">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Image URL"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        {error && !image && (
          <span className="text-danger">Enter Valid Image Url</span>
        )}
      </div>
      <div className="mb-3 text-start">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Company"
          onChange={(e) => setCompany(e.target.value)}
          value={company}
        />
        {error && !company && (
          <span className="text-danger">Enter Valid Company Name</span>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-primary m-3"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProducts;
