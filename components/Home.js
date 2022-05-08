import React, { useState } from "react";
import Header from "./Header";
import Intro from "./Intro";
import Paralax from "./Paralax";
import classes from "./home.module.css";
import { ParallaxProvider } from "react-scroll-parallax";
import FeatureCards from "./FeatureCards";
import AvailableFor from "./AvailableFor";
import FramerParalax from "./FramerParalax";
import Download from "./Download";
import Footer from "./Footer";
import Modal from "./Modal";
import Link from "next/link";
import modalStyles from "./featurecard.module.css";
import SocialIcon from "./SocialIcon";
import { SiTwitter, SiFacebook, SiInstagram } from "react-icons/si";

import CookieAccept from "./CookieAccept";
// import { useState } from "react/cjs/react.production.min";
console.log("Home");
const Home = () => {
  const [modal, setModal] = useState(false);
  const [appModal, setAppModal] = useState(false);
  return (
    <main>
      <Modal modal={appModal} setModal={setAppModal}>
        <div className={modalStyles.modal_title}>
          {"Where'd you like to sign up from?"}
        </div>
        <div className={modalStyles.social_icon_cont}>
          <SocialIcon
            icon={<SiTwitter />}
            to={`https://twitter.com/intent/tweet?text=@cashio_wallet%20register%20me`}
            label="Twitter"
          />
          <SocialIcon icon={<SiFacebook />} comingSoon label="Facebook" />
          <SocialIcon icon={<SiInstagram />} comingSoon label="Instagram" />
        </div>
        <Link href="https://app.mycashiowallet.com/sign-up">
          <a className={classes.link}>Continue in browser</a>
        </Link>
      </Modal>
      <Header appModal={appModal} setAppModal={setAppModal} />
      <section className={classes.hero}>
        <Intro />
        <ParallaxProvider>
          <Paralax />
        </ParallaxProvider>
        <AvailableFor />
        {/* <FramerParalax>Im tired</FramerParalax> */}
        <FeatureCards modal={modal} setModal={setModal} />
        <Download />
        <CookieAccept />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
