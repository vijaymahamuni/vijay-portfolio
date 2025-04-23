import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Blog from "./components/Blog";
import MyDeveloperJouney from "./components/MyDeveloperJourney";
import { ThemeProvider } from "./utils/ThemeContext";
import Experience from "./components/Experience";
import About_me from "./components/About_me";
import { ChakraProvider } from "@chakra-ui/react";
const AppLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-white dark:bg-gray-700">
      <React.StrictMode>
        <ThemeProvider>
          <App />
          {/* <ChakraProvider> */}
          <Outlet />
          {/* </ChakraProvider> */}
        </ThemeProvider>
      </React.StrictMode>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about-me",
        element: <About_me />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/portfolio",
        element: <Experience />,
      },
      // {
      //   path: "/blog",
      //   element: <Blog />,
      // },
      {
        path: "/blog/:blogTitle",
        element: <MyDeveloperJouney />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
