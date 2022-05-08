import React, { useState, useEffect } from "react";
import classes from "./cookieaccepts.module.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react/cjs/react.production.min";
const CookieAccept = () => {
  const [cookie, setCookie] = useState(true);

  const v = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 3,
      },
    },
  };
  useEffect(() => {
    const isAccept = JSON.parse(localStorage.getItem("cookieAccept"));
    setCookie(!isAccept);
  }, []);
  const acceptCookie = async () => {
    typeof window !== "undefined" &&
      (await localStorage.setItem("cookieAccept", true));
  };
  return (
    <AnimatePresence>
      {cookie && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={v}
          className={classes.container}
          exit="hidden"
        >
          <div className={classes.main_cont}>
            <div className={classes.title}>Cookies {"&"} Terms</div>
            <span>
              This website uses cookies to ensure the best experience for our
              users and by using this site, you agree to our{" "}
              <Link href="/terms">Terms of service</Link>
            </span>
            <div className={classes.btn_cont}>
              <button
                onClick={() => {
                  acceptCookie().then(() => {
                    setCookie(false);
                  });
                }}
              >
                Got it
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieAccept;
