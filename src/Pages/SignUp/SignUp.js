import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  const { createUser, userLoginGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [successfully, setSuccessfully] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const handleUserSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
        setSuccessfully("User Created Successfully");
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSuccessfully("");
        setError(errorMessage);
      });
  };

  const handleWithGoogle = () => {
    userLoginGoogle(googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        setError("");
        setSuccessfully("User Created Successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
        setSuccessfully("");
      });
  };
  useTitle("SignUp");
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUserSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />

              <p className="font-bold  text-red-500">{error}</p>
              <p className="font-bold  text-green-500">{successfully}</p>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p>
              All ready have an account, please{" "}
              <Link className="btn btn-active btn-link" to="/login">
                Login
              </Link>
            </p>
          </form>
          <div className="-mt-5 mb-5">
            <button
              onClick={handleWithGoogle}
              className=" btn btn-sm btn-outline btn-warning"
            >
              <FaGoogle /> <span className="ml-3">login via google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
