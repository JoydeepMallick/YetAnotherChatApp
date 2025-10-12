import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./routes/Homepage/Homepage.jsx";
import DashboardPage from "./routes/Dashboardpage/Dashboardpage.jsx";
import ChatPage from "./routes/Chatpage/Chatpage.jsx";
import RootLayout from "./layouts/RootLayout/RootLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout.jsx";
import SignInPage from "./routes/SignInPage/SignInPage.jsx";
import SignUpPage from "./routes/SignUpPage/SignUpPage.jsx";

let router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
