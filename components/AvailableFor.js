import React from "react";
import classes from "./availablefor.module.css";
import { SiTwitter, SiWhatsapp } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
const AvailableFor = () => {
  const Icon = ({ icon }) => {
    return <div className={classes.icon}>{icon}</div>;
  };
  return (
    <div className={classes.container}>
      <span>Available for</span>
      <div className={classes.icon_cont}>
        <Icon icon={<SiWhatsapp />} />
        <Icon icon={<FaTelegramPlane />} />

        <Icon icon={<SiTwitter />} />
      </div>
    </div>
  );
};

export default AvailableFor;
