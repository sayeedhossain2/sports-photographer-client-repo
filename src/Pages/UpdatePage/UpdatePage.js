import React from "react";
import { useParams } from "react-router-dom";

const UpdatePage = () => {
  const { id } = useParams();
  console.log(id);

  const handleAdService = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewerName = form.reviewerName.value;
    const message = form.message.value;
    const rating = form.rating.value;

    // console.log(reviewerName, message, rating);

    // fetch (`http://localhost:5000/allReview/${}`)
  };

  return (
    <div>
      <h2>this is update</h2>

      <form
        onSubmit={handleAdService}
        className="my-20 bg-slate-400 p-20 w-3/4 mx-auto rounded-xl"
      >
        <div className="lg:w-2/4 mb-5 mx-auto ">
          <input
            type="text"
            name="reviewerName"
            placeholder="reviewerName"
            className="bg-white input input-bordered  input-ghost w-full mb-5 "
          />
          <input
            type="text"
            name="message"
            placeholder="message"
            className="bg-white input input-bordered  input-ghost w-full mb-5  "
          />
          <input
            type="text"
            name="rating"
            placeholder="rating"
            className=" bg-white input input-bordered  input-ghost w-full "
          />
          <input
            className="btn mt-5 btn-warning"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
