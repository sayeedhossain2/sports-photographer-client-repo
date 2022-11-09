import React from "react";
import { toast, ToastContainer } from "react-toastify";

const AddService = () => {
  const handleAdService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.price.value;
    const view = form.view.value;
    const rating = form.rating.value;

    // make object which data i am sending from client side
    const newService = {
      name: name,
      description: description,
      price: price,
      ratings: rating,
      view: view,
      img: image,
    };
    //  emplement Post method and data data send backend
    fetch("http://localhost:5000/AddService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        // alert("Add Service added Successfully");
        toast("Add Service added Successfully!");

        /* 
        <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        */
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>this is add service</h2>

      {/*  input div start */}
      <form onSubmit={handleAdService} className="my-20">
        <div className="grid md:grid-cols-2 mb-5 mx-20  gap-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered  input-ghost w-full "
          />

          <input
            type="text"
            name="image"
            placeholder="Image"
            className="input input-bordered  input-ghost w-full "
          />

          <input
            type="text"
            name="description"
            placeholder=" description"
            className="input input-bordered  input-ghost w-full "
          />

          <input
            type="number"
            name="price"
            placeholder="price"
            className="input input-bordered  input-ghost w-full "
          />
          <input
            type="text"
            name="view"
            placeholder="view"
            className="input input-bordered  input-ghost w-full "
          />
          <input
            type="text"
            name="rating"
            placeholder="Ratings"
            className="input input-bordered  input-ghost w-full "
          />
        </div>
        <input
          className="btn btn-outline btn-warning"
          type="submit"
          value="Add Service Placed"
        />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </div>
  );
};

export default AddService;
