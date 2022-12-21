import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../hooks/useTitle";
import { Dna } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const { createUser, userLoginGoogle, loading } = useContext(AuthContext);
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
        toast("Wow signup successfully!");
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
        toast("Wow signup successfully");

        const currentUser = {
          email: user.email,
        };

        // get jwt token
        fetch("https://sports-photographer-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // set the token inside local storage
            localStorage.setItem("sportsToken", data.token);
            // navigate(from, { replace: true });
          });
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
  if (loading) {
    return (
      <h2 className=" flex justify-center items-center">
        <Dna
          visible={true}
          height="200"
          width="280"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </h2>
    );
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold mt-5">Sign Up</h1>
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
              <ToastContainer />
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
