import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useTitle from "../../hooks/useTitle";
import UpdatePage from "../UpdatePage/UpdatePage";

const MyReviewList = ({ reviewsPerson, handleDelete }) => {
  //   console.log(reviewsPerson);
  const { _id, image, email, reviewerName, photoCategory, message } =
    reviewsPerson;
  useTitle("MyReviewList");
  return (
    <div>
      <div className="card card-compact w-full gap-5 bg-base-100 shadow-xl mb-5">
        <figure>
          <img
            style={{
              width: "320px",
              height: "250px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{photoCategory}</h2>
          <p className="text-left text-xl font-bold">User: {email}</p>
          <p>{message}</p>
          <div className="card-actions justify-end">
            <Link to={`/updatepage/${_id}`}>
              <button className="btn btn-outline btn-warning">Update</button>
            </Link>

            <button
              onClick={() => handleDelete(reviewsPerson)}
              className="btn btn-outline btn-warning"
            >
              Delete
            </button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewList;
