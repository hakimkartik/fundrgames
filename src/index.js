import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./index.css";
import App from "./Routes/App";
import Homes from "./Routes/Homes";
import reportWebVitals from "./reportWebVitals";
import GameLogin from "./Routes/GameLogin";
import DevLogin from "./Routes/DevLogin";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import GameRigister from "./Routes/GameRegister";
import DevRegister from "./Routes/DevRegister";
import Game from "./Routes/Game";
import Overview from "./Routes/Overview";
import FAQ from "./Routes/FAQ";
import Terms from "./Routes/Terms";
import Updates from "./Routes/Updates";
import Community from "./Routes/Community";
import CreateGame from "./Routes/CreateGame";
import CreateStory from "./Routes/CreateStory";
import CreateNav from "./Components/CreateNavBar";
import CreateAboutYou from "./Routes/createAboutYou";
import CreateAwards from "./Routes/CreateAwards";
import CreatePayments from "./Routes/CreatePayments";
import CreateLaunch from "./Routes/CreateLauch";
import { Helmet } from "react-helmet";
import GamerProfile from "./Routes/GamerProfile";
import {fetchGameById} from "./Services"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homes />,
      },
      {
        path: "/gamelogin",
        element: <GameLogin />,
      },
      {
        path: "/devlogin",
        element: <DevLogin />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/gameregister",
        element: <GameRigister />,
      },
      {
        path: "/devregister",
        element: <DevRegister />,
      },
      {
        path: "/game/:id",
        element: <Game />,
        children: [
          {
            path: "/game/:id",
            element: <Overview />,
          },
          {
            path: "/game/:id/faq",
            element: <FAQ />,
          },
          {
            path: "/game/:id/terms",
            element: <Terms />,
          },
          {
            path: "/game/:id/updates",
            element: <Updates />,
          },
          {
            path: "/game/:id/community",
            element: <Community />,
          },
        ],
      },
      {
        path: "/create",
        element: <CreateGame />,
      },
      {
        path: "/create/story",
        element: <CreateStory />,
      },
      {
        path: "/create/about",
        element: <CreateAboutYou />,
      },
      {
        path: "/create/rewards",
        element: <CreateAwards />,
      },
      {
        path: "/create/payments",
        element: <CreatePayments />,
      },
      {
        path: "/create/launch",
        element: <CreateLaunch />,
      },
      {
        path: "/gamer",
        element: <GamerProfile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <script>
        {`
           (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3212010,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </script>
    </Helmet>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
