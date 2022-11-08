import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const ServiceDetails = useLoaderData();

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const image = form.image.value;
    const rating = form.rating.value;
    const message = form.message.value;

    const review = {
      service: ServiceDetails._id,
      photoCategory: ServiceDetails.name,
      name: name,
      email: email,
      image: image,
      rating: rating,
      message: message,
    };
    console.log(review);
  };

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
      <div className="my-10">
        <form onSubmit={handleReview}>
          <h1 className="text-5xl font-bold mb-10 text-indigo-800">
            {ServiceDetails.name} <br /> Photography Review
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 mx-20  gap-5">
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
            className="textarea textarea-bordered h-24 w-[88vw] mt-3"
            placeholder="Your Review Details"
            name="message"
          ></textarea>
          <input
            className="btn btn-outline btn-warning"
            type="submit"
            value="Review Placed Successfully"
          />
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
