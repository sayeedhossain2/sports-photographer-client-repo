import React from "react";
import { ToastContainer } from "react-toastify";

const MyReviewList = ({ reviewsPerson, handleDelete }) => {
  //   console.log(reviewsPerson);
  const { image, email, reviewerName, photoCategory, message } = reviewsPerson;

  return (
    // <tr>
    //   <td>
    //     <div className="flex items-center space-x-3">
    //       <div className="avatar">
    //         <div className="mask mask-squircle w-12 h-12">
    //           <img src={image} alt="Avatar Tailwind CSS Component" />
    //         </div>
    //       </div>
    //       <div>
    //         <div className="font-bold">{photoCategory}</div>
    //       </div>
    //     </div>
    //   </td>
    //   <td>
    //     {message}
    //     <br />
    //   </td>
    //   <td>
    //     {email}
    //     <br />
    //   </td>
    //   <th>
    //     <button className="btn btn-outline btn-warning">Update</button>
    //   </th>
    //   <th>
    //     <button
    //       onClick={() => handleDelete(reviewsPerson)}
    //       className="btn btn-outline btn-warning"
    //     >
    //       Delete
    //     </button>
    //     <ToastContainer
    //       position="top-center"
    //       autoClose={2000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //       theme="light"
    //     />
    //   </th>
    // </tr>

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
            <button className="btn btn-outline btn-warning">Edit</button>
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
