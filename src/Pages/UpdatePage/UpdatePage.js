import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UpdatePage = () => {
  const storedReviewer = useLoaderData();

  const [update, SetUpdate] = useState({ storedReviewer });
  //   console.log(storedReviewer);

  const handleUpdateService = (event) => {
    event.preventDefault();
    console.log(update);
    fetch(
      `https://sports-photographer-server.vercel.app/usersReview/${storedReviewer._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(update),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast("Review Updated Succfully!");
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...update };
    newReview[field] = value;
    SetUpdate(newReview);
  };

  return (
    <div>
      <h2>this is update {storedReviewer.photoCategory}</h2>

      <form
        onSubmit={handleUpdateService}
        className="my-20 bg-slate-400 p-20 w-3/4 mx-auto rounded-xl"
      >
        <div className="lg:w-2/4 mb-5 mx-auto ">
          <h1>Rating</h1>
          <input
            onChange={handleInputBlur}
            defaultValue={storedReviewer.rating}
            type="text"
            name="rating"
            placeholder="reviewerName"
            className="bg-white input input-bordered  input-ghost w-full mb-5 "
          />
          <h1>Message</h1>
          <input
            onChange={handleInputBlur}
            defaultValue={storedReviewer.message}
            type="text"
            name="message"
            placeholder="message"
            className="bg-white input input-bordered  input-ghost w-full mb-5  "
          />

          <input
            className="btn mt-5 btn-warning"
            type="submit"
            value="Update Value"
          />
          <ToastContainer
            position="top-center"
            autoClose={3000}
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
      </form>
    </div>
  );
};

export default UpdatePage;

//   const { id } = useParams();
//   const [reviews, setReviews] = useState({ id });
