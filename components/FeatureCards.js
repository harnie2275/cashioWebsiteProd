import React from "react";
import classes from "./featurecard.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import send from "../public/send.png";
import { BsArrowRight } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import gift from "../public/gift.png";
import bill from "../public/bill.png";
import mobile from "../public/mobile.png";
import cart from "../public/shopping-cart.png";
import shop from "../public/shop.png";
import sendmoney from "../public/money-send.png";
import Modal from "./Modal";
import { SiTwitter, SiFacebook, SiInstagram } from "react-icons/si";
import { useRouter } from "next/router";
import SocialIcon from "./SocialIcon";
const FeatureCards = ({ modal, setModal }) => {
  const containerVariant = {
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
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",

        duration: 0.9,
        damping: 10,
        // stiffness: 100,
      },
    },
  };
  const CardAction = ({ action, color, comingsoon }) => {
    if (comingsoon) {
      return (
        <div
          style={{
            color: color,

            alignItems: "center",
          }}
          className={classes.card_action}
        >
          {<MdTimer style={{ fontSize: "18px" }} />}
          <span style={{ alignItems: "center" }}>
            {comingsoon ? "Coming soon" : action}
          </span>{" "}
        </div>
      );
    }
    return (
      <div
        style={{
          color: color,
          //   flexDirection:  && "row-reverse",
          alignItems: "center",
        }}
        className={classes.card_action}
      >
        <span style={{ alignItems: "center" }}>{action}</span> <BsArrowRight />
      </div>
    );
  };

  const hover = {
    scale: 1.02,
    duration: 0.1,
    transformOrigin: "center",
  };
  const router = useRouter();
  return (
    <motion.section className={classes.container}>
      <Modal modal={modal} setModal={setModal}>
        <div className={classes.modal_title}>Select preferred social media</div>
        <div className={classes.social_icon_cont}>
          <SocialIcon
            icon={<SiTwitter />}
            to={`https://twitter.com/intent/tweet?text=@cashio_wallet%20send%20funds%20to%20@twitter_handle`}
            label="Twitter"
          />
          <SocialIcon icon={<SiFacebook />} comingSoon label="Facebook" />
          <SocialIcon icon={<SiInstagram />} comingSoon label="Instagram" />
        </div>
      </Modal>
      <motion.div className={classes.main_cont}>
        <motion.div
          initial="hidden"
          variants={containerVariant}
          whileInView="visible"
          transition={{ staggerChildren: 0.2, type: "tween" }}
          className={`${classes.feature_container1}`}
        >
          <motion.div
            whileHover={hover}
            onClick={() => setModal(true)}
            variants={childVariant}
            className={`${classes.card1} ${classes.card} `}
          >
            <div className={classes.child1}>
              <span className={classes.title}>Send Money</span>
              <div className={classes.card_text}>
                <div>
                  {" "}
                  Send, Funds through your favourite and preferred Social Media
                  platform
                </div>
                <CardAction action="Send money" color="#4A0594" />
              </div>
            </div>
            <div className={classes.child2}>
              <Image src={send} priority quality={100} objectFit="contain" />
            </div>
          </motion.div>
          <motion.div
            whileHover={hover}
            variants={childVariant}
            className={`${classes.card2} ${classes.card} ${classes.centered}`}
            onClick={() => {
              router.push("https://app.mycashiowallet.com/beneficiaries");
            }}
          >
            {/* </div> */}
            <span className={classes.title}>Request Money</span>
            <div className={classes.card_text}>
              {" "}
              Request Funds from connected friends through your favorite and
              preferred Social Media app/platform.
            </div>
            <CardAction action="Request money" color="#1A49B2" />
          </motion.div>
        </motion.div>
        <motion.div
          className={classes.feature_container2}
          variants={containerVariant}
          whileInView="visible"
          initial="hidden"
          transition={{ staggerChildren: 0.3, type: "tween" }}
        >
          <motion.div
            whileHover={hover}
            variants={childVariant}
            className={`${classes.card} ${classes.card3}`}
          >
            <div className={classes.card3_flex}>
              <span className={classes.title}>Giveaways</span>
              <div className={classes.card_text}>
                <div>
                  {" "}
                  Sponsor and disburse giveaway payment with a one-touch click
                  without switching apps
                </div>
                <CardAction comingsoon action="Giveaway" color="#AC8C20" />
              </div>
            </div>
            <div className={classes.icon_container}>
              <div className={`${classes.card_icon} ${classes.gift}`}>
                <Image
                  src={gift}
                  layout="fill"
                  objectFit="contain"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={hover}
            variants={childVariant}
            className={`${classes.card} ${classes.card4}`}
          >
            <div className={classes.card3_flex}>
              <span className={classes.title}>Pay Bills</span>
              <div className={classes.card_text}>
                <div>
                  {" "}
                  Make grocery, utility and miscellaneous payments with ease via
                  your favorite SM platform
                </div>
                <CardAction comingsoon color="#1215BA" />
              </div>
            </div>
            <div className={classes.icon_container}>
              <div className={`${classes.card_icon} ${classes.gift}`}>
                <Image
                  src={bill}
                  layout="fill"
                  objectFit="contain"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={hover}
            variants={childVariant}
            className={`${classes.card} ${classes.card5}`}
          >
            <div className={classes.card_flex}>
              <span className={classes.title}>Airtime Topup</span>
              <div className={classes.card_text}>
                <div>
                  {" "}
                  Save up cost on charges, keep your line recharged and active.
                </div>
                <CardAction comingsoon color="#990000" />
              </div>
            </div>
            <div className={classes.icon_container}>
              <div className={`${classes.card_icon} ${classes.gift}`}>
                <Image
                  src={mobile}
                  layout="fill"
                  objectFit="contain"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={hover}
            variants={childVariant}
            className={`${classes.card} ${classes.card6}`}
          >
            <div className={classes.card_flex}>
              <span className={classes.title}>Checkout</span>
              <div className={classes.card_text}>
                <div>
                  {" "}
                  Process payment, generate invoice, as a solo operator
                  (freelancers, indie, resellers, etc.) with ease
                </div>
                <CardAction comingsoon color="#0D4038" />
              </div>
            </div>
            <div className={classes.icon_container}>
              <div className={`${classes.card_icon} ${classes.gift}`}>
                <Image
                  src={cart}
                  layout="fill"
                  objectFit="contain"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={hover}
            variants={childVariant}
            className={`${classes.card} ${classes.card7}`}
          >
            <div className={classes.card_flex}>
              <span className={classes.title}>Cashio for Business</span>
              <div className={classes.card_text}>
                <div>
                  Accept payment from customer anywhere around the world
                </div>
                <CardAction comingsoon color="#664A00" />
              </div>
            </div>
            <div className={classes.icon_container}>
              <div className={`${classes.card_icon} ${classes.gift}`}>
                <Image
                  src={shop}
                  layout="fill"
                  objectFit="contain"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={hover}
            variants={childVariant}
            className={`${classes.card} ${classes.card8}`}
          >
            <div className={classes.card_flex}>
              <span className={classes.title}>P2P Loan</span>
              <div className={classes.card_text}>
                <div>
                  Obtain and secure loans for your business and personal use
                  from connected friends.
                </div>
                <CardAction comingsoon color="#135353" />
              </div>
            </div>
            <div className={classes.icon_container}>
              <div className={`${classes.card_icon} ${classes.gift}`}>
                <Image
                  src={sendmoney}
                  layout="fill"
                  objectFit="contain"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default FeatureCards;
