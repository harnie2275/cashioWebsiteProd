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
        <div style={{ fontSize: 14, color: "#242424" }}>
          Welcome to Cashio!
          <br />
          <Sentence>
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
          {/* <Sentence>
            In the event of a lack of clarity on the interpretation of one or
            multiple provisions of these general Terms and Conditions,
            interpretation must adhere to ‘the spirit’ of these provisions.
          </Sentence> */}
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
        <div className={classes.subHeader}>
          <br />
          Licence
        </div>
        <div className={classes.body}>
          <Sentence>
            License to use the services and tools offered through our site and:
            To use the Services, you are required to download and install the
            App. For this purpose, you represent and warrant that you are of the
            age of majority as per the Platform applicable laws to which you are
            subject to and are competent to understand, enter into, and comply
            with these Terms. The Company grants you a limited, non-exclusive,
            non-transferable, non-sub-licensable and revocable right to use the
            Platform. The Platform. is licensed and not sold to you and shall
            only be used as per these Terms.
          </Sentence>
          <Sentence>
            Scope of License: You may use the Platform on/from mobile phones,
            tablets or any other electronic devices.
          </Sentence>
          <Sentence>
            Maintenance & Support: You acknowledge that while the Company may,
            at its sole discretion, provide maintenance and support for the
            Platform from time to time, the Company shall have no specific
            obligation whatsoever to furnish such services to you.
          </Sentence>
          <Sentence>
            Updates/Upgrades: We may launch new updates/upgrades for the
            Platform., you may subscribe to the same through the Online Stores.
            In the event, you choose not to update/upgrade the Platform, certain
            features or functionality shall not be accessible to you.
          </Sentence>
        </div>
        <div className={classes.subHeader}>
          <br />
          Restrictions
        </div>
        <div className={classes.body}>
          <br />
          You agree not to:
          <b />
          <Sentence>
            Use the Platform for committing fraud, embezzlement, money
            laundering, or for any unlawful and/or illegal purposes.
          </Sentence>
          <Sentence>
            Reproduce, duplicate, copy, sell, resell or exploit any portion of
            the Platform.
          </Sentence>
          <Sentence>
            Upload, post, email, transmit or otherwise make available any
            content that is unlawful, harmful, threatening, abusive, harassing,
            torturous, defamatory, vulgar, obscene, libelous, invasive of
            another’s privacy, hateful, or racially, ethnically or otherwise
            objectionable through the Platform
          </Sentence>
          <Sentence>
            Forge headers or otherwise manipulate identifiers in order to
            disguise the origin of any content transmitted through the Platform.
            Upload, post, email, transmit or otherwise make available any
            content that you do not have a right to make available under any law
            or under contractual or fiduciary relationships (such as inside
            information, proprietary and confidential information learned or
            disclosed as part of employment relationships or under nondisclosure
            agreements).
          </Sentence>
          <Sentence>
            Upload, post, email, transmit or otherwise make available on the
            Platform, any content that infringes any patent, trademark, trade
            secret, copyright or other proprietary rights of any party.
          </Sentence>
          <Sentence>
            $
            {`Upload, post, email, transmit or otherwise make available on the Platform, any unsolicited or unauthorized advertising, promotionalmaterials, "junk mail," "spam", "chain letters," "pyramid schemes," or any other form of solicitation.`}
          </Sentence>
          <Sentence>
            Upload, post, email, transmit or otherwise make available on the
            Platform, any material that contains software viruses or any other
            computer code, files or programs designed to interrupt, destroy or
            limit the functionality of any computer software or hardware or
            telecommunications equipment.
          </Sentence>
          <Sentence>
            Disrupt the normal flow of or otherwise act in a manner that
            negatively affects other user’s ability to engage in real time
            exchanges.
          </Sentence>
          <Sentence>
            Interfere with or disrupt the Platform or servers or networks
            connected to the Platform, or disobey any requirements, procedures,
            policies or regulations of networks connected to the Platform.
          </Sentence>
          <Sentence>
            Intentionally or unintentionally violate any applicable local,
            state, national or international laws and any regulations having the
            force of law.
          </Sentence>
        </div>
        <div className={classes.subHeader}>
          <br />
          Proprietary Properties of the Company
        </div>
        <div className={classes.body}>
          <Sentence>
            You understand, acknowledge and agree that the Company is the sole
            owner of all rights, title and interest, including any and all
            intellectual property rights in the Platform, Services, logos, trade
            names, brand names, designs and any necessary software used in
            connection with the Platform except for Third Party logos, trade
            names, brand names, designs, which applicable proprietary rights
            shall vest in the third parties accordingly.
          </Sentence>
          <Sentence>
            There may be proprietary logos, service marks and trademarks found
            on the Platform whether owned/used by the Company or otherwise. By
            displaying them on the Platform, the Company is not granting you any
            license to utilize the proprietary logos, service marks, or
            trademarks. Any unauthorized use of the same may violate applicable
            intellectual property laws.
          </Sentence>
          <Sentence>
            You understand and acknowledge that the Platform is owned by the
            Company. Nothing under these Terms shall be deemed to be a transfer
            in ownership, rights, title, from the Company to you or any third
            party, in the Platform. You are entitled to avail the Service
            offered by the Company during the validity of your registration with
            the Company.
          </Sentence>
        </div>
        <div className={classes.subHeader}>
          <br />
          Links to Third Party
        </div>
        <div className={classes.body}>
          <Sentence>
            $
            {`The Platform may contain links to other websites owned and operated by third parties who are not related to the Platform ("Linked Websites"). The Linked Websites are not under the control of the Company and the Company shall not be responsible for the content of any Linked Websites or any hyperlink contained in a Linked Website and makes no representation or warranty with respect to the content of any such third-party sites.`}
          </Sentence>
          <Sentence>
            The Platform provides these links to you as a convenience only and
            the inclusion of any link does not imply any endorsement of the
            Linked Website by the Company. Your access or use of such Linked
            Website is entirely at your own risk. The Company shall not be a
            party to any transaction between you and the Linked Website. Your
            use of a Linked Website is subject to these terms and conditions of
            that respective Linked Website.
          </Sentence>
          <Sentence>
            The Platform may also contain third party advertisements, if any.
            The display of such advertisements does not in any way imply an
            endorsement or recommendation by/of the relevant advertiser, its
            products or services. You shall independently refer to the relevant
            advertiser for all information regarding the advertisement and its
            products and/or services. The Company accepts no responsibility for
            any interaction between you and the relevant third party and is
            released from any liability arising out of or in any way connected
            with such interaction.
          </Sentence>
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
