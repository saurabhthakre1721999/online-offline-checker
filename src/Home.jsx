import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { toast, Bounce } from "react-toastify";
import UseOnline from "./useonline";
import Online from "./components/Atoms/Online";
import Offline from "./components/Atoms/Offline";
function Home() {
  const { status } = UseOnline();
  const online = () => {
    toast.success("You are online !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const ofline = () => {
    toast.error(" You are offline!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return <>{status ? (online(), (<Online />)) : (ofline(), (<Offline />))}</>;
}
export default Home;
