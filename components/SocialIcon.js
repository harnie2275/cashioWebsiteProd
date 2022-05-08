import React from "react";
import classes from "./featurecard.module.css";
import { motion } from "framer-motion";
const SocialIcon = ({ icon, label, to, comingSoon }) => (
  <motion.div
    whileHover={{ scale: 1.01, backgroundColor: "#00000007" }}
    className={classes.social_icon}
    onClick={() => {
      if (!comingSoon) {
        typeof window !== "undefined" && window.open(to, "_blank");
      }
    }}
  >
    {comingSoon && <span className={classes.coming_soon}>Coming soon</span>}
    <div style={{ backgroundColor: comingSoon && "#d7d7d7" }}> {icon}</div>
    <span style={{ color: comingSoon && "#d7d7d7" }}>{label}</span>
  </motion.div>
);

export default SocialIcon;
