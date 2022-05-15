import React from "react";
import classes from "./download.module.css";
import Image from "next/image";
const Download = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        Download the app to enjoy the boundless benefits
      </div>
      <div className={classes.d_cont}>
        <div>
          <Image
            src="/apple.png"
            width={14}
            height={14}
            layout="fixed"
            objectFit="contain"
            quality={100}
          />
          <span style={{ display: "grid" }}>
            <span style={{ fontSize: 10 }}>coming soon on</span>
            App Store
          </span>
        </div>
        <div>
          {" "}
          <Image
            src="/google.png"
            width={14}
            height={14}
            layout="fixed"
            objectFit="contain"
            quality={100}
          />
          <span style={{ display: "grid" }}>
            <span style={{ fontSize: 10 }}>coming soon on</span>
            Google play
          </span>
        </div>
      </div>
    </div>
  );
};

export default Download;
