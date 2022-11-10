import React from "react";

const Subcribe = () => {
  return (
    <div className="bg-black text-white p-20 mx-10 my-10 rounded-xl">
      <h1 className="md:text-5xl mb-5">Let's keep in touch</h1>
      <p className="mb-5">
        Subscribe to keep up with Fresh sports image and exciting updates,
        <br />
        we promise not to spam you?
      </p>
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
        />{" "}
        <button className="btn btn-success md:w-40">Send</button>
      </div>
      <div className="mt-5 mx-auto  md:flex justify-center">
        <p>
          I agree to my email address <br /> being stored and use to receive
          monthly Photographer.
        </p>
      </div>
    </div>
  );
};

export default Subcribe;
