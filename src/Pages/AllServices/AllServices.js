import React, { useContext, useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import AllService from "./AllService";

const AllServices = () => {
  const { loading } = useContext(AuthContext);
  useTitle("AllServices");
  const [allpackages, setAllpackages] = useState([]);
  // console.log(allpackages);
  useEffect(() => {
    fetch("http://localhost:5000/allService")
      .then((res) => res.json())
      .then((data) => setAllpackages(data));
  }, []);
  if (loading) {
    return (
      <h2 className=" flex justify-center items-center">
        <Dna
          visible={true}
          height="200"
          width="280"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </h2>
    );
  }
  return (
    <div className="grid lg:grid-cols-3 flex justify-center mt-10">
      {allpackages.map((allpackage) => (
        <AllService key={allpackage._id} allpackage={allpackage}></AllService>
      ))}
    </div>
  );
};

export default AllServices;
