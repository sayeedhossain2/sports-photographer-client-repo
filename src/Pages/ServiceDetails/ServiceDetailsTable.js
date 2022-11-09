import React from "react";

const ServiceDetailsTable = ({ reviewTable }) => {
  const { image, email, photoCategory, message } = reviewTable;
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
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsTable;
