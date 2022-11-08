import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";

const Service = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div className="flex  justify-center mt-10">
      <div className=" grid lg:grid-cols-3">
        {packages.map((singlePackage) => (
          <SingleService
            key={singlePackage._id}
            singlePackage={singlePackage}
          ></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Service;
