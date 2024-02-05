import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";

import Home from "./Home.jsx";
import Localform from "./components/molecule/formlocal/formlocal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Localform />
    <ToastContainer limit={1} />
  </React.StrictMode>
);
