
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RouteLayout from "../src/layout/RouteLayout";
import Home from "../src/pages/Home/Home/Home";
import CallLogs from "../src/pages/CallLogs/CallLogs";
import Appointments from "../src/pages/Appointments/Appointments";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout></RouteLayout>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"/",
            Component:Home
        },
        {
            path:"/call-logs",
            element:<CallLogs></CallLogs>
        },
        {
            path:"/appointments",
            element:<Appointments></Appointments>

        }

    ]
  },
]);
