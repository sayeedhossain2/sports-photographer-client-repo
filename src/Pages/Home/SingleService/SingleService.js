import React from "react";

const SingleService = ({ singlePackage }) => {
  console.log(singlePackage);
  const { img, name, price, rating, view } = singlePackage;
  return (
    <div className=" m-5 card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className=" lg:h-4/5 rounded-xl" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
