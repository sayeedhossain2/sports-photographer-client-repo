import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
// import "./Header.css";
import img4 from "../../assets/favicon/img4.png";
import useTitle from "../../hooks/useTitle";

const Header = () => {
  const { userLogOut, user } = useContext(AuthContext);

  const handlelogout = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const menuItem = (
    <>
      <li className="font-bold text-xl">
        <Link to="/"> Home</Link>
      </li>
      <li className="font-bold text-xl">
        <Link to="/blog">Bolg</Link>
      </li>
      <li className="font-bold text-xl">
        <Link to="/allservice">All Service</Link>
      </li>

      {/* conditional rendaring */}
      {user?.email ? (
        <>
          <li className="font-bold text-xl">
            <Link to="/addservice">Add Service</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/myreview">My Review</Link>
          </li>
          <li onClick={handlelogout} className="font-bold text-xl">
            <Link to="/">Log Out</Link>
          </li>
        </>
      ) : (
        <>
          <li className="font-bold text-xl">
            <Link to="/login">Login</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}
    </>
  );

  useTitle("Header");
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {" "}
            {menuItem}{" "}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl md:text-2xl text-orange-500 font-bold"
        >
          Sports Photographer
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0"> {menuItem} </ul>
      </div>
      <div className="navbar-end">
        <img className="w-20" src={img4} alt="" />
      </div>
    </div>
  );
};

export default Header;
