import React from "react";
import classes from "./paralax.module.css";
import Image from "next/image";
import iphone from "../public/iphone.png";
import wave from "../public/wave.png";
import wave2 from "../public/wave2.png";
import curve from "../public/curve.svg";
import qr from "../public/qr.png";
import { motion } from "framer-motion";

import { useParallax, Parallax } from "react-scroll-parallax";
import FramerParalax from "./FramerParalax";
const Paralax = () => {
  //   const { ref } = useParallax({
  //     speed: -10,
  //     easing: "easeInOut",
  //     // translateY: [50, 50],
  //   });
  return (
    <div className={classes.main_cont}>
      <motion.div
        className={classes.wave}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {" "}
        <Image src={wave} priority quality={100} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={classes.wave2}
      >
        <Image src={wave2} priority quality={100} />
      </motion.div>
      <div className={classes.overall_cont}>
        <div className={classes.main_paralax_container}>
          <motion.div
            className={classes.qr_cont}
            initial={{ opacity: 0, y: -40, rotate: "7deg" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, type: "tween", damping: 10 }}
          >
            <Image src={qr} quality={100} priority objectFit="contain" />
          </motion.div>
          <div className={classes.container}>
            <div className={classes.curve}>
              <span> Scan to download Cashio</span>
              <div className={classes.twirl}>
                <Image src={curve} />
              </div>
            </div>
            {/* <Parallax translateY={[-60, 50]}> */}
            <FramerParalax offset={80} className={classes.img_cont}>
              <Image
                src={iphone}
                //   width={350}
                //   height={1000}

                priority
                quality={100}
                objectFit="contain"
                //   layout="fixed"
              />
            </FramerParalax>

            {/* </Parallax> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paralax;
