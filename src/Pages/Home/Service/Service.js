import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllServices from "../../AllServices/AllServices";

import SingleService from "../SingleService/SingleService";

const Service = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allService")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div className="flex  justify-center mt-10">
      <div>
        <div className=" grid lg:grid-cols-3">
          {packages.slice(0, 3).map((singlePackage) => (
            <SingleService
              key={singlePackage._id}
              singlePackage={singlePackage}
            ></SingleService>
          ))}
        </div>
        <Link to="/allservice" className="btn btn-outline btn-warning">
          See All
        </Link>
      </div>
    </div>
  );
};

export default Service;
