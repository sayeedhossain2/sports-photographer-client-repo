import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviewPerson, setReviewPerson] = useState([]);
  console.log(reviewPerson);
  useEffect(() => {
    fetch(`http://localhost:5000/userReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviewPerson(data));
  }, []);
  return (
    <div>
      <h2>total review {reviewPerson.length}</h2>
    </div>
  );
};

export default MyReview;
