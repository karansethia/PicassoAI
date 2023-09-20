import React from "react";
import Home from "./Pages/Home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Community from "./Pages/Community/Community";
import PromptPanel from "./Pages/Prompt/PromptPanel";

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/community", element: <Community />},
  {path: "/generate", element: <PromptPanel />},
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
