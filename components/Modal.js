import { AnimatePresence, motion } from "framer-motion";
import React, { useRef } from "react";
import { useOutsideAlerter } from "./hooks/useOutsideAlerter";
import classes from "./modal.module.css";
import { VscChromeClose } from "react-icons/vsc";
const Modal = ({ modal, setModal, children }) => {
  const v = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const v1 = {
    hidden: {
      opacity: 0,
      y: 33,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const ref = useRef(null);
  useOutsideAlerter(ref, setModal, ["mousedown", "scroll"]);
  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          variants={v}
          initial="hidden"
          animate="visible"
          className={classes.underlay}
          exit="hidden"
        >
          <motion.div
            ref={ref}
            exit="hidden"
            variants={v1}
            initial="hidden"
            className={classes.modal}
            animate="visible"
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className={classes.close} onClick={() => setModal(false)}>
              <VscChromeClose />
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
