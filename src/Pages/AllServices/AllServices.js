import React, { useEffect, useState } from "react";
import AllService from "./AllService";

const AllServices = () => {
  const [allpackages, setAllpackages] = useState([]);
  console.log(allpackages);
  useEffect(() => {
    fetch("http://localhost:5000/allService")
      .then((res) => res.json())
      .then((data) => setAllpackages(data));
  }, []);

  return (
    <div className="grid grid-cols-3">
      {allpackages.map((allpackage) => (
        <AllService key={allpackage._id} allpackage={allpackage}></AllService>
      ))}
    </div>
  );
};

export default AllServices;
