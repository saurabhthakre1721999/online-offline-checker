import { useEffect, useState } from "react";


function UseOnline() {
  const [status, setstatus] = useState(navigator.onLine)
 // const showonline = (e) =>
  //  setstatus(true);
 // };
  //const showofline = (e) => {
   // setstatus(false);
 // };
  useEffect(() => {
    window.addEventListener("online",(e)=>{
        setstatus(true)
    })
    window.addEventListener("offline", (e) => {
        setstatus(false);});
  }, []);
  console.log("status", status);

  return {status};
}
export default UseOnline; 
