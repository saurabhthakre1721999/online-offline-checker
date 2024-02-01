import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [status, setstatus] = useState("");

  useState(() => {
    window.addEventListener("offline", (e) => {
      setstatus("offline");
    });

    window.addEventListener("online", (e) => {
      setstatus("online");
    });
  }, []);

  console.log(navigator.onLine);
  return (
    <>
      <span>
        <h1> you are {status} </h1>
      </span>

      <span></span>
    </>
  );
}
export default App;
