import React, { useContext, useEffect, useState } from "react";
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

  return (
    <div>
      <h2>total review {reviewPerson.length}</h2>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reviewPerson.map((reviewsPerson) => (
                <MyReviewList
                  key={reviewsPerson._id}
                  reviewsPerson={reviewsPerson}
                ></MyReviewList>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
