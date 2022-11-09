import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useTitle from "../../hooks/useTitle";

const AllService = ({ allpackage }) => {
  const { img, name, price, ratings, description, _id } = allpackage;
  const imgs = [img];
  useTitle("AllService");
  return (
    <PhotoProvider>
      <div className=" m-5 card w-96 bg-base-100 shadow-xl ">
        <figure>
          {imgs.map((item, index) => (
            <PhotoView key={index} src={img}>
              <img src={item} alt="" />
            </PhotoView>
          ))}
          {/* <img className="lg:h-56 rounded-xl" src={img} alt="Shoes" /> */}
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
    </PhotoProvider>
  );
};

export default AllService;

/* 

export default function MyComponent() {
  return (
    <PhotoProvider>
      <div className="foo">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img src={item} alt="" />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}
*/
