import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allservice",
        element: <AllServices></AllServices>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/singleService/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleService/${params.id}`),
      },
      {
        path: "*",
        element: <h2>this page is not found 404</h2>,
      },
    ],
  },
]);

export default router;