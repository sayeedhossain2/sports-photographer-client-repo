import React, { useContext, useState } from "react";
import { Dna, Vortex } from "react-loader-spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const { login, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [successfully, setSuccessfully] = useState("");
  useTitle("Login");
  const navigate = useNavigate();
  const location = useLocation();

  // userLoginGoogle
  //  const googleProvider = new GoogleAuthProvider();

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

  const from = location.state?.from?.pathname || "/";

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

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
            navigate(from, { replace: true });
          });

        form.reset();
        setSuccessfully("User Login Successfully");
        setError("");
        toast("Wow Login successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSuccessfully("");
        setError(errorMessage);
      });
  };
  <Vortex
    visible={true}
    height="120"
    width="120"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={["red", "green", "blue", "yellow", "orange", "purple"]}
  />;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold mt-5">Login now!</h1>
          <form onSubmit={handleUserLogin} className="card-body">
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
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <p className="font-bold  text-red-500">{error}</p>
            <p className="font-bold text-green-500">{successfully}</p>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <ToastContainer />
            <p>
              Don't have account,please
              <Link className="btn btn-active btn-link" to="/signup">
                SignUp
              </Link>
            </p>
          </form>

          {/* google start */}
          {/* <div className="-mt-5 mb-5">
            <button
              onClick={handleWithGoogle}
              className=" btn btn-sm btn-outline btn-warning"
            >
              <FaGoogle /> <span className="ml-3">login via google</span>
            </button>
          </div> */}
          {/* google end */}
        </div>
      </div>
    </div>
  );
};

export default Login;

/* 



*/
