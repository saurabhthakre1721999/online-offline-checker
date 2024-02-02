import React from "react";
import { useLottie } from "lottie-react";
import oflineAnimation from "./offline.json";

const Offline = () => {
  const options = {
    animationData: oflineAnimation,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <>
      {" "}
      <div> {View}</div>
    </>
  );
};
export default Offline;
