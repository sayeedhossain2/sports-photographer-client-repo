import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const ServiceDetails = useLoaderData();
  return (
    <div className="w-full flex mt-10 justify-center">
      <div className=" m-5 card w-10/12 bg-base-100 shadow-xl">
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
          {/* <div className="card-actions justify-end">
          <Link to={`/singleService/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
