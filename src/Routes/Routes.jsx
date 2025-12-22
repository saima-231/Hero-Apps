import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppsDetails from "../Pages/AppsDetails";
import ErrorPage from "../Pages/ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<ErrorPage></ErrorPage>,
    children : [
        {
            index:true,
            element:<Home></Home>,
            hydrateFallbackElement: <p>Loading...</p>
        },
        {
            path:'apps',
            element:<Apps></Apps>
        },
        {
            path:'installation',
            element:<Installation></Installation>
        },
        {
          path:'app/:id',
          element:<AppsDetails></AppsDetails>
        }
    ]
  },
]);