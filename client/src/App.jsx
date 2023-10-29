import React from "react";
import Home from "./Pages/Home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Community from "./Pages/Community/Community";
import PromptPanel from "./Pages/Prompt/PromptPanel";
import UserDash from "./Pages/User/UserDash";
import Pricing from "./Pages/Pricing/Pricing";
import Signin from "./Pages/Signin/Signin";
import RootLayout from "./Components/RootLayout";

// const router = createBrowserRouter([
//   {path: "/", element: <Home />},
//   {path: "/community", element: <Community />},
//   {path: "/generate/:id", element: <PromptPanel />},
//   {path: "/user/:id", element: <UserDash />},
//   {path: "/pricing", element: <Pricing />},
//   {path: "/signin", element: <Signin />},
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <Home />},
      {path: "/community", element: <Community />},
      {path: "/pricing", element: <Pricing />},
      {path: "/signin", element: <Signin />},
      {
        path: "/generate/:id",
        element: <PromptPanel />,
        // loader: () => {}
      },
      {
        path: "/user/:id",
        element: <PromptPanel />,
        // loader: () => {}
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
