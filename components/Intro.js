import React from "react";
import classes from "./intro.module.css";
import { motion } from "framer-motion";
const Intro = () => {
  const variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const childVariant = {
    hidden: {
      opacity: 0,
      y: 100,
      rotate: "10deg",
      transformOrigin: "left center",
    },
    visible: {
      opacity: 1,
      y: 0,
      transformOrigin: "left center",
      rotate: "0deg",
      transition: {
        type: "tween",
        // stiffness: 200,
        damping: 10,
        duration: 0.9,
      },
    },
  };
  return (
    <section className={classes.container}>
      <motion.div
        transition={{
          type: "tween",
          staggerChildren: 0.1,
          // when: "beforeChildren",
        }}
        initial="hidden"
        whileInView="visible"
        variants={variant}
        className={classes.intro_big}
      >
        <motion.span variants={childVariant}>Social Borderless </motion.span>
        <motion.span variants={childVariant}>Payments</motion.span>
      </motion.div>
      <div className={classes.intro_xs}>
        <span>Send, receive funds, pay bills and giveaways</span>
        <div className={classes.last_xs}>
          through Social Apps <div className={classes.line}></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
