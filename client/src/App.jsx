import React from "react";
import Home from "./Pages/Home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {queryClient} from "./utils/http";
import {QueryClientProvider} from "@tanstack/react-query";
import "./App.css";
import Community from "./Pages/Community/Community";
import PromptPanel from "./Pages/Prompt/PromptPanel";
import UserDash, {loader as userInfoLoader} from "./Pages/User/UserDash";
import Pricing from "./Pages/Pricing/Pricing";
import Signin from "./Pages/Signin/Signin";
import RootLayout from "./Components/RootLayout";
import ProtectedRoute from "./Components/ProtectedRoute";

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
        element: (
          <ProtectedRoute>
            <PromptPanel />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user/:id",
        element: (
          <ProtectedRoute>
            <UserDash />
          </ProtectedRoute>
        ),
        loader: userInfoLoader, //todo add authentication before routing in this loader
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
