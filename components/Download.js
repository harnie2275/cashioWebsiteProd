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
          App Store
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
          Google play
        </div>
      </div>
    </div>
  );
};

export default Download;
