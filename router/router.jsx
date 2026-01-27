
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RouteLayout from "../src/layout/RouteLayout";
import Home from "../src/pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout></RouteLayout>,
    children:[
        {
            index:true,
            Component:Home
        }
    ]
  },
]);
