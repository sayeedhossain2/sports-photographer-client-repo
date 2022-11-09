import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import MyReviewList from "./MyReviewList";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviewPerson, setReviewPerson] = useState([]);

  //   console.log(reviewPerson);

  useEffect(() => {
    fetch(`http://localhost:5000/userReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviewPerson(data));
  }, [user?.email]);

  const handleDelete = (reviewsPerson) => {
    const agree = window.confirm(
      `Are you sure you want to delete ${reviewsPerson.reviewerName}`
    );

    if (agree) {
      fetch(`http://localhost:5000/reviewUser/${reviewsPerson._id}`, {
        method: "DELETE",
      })
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
