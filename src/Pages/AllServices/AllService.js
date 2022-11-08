import React from "react";
import { Link } from "react-router-dom";

const AllService = ({ allpackage }) => {
  const { img, name, price, ratings, description, _id } = allpackage;
  return (
    <div className=" m-5 card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img className="lg:h-56 rounded-xl" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div className="flex">
          <p className="font-bold">Rating: {ratings}</p>
          <p className="font-bold">Price: ${price}</p>
        </div>

        <p>{description.slice(0, 100) + "....."}</p>
        <div className="card-actions justify-end">
          <Link to={`/singleService/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllService;
