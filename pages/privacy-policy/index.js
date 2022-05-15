import React, { useState } from "react";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Paralax from "../../components/Paralax";
import classes from "./privacy.module.css";
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

const Privacy = () => {
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
          <h1>Privacy Policy</h1>
        </div>
        <div style={{ fontSize: 14, color: "#242424" }}>
          <Sentence>
            {` Cashio Financial Technologies respects the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application.  Please read this Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APPLICATION.`}
          </Sentence>
          <Sentence>
            We reserve the right to make changes to this Privacy Policy at any
            time and for any reason. We will alert you about any changes by
            updating the “Last updated” date of this Privacy Policy. You are
            encouraged to periodically review this Privacy Policy to stay
            informed of updates. You will be deemed to have been made aware of,
            will be subject to, and will be deemed to have accepted the changes
            in any revised Privacy Policy by your continued use of the
            Application after the date such revised Privacy Policy is posted.
          </Sentence>
          <Sentence>
            This Privacy Policy does not apply to the third-party online/mobile
            store from which you install the Application or make payments, which
            may also collect and use data about you. We are not responsible for
            any of the data collected by any such third party.
          </Sentence>
        </div>
        <div className={classes.subHeader}>
          <br />
          COLLECTION OF YOUR INFORMATION
        </div>
        <div className={classes.body}>
          <Sentence>
            We may collect information about you in a variety of ways. The
            information we may collect via the Application depends on the
            content and materials you use, and includes:
          </Sentence>
          <div className={classes.subHeader} style={{ fontSize: 12 }}>
            <br />
            Personal Data
          </div>
          <Sentence>
            Demographic and other personally identifiable information (such as
            your name and email address) that you voluntarily give to us when
            choosing to participate in various activities related to the
            Application, such as sharing username, receiving payments, making
            payments. If you choose to share data about yourself via your
            profile, online chat, or other interactive areas of the Application,
            please be advised that all data you disclose in these areas is
            public and your data will be accessible to anyone who accesses the
            Application.
          </Sentence>
          <div className={classes.subHeader} style={{ fontSize: 12 }}>
            <br />
            Derivative Data
          </div>
          <Sentence>
            Information our servers automatically collect when you access the
            Application, such as phone contacts to determine users that already
            use the Application, but we do not store Contact Information on our
            servers.
          </Sentence>
          <div className={classes.subHeader} style={{ fontSize: 12 }}>
            <br />
            Financial Data
          </div>
          <Sentence>
            Financial information, such as data related to your payment method
            (e.g. valid credit/debit card number, card brand, expiration date)
            that we may collect when you fund your Cashio Wallet wallet. [We
            store Bank Account Number, However, we do not store card details,
            all financial information is stored by our payment processor, [[Kuda
            MFB](https://kuda.com/)], and you are encouraged to review their
            privacy policy and contact them directly for responses to your
            questions.
          </Sentence>
          <div className={classes.subHeader} style={{ fontSize: 12 }}>
            <br />
            Mobile Device Data
          </div>
          <Sentence>
            Device information such as your mobile device ID number, model, and
            manufacturer, version of your operating system, phone number,
            country, location, and any other data you choose to provide.
          </Sentence>
          <div className={classes.subHeader} style={{ fontSize: 12 }}>
            <br />
            Push Notifications
          </div>
          <Sentence>
            We may request to send you push notifications regarding your account
            or the Application. If you wish to opt-out from receiving these
            types of communications, you may turn them off in your device’s
            settings.
          </Sentence>
        </div>

        <div className={classes.subHeader}>
          <br />
          USE OF YOUR INFORMATION
        </div>
        <div className={classes.body}>
          <Sentence>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Application to:
          </Sentence>
          <div style={{ marginLeft: 20 }}>
            <Sentence>
              1. Assist law enforcement and respond to subpoena.
            </Sentence>
            <Sentence>
              2. Compile anonymous statistical data and analysis for use
              internally or with third parties.
            </Sentence>
            <Sentence>3. Create and manage your account.</Sentence>
            <Sentence>
              4. Deliver targeted advertising, coupons, newsletters, and other
              information regarding promotions and the Application to you.
            </Sentence>
            <Sentence>5. Email you regarding your account.</Sentence>
            <Sentence>6. Enable user-to-user communications.</Sentence>
            <Sentence>
              7. Fulfill and manage payments, and other transactions related to
              the Application.
            </Sentence>
            <Sentence>
              8. Generate a personal profile about you to make future visits to
              the Application more personalized.
            </Sentence>
            <Sentence>
              9. Increase the efficiency and operation of the Application.
            </Sentence>
            <Sentence>
              10. Monitor and analyze usage and trends to improve your
              experience with the Application.
            </Sentence>
            <Sentence>11. Notify you of updates to the Application.</Sentence>
            <Sentence>
              12. Perform other business activities as needed.
            </Sentence>
            <Sentence>
              13. Prevent fraudulent transactions, monitor against theft, and
              protect against criminal activity.
            </Sentence>
            <Sentence>14. Process payments and refunds.</Sentence>
            <Sentence>
              15. Request feedback and contact you about your use of the
              Application.
            </Sentence>
            <Sentence>16. Resolve disputes and troubleshoot problems.</Sentence>
            <Sentence>
              17. Respond to product and customer service requests.
            </Sentence>
            <Sentence>18. Send you a newsletter.</Sentence>
          </div>
        </div>
        <div className={classes.subHeader}>
          <br />
          DISCLOSURE OF YOUR INFORMATION
        </div>
        <div className={classes.body}>
          <Sentence>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </Sentence>

          <div className={classes.subHeader} style={{ fontSize: 12 }}>
            <br />
            By Law or to Protect Rights
          </div>
          <Sentence>
            If we believe the release of information about you is necessary to
            respond to legal process, to investigate or remedy potential
            violations of our policies, or to protect the rights, property, and
            safety of others, we may share your information as permitted or
            required by any applicable law, rule, or regulation. This includes
            exchanging information with other entities for fraud protection and
            credit risk reduction.
          </Sentence>
          <div className={classes.subHeader} style={{ fontSize: 12 }}>
            <br />
            Third-Party Service Providers
          </div>
          <Sentence>
            We may share your information with third parties that perform
            services for us or on our behalf, including payment processing, data
            analysis, email delivery, hosting services, customer service, and
            marketing assistance.
          </Sentence>
          <div className={classes.subHeader} style={{ fontSize: 12 }}>
            <br />
            Marketing Communications
          </div>
          <Sentence>
            With your consent, or with an opportunity for you to withdraw
            consent, we may share your information with third parties for
            marketing purposes, as permitted by law.
          </Sentence>
          <div className={classes.subHeader} style={{ fontSize: 12 }}>
            <br />
            Interactions with Other Users
          </div>
          <Sentence>
            If you interact with other users of the Application, those users may
            see your name, profile photo, and descriptions of your activity,
            including making payments to them, or requesting payment.
          </Sentence>
          <div className={classes.subHeader} style={{ fontSize: 12 }}>
            <br />
            Other Third Parties
          </div>
          <Sentence>
            We may share your information with investors for the purpose of
            conducting general business analysis. We may also share your
            information with such third parties for marketing purposes, as
            permitted by law.
          </Sentence>
          <div className={classes.subHeader} style={{ fontSize: 12 }}>
            <br />
            Sale or Bankruptcy
          </div>
          <Sentence>
            If we reorganize or sell all or a portion of our assets, undergo a
            merger, or are acquired by another entity, we may transfer your
            information to the successor entity. If we go out of business or
            enter bankruptcy, your information would be an asset transferred or
            acquired by a third party. You acknowledge that such transfers may
            occur and that the transferee may decline honor commitments we made
            in this Privacy Policy.
          </Sentence>
          <Sentence>
            We are not responsible for the actions of third parties with whom
            you share personal or sensitive data, and we have no authority to
            manage or control third-party solicitations. If you no longer wish
            to receive correspondence, emails or other communications from third
            parties, you are responsible for contacting the third party
            directly.
          </Sentence>
        </div>
        <div className={classes.subHeader}>
          <br />
          THIRD-PARTY WEBSITES
        </div>
        <div className={classes.body}>
          <Sentence>
            The Application may contain links to third-party websites and
            applications of interest, including advertisements and external
            services, that are not affiliated with us. Once you have used these
            links to leave the Application, any information you provide to these
            third parties is not covered by this Privacy Policy, and we cannot
            guarantee the safety and privacy of your information. Before
            visiting and providing any information to any third-party websites,
            you should inform yourself of the privacy policies and practices (if
            any) of the third party responsible for that website, and should
            take those steps necessary to, in your discretion, protect the
            privacy of your information. We are not responsible for the content
            or privacy and security practices and policies of any third parties,
            including other sites, services or applications that may be linked
            to or from the Application.
          </Sentence>
        </div>
        <div className={classes.subHeader}>
          <br />
          SECURITY OF YOUR INFORMATION
        </div>
        <div className={classes.body}>
          <br />
          Account Information:
          <b />
          <Sentence>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse. Any
            information disclosed online is vulnerable to interception and
            misuse by unauthorized parties. Therefore, we cannot guarantee
            complete security if you provide personal information.
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

export default Privacy;
