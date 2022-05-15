import React, { memo, useRef } from "react";
import classes from "./mobilenav.module.css";
import { AnimatePresence, motion } from "framer-motion";
// import { memo } from "react/cjs/react.production.min";
import { MdClose } from "react-icons/md";
import { useOutsideAlerter } from "./hooks/useOutsideAlerter";
import Link from "next/link";
import Image from "next/image";
const MobileNav = ({ open, setNav, appModal, setAppModal }) => {
  const variant = {
    hidden: {
      opacity: 0,
      // scale,
    },
    visible: {
      opacity: 1,
      //   x: 0,
      transition: {
        type: "tween",
        // when: "afterChildren",
      },
    },
  };
  const child = {
    hidden: {
      opacity: 0,
      x: 800,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        when: "beforeParent",
      },
    },
  };
  const ref = useRef(null);
  useOutsideAlerter(ref, setNav, ["mousedown", "scroll"]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={classes.underlay}
          exit="hidden"
          variants={variant}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            ref={ref}
            className={classes.container}
            initial="hidden"
            animate="visible"
            variants={child}
            exit="hidden"
          >
            {/* <div className={classes.close}>
              <div onClick={() => setNav(false)}>
                <MdClose />
              </div>
            </div> */}
            <div className={classes.flexInner}>
              <div className={classes.flex1}>
                <Link href="https://app.mycashiowallet.com/login">Login</Link>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setAppModal(true);
                    setNav(false);
                  }}
                >
                  Sign Up
                </a>
              </div>
              <div className={classes.btn_cont}>
                <button>
                  <Image
                    src="/apple.png"
                    height={16}
                    width={16}
                    objectFit="contain"
                    quality={100}
                    priority
                  />
                  <span style={{ display: "grid" }}>
                    <span style={{ fontSize: 9 }}>coming soon on</span>
                    App Store
                  </span>
                </button>
                <button>
                  {" "}
                  <Image
                    src="/google.png"
                    height={14}
                    width={14}
                    objectFit="contain"
                    quality={100}
                    priority
                  />
                  <span style={{ display: "grid" }}>
                    <span style={{ fontSize: 10 }}>coming soon on</span>
                    Play Store
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
