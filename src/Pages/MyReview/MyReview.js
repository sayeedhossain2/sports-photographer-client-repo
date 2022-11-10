import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewList from "./MyReviewList";

const MyReview = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviewPerson, setReviewPerson] = useState([]);
  useTitle("MyReview");

  //   console.log(reviewPerson);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://sports-photographer-server.vercel.app/userReview?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("sportsToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            logout();
          }
          return res.json();
        })
        .then((data) => {
          // console.log("recive", data);
          setReviewPerson(data);
        });
    }
  }, [user?.email]);

  const handleDelete = (reviewsPerson) => {
    const agree = window.confirm(
      `Are you sure you want to delete ${reviewsPerson.reviewerName}`
    );

    if (agree) {
      fetch(
        `https://sports-photographer-server.vercel.app/reviewUser/${reviewsPerson._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // alert("user deleted successfully");
            toast("Review deleted successfully!");
          }
          const remaining = reviewPerson.filter(
            (remainReviewPerson) => remainReviewPerson._id !== reviewsPerson._id
          );
          setReviewPerson(remaining);
        });
    }
  };

  useTitle("MyReview");
  return (
    <div>
      <h2>total review {reviewPerson.length}</h2>

      <div>
        <div className="overflow-x-auto w-full">
          {reviewPerson.length == 0 ? (
            <h1 className="text-3xl md:text-5xl my-20 font-bold text-red-600">
              No Review Were Added
            </h1>
          ) : (
            // <table className="table w-full">
            //   <thead>
            //     <tr>
            //       <th>Name</th>
            //       <th>Review</th>
            //       <th>User Email</th>

            //       <th>Update</th>
            //       <th>Delete</th>
            //     </tr>
            //   </thead>
            //   <tbody>

            //   </tbody>
            // </table>
            <div className="grid md:grid-cols-3 mx-20 flex justify-center gap-5">
              {reviewPerson.map((reviewsPerson) => (
                <MyReviewList
                  key={reviewsPerson._id}
                  reviewsPerson={reviewsPerson}
                  handleDelete={handleDelete}
                ></MyReviewList>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReview;
