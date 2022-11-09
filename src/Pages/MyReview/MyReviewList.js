import React from "react";
import { ToastContainer } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const MyReviewList = ({ reviewsPerson, handleDelete }) => {
  //   console.log(reviewsPerson);
  const { image, email, reviewerName, photoCategory, message } = reviewsPerson;
  useTitle("MyReviewList");
  return (
    <div>
      <div className="card card-compact w-full gap-5 bg-base-100 shadow-xl mb-5">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{photoCategory}</h2>
          <p className="text-left text-xl font-bold">User: {email}</p>
          <p>{message}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-warning">Update</button>
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
