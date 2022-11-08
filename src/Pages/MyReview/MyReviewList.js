import React from "react";

const MyReviewList = ({ reviewsPerson }) => {
  console.log(reviewsPerson);
  const { image, email, reviewerName, photoCategory, message } = reviewsPerson;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{photoCategory}</div>
            {/* <div className="text-sm opacity-50">Brazil</div> */}
          </div>
        </div>
      </td>
      <td>
        {message}
        <br />
        {/* <span className="badge badge-ghost badge-sm">
          Community Outreach Specialist
        </span> */}
      </td>
      <td>{email}</td>
      <th>
        <button className="btn btn-outline btn-warning">Delete</button>
      </th>
    </tr>
  );
};

export default MyReviewList;
