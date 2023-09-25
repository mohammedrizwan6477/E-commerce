import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const cancelOrder = () => {
    navigate("/");
  };
  const getData = async () => {
    let result = await axios.get(`http://localhost:5000/product/${params.id}`);
    console.log(result);
    setData(result.data);
  };
  useEffect(() => {
    getData();
  });
  return (
    <>
      <div className="container-fluid m-5">
        <div class="row">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={data.image} alt="" />
            <div className="card-body">
              <p className="card-text">{data.name}</p>
              <div className="d-flex mx-2">
                <button className="btn btn-outline-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-heart"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "10px", marginBottom: "6px" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
                    />
                  </svg>
                  AddCart
                </button>
                <button
                  type="button"
                  class="btn btn-danger ms-3"
                  onClick={cancelOrder}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-x-octagon"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "10px", marginBottom: "6px" }}
                  >
                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>{" "}
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="card ms-4" style={{ width: "60rem" }}>
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <hc6 className="card-subtitle mb-2 text-muted">
                {data.company}
              </hc6>
              <p className="card-text">{data.category}</p>
              <h5>{data.price}</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus nam quo sint totam. Doloremque exercitationem
                blanditiis ea amet quam saepe fugiat voluptatibus recusandae!
                Omnis a dolorum, repudiandae eum ea excepturi vero et. Esse,
                necessitatibus aut tempora, qui molestiae praesentium obcaecati
                laborum, sed pariatur amet hic. Corrupti mollitia et cumque
                quasi est odio, explicabo, corporis ducimus distinctio vitae,
                praesentium repudiandae nostrum libero suscipit optio vero
                commodi velit blanditiis impedit harum nobis laboriosam magni
                excepturi ab! Blanditiis velit provident sit ducimus, doloremque
                corporis aperiam, possimus quia iste totam, nemo distinctio
                quasi animi. Quasi ab assumenda voluptatibus laborum! Provident
                distinctio atque autem cumque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
