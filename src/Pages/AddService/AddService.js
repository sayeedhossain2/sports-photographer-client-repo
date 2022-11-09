import React from "react";

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
  };

  return (
    <div>
      <h2>this is add service</h2>

      {/*  input div start */}
      <div onSubmit={handleAdService}>
        <div className="grid md:grid-cols-2 my-20 mx-20  gap-5">
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
            name=" description"
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
      </div>
    </div>
  );
};

export default AddService;
