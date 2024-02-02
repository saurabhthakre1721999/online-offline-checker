import React from "react";
import { useLottie } from "lottie-react";
import onlineAnimation from "../online.json";

const Online = () => {
  const options = {
    animationData: onlineAnimation,
    loop: true,
  };

  const { View } = useLottie(options);
  return <>{View}</>;
};
export default Online;
