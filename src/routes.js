import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
    },

    { path : "/SignUp",
        element: <SignUp/>

    },
    {
        path : "/SignIn",
        element : <SignIn/>
    }
])
export default routes;