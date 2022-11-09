import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import ServiceDetailsTable from "./ServiceDetailsTable";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const ServiceDetails = useLoaderData();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const image = form.image.value;
    const rating = form.rating.value;
    const message = form.message.value;

    const date = Date.now();

    const review = {
      date: date,
      service: ServiceDetails._id,
      photoCategory: ServiceDetails.name,
      reviewerName: name,
      email: email,
      image: image,
      rating: rating,
      message: message,
    };
    console.log(review);
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        form.reset();
        alert("Review send Successfully");
      })
      .catch((err) => console.error(err));
  };
  useTitle("ServiceDetails");

  return (
    <div>
      {/* service details */}
      <div className="w-full flex mt-10 justify-center">
        <div className=" m-5 card w-2/4 bg-base-100 shadow-xl">
          <div className="flex justify-center">
            <img className="  rounded-xl" src={ServiceDetails.img} alt="" />
          </div>
          <div className="card-body">
            <h2 className="text-3xl mb-5 font-bold text-center">
              {ServiceDetails.name}
            </h2>
            <div className="flex">
              <p className="font-bold">Rating: {ServiceDetails.ratings}</p>
              <p className="font-bold">Price: ${ServiceDetails.price}</p>
            </div>
            <p>{ServiceDetails.description}</p>
          </div>
        </div>
      </div>

      {/* review section */}
      <div className="my-28 grid gap-20 md:grid-cols-[1fr_2fr] mx-20">
        {/* review form start */}
        <div className="bg-red-200 p-5 rounded-xl">
          {user?.email ? (
            <form onSubmit={handleReview}>
              <h1 className="text-3xl font-bold mb-10 text-indigo-800">
                {ServiceDetails.name} <br /> Photography Review
              </h1>

              <div className="grid grid-cols-1 mx-20  gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered  input-ghost w-full "
                />
                <input
                  type="text"
                  name="email"
                  placeholder=" Your Email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered  input-ghost w-full "
                />
                <input
                  type="text"
                  name="image"
                  placeholder="Your Image"
                  className="input input-bordered  input-ghost w-full "
                />
                <input
                  type="text"
                  name="rating"
                  placeholder="Ratings"
                  className="input input-bordered  input-ghost w-full "
                />
              </div>
              <textarea
                className="textarea textarea-bordered h-24 w-[75vw] lg:w-[22vw] mt-3"
                placeholder="Your Review Details"
                name="message"
              ></textarea>
              <input
                className="btn btn-outline btn-warning"
                type="submit"
                value="Review Placed Successfully"
              />
            </form>
          ) : (
            <span className="text-4xl md:mt-20 btn btn-outline btn-warning">
              <Link to="/login">
                <button className="btn btn-active btn-link text-3xl">
                  Please Login to add a Review
                </button>
              </Link>
            </span>
          )}
        </div>
        {/* review form end */}

        {/* review data start */}
        <div className="mt-20 md:mt-0 bg-red-200 p-5 rounded-xl ">
          <h2 className="text-5xl font-bold mb-10">
            Total Review {reviews.length}
          </h2>

          <div className="grid md:grid-cols-2 flex justify-center gap-5">
            {reviews.map((reviewTable) => (
              <ServiceDetailsTable
                key={reviewTable._id}
                reviewTable={reviewTable}
              ></ServiceDetailsTable>
            ))}
          </div>
        </div>
        {/* review data end */}
      </div>
    </div>
  );
};

export default ServiceDetails;

/*  <h2>
              Please <Link to="/login">Login</Link> to add a Review
            </h2> */
