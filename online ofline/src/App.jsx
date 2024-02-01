import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { toast, Bounce } from "react-toastify";
import UseOnline from "./useonline";
function App() {
  const { status } = UseOnline();

  return (
    <>
      {status
        ? toast.success("you are online !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          })
        : toast.error(" you are ofline!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          })}
    </>
  );
}
export default App;
