import { useState, useRef, useEffect, memo, useCallback } from "react";
import classes from "./header.module.css";
import Image from "next/image";
import MobileNav from "./MobileNav";
// import {  } from "react/cjs/react.production.min";
import { useRouter } from "next/router";
const Header = ({ appModal, setAppModal }) => {
  const [open, setOpen] = useState(false);
  const setNav = useCallback(
    (state) => {
      return setOpen(state);
    },
    [open]
  );
  const router = useRouter();

  return (
    <header className={classes.container}>
      <div className={classes.cont}>
        <div
          onClick={() => {
            router.push("/");
          }}
          style={{ cursor: "pointer" }}
        >
          <Image
            src="/logo.png"
            height={30}
            width={120}
            objectFit="contain"
            priority
            quality={100}
          />
        </div>

        <div
          className={`${classes.bar_cont} ${
            open ? classes.expand_bars : undefined
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className={`${classes.bar} ${classes.bar1}`}></div>
          <div className={`${classes.bar} ${classes.bar2}`}></div>
        </div>
        <div className={classes.btn_container}>
          <button onClick={() => setAppModal(true)}>Sign up</button>
          <button
            onClick={() => router.push("https://app.mycashiowallet.com/login")}
          >
            Login
          </button>
        </div>
      </div>
      <MobileNav
        open={open}
        setNav={setNav}
        setAppModal={setAppModal}
        appModal={appModal}
      />
    </header>
  );
};

export default memo(Header);
