import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import AllServices from "../../AllServices/AllServices";

import SingleService from "../SingleService/SingleService";

const Service = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  useTitle("Service");
  return (
    <div className="flex  justify-center mt-10">
      <div>
        <div className=" grid lg:grid-cols-3">
          {packages.map((singlePackage) => (
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
