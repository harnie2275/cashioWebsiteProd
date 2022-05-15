import React, { useState } from "react";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Paralax from "../../components/Paralax";
import classes from "./terms.module.css";
import { ParallaxProvider } from "react-scroll-parallax";
import FeatureCards from "../../components/FeatureCards";
import AvailableFor from "../../components/AvailableFor";
import FramerParalax from "../../components/FramerParalax";
import Download from "../../components/Download";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import Link from "next/link";
import modalStyles from "../../components/featurecard.module.css";
import SocialIcon from "../../components/SocialIcon";
import { SiTwitter, SiFacebook, SiInstagram } from "react-icons/si";
import Sentence from "../../components/Sentence";

import CookieAccept from "../../components/CookieAccept";
// import { useState } from "react/cjs/react.production.min";

const Terms = () => {
  const [modal, setModal] = useState(false);
  const [appModal, setAppModal] = useState(false);
  return (
    <main style={{ display: "grid", placeItems: "center" }}>
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
        <div>
          <h1>Terms and Conditions</h1>
        </div>
        <div style={{ fontSize: 14 }}>
          Welcome to Cashio!
          <br />
          <Sentence>
            $
            {` PLEASE READ THESE TERMS AND CONDITIONS ("Terms") CAREFULLY. THESE
            TERMS FORM A LEGAL AGREEMENT BETWEEN CASHIO FINANCIAL TECHNOLOGIES
            LIMITED AND YOU. By clicking ON "I ACCEPT" OR "I AGREE" OR By
            DOWNLOADING, INSTALLING OR OTHERWISE USING THE SERVICES, YOU ACCEPT
            AND AGREE TO THE TERMS CONTAINED HEREIN. IF YOU DO NOT AGREE TO
            THESE TERMS, DO NOT CLICK "I ACCEPT" OR "I AGREE" OR DOWNLOAD,
            INSTALL OR USE THE SERVICES.`}
          </Sentence>
        </div>
        <div className={classes.subHeader}>
          <br />
          General Provisions
        </div>
        <div className={classes.body}>
          <Sentence>
            These Terms and Conditions contain and constitute the entire
            understanding and agreement between us in connection with and about
            the subject matter of these Terms and Conditions and supersede all
            earlier and other agreements and understandings between us and all
            earlier representations by either of us about such subject matter.
            Any prior representations, warranties, statements, and assurances
            which are not expressly set out in these Terms and Conditions will
            be of no effect. Each party warrants that there is no
            representation, warranty, promise, term, condition, obligation or
            statement upon which they have relied in entering into these Terms
            and Conditions and which is not expressly set out in these Terms and
            Conditions and no such representation, warranty, promise,
            obligation, statement or any other term or condition is to be
            implied in them whether by virtue of any usage or course of dealing
            or otherwise (including by statute or common law) except as
            expressly set out in these Terms and Conditions.
          </Sentence>
          <Sentence>
            In the event of a lack of clarity on the interpretation of one or
            multiple provisions of these general Terms and Conditions,
            interpretation must adhere to ‘the spirit’ of these provisions.
          </Sentence>
          <Sentence>
            In the event of a lack of clarity on the interpretation of one or
            multiple provisions of these general Terms and Conditions,
            interpretation must adhere to ‘the spirit’ of these provisions.
          </Sentence>
          <Sentence>
            If a situation were to occur between the parties that is not covered
            by these general Terms and Conditions, the situation will have to be
            assessed while adhering to the spirit of these general Terms and
            Conditions.
          </Sentence>
          <Sentence>
            The Company reserves the right to reject use of the Platform or
            registration without having to state reasons or to make an agreement
            conditional on certain other requirements being met. If the Company
            decides to reject use of the Platform or registration, the Company
            will notify the person who submitted the registration within 10
            working days after receiving the registration.
          </Sentence>
        </div>

        <div className={classes.subHeader}>
          <br />
          Definitions
        </div>
        <div className={classes.body}>
          <Sentence>
            “Cashio Wallet” shall mean the website or online platform created,
            developed and designed by the Company for providing this Services.
          </Sentence>
          <Sentence>
            “Company” or “we” or “Cashio Wallet” shall mean fund Finance and
            Technologies Limited, a company incorporated under the Laws of the
            Federal Republic of Nigeria with its registered office.
          </Sentence>
          <Sentence>
            “Customer(s)” or “you” or “fundie” shall mean any person who
            accesses, downloads, uses, views the Platform and the Services
            rendered on it.
          </Sentence>
          <Sentence>
            “Online Stores” shall mean Windows Store, Android Google Play, iOS
            App store or any other online store or portal where the Platform
            will be made available by the Company to the fundie, from time to
            time.
          </Sentence>
          <Sentence>
            “Platform” shall mean the App and the Website collectively.
          </Sentence>
          <Sentence>
            “Service” shall mean the services of facilitating exchange of
            digital assets on social media, gifting money and vouchers between
            social media users, monetising engagements with brand-incentivised
            surveys, donation to charities and other notable causes, and
            charging for informal services.
          </Sentence>
          <Sentence>
            “Third Party” shall mean any individual, association, partnership,
            firm, company, corporation, consultant, Subcontractor, or
            combination thereof, including joint ventures, that is not a party
            to this Agreement.
          </Sentence>
          <Sentence>
            “User Data” shall mean any data, information, documents or materials
            submitted by the fundie to the Company prior to or during the use of
            the Platform.
          </Sentence>
          <Sentence>
            $
            {` "Website" shall mean https://.mycashoiowallet.com &
            https://app.mycashiowallet.com, managed and operated by the Company
            for the provision of Services.`}
          </Sentence>
        </div>
        <div className={classes.subHeader}>
          <br />
          Use The Platform.
        </div>
        <div className={classes.body}>
          <Sentence>In order to use the Online Platform, you must:</Sentence>
          <div style={{ marginLeft: 20 }}>
            <Sentence>
              1. Accept and agree to these Terms and our Privacy Policy.
            </Sentence>
            <Sentence>2. Be atleast 13 years of age.</Sentence>
            <Sentence>
              3. Register with us on the Website and social media.
            </Sentence>
            <Sentence>
              4. Provide all information requested by us, such as your name,
              email address, mobile device number, online credentials for your
              Bank Account, and such other details as we may request from time
              to time (“User Information”).
            </Sentence>
          </div>
        </div>
        <div style={{ marginTop: 50 }}>
          <Download />
          <CookieAccept />
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default Terms;
