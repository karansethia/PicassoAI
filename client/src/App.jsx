import React from "react";
import Home from "./Pages/Home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Community from "./Pages/Community/Community";
import PromptPanel from "./Pages/Prompt/PromptPanel";
import UserDash from "./Pages/User/UserDash";
import Pricing from "./Pages/Pricing/Pricing";

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/community", element: <Community />},
  {path: "/generate", element: <PromptPanel />},
  {path: "/user/:userId", element: <UserDash />},
  {path: "/pricing", element: <Pricing />},
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
