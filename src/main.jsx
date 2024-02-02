import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Offline from "./components/Atoms/Offline.jsx";
import Online from "./components/Atoms/Online.jsx";
import Home from "./Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <ToastContainer limit={1} />
  </React.StrictMode>
);
