import React from "react";
import classes from "./footer.module.css";
import Link from "next/link";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiInstagramLine,
  RiTwitterFill,
} from "react-icons/ri";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const Icon = ({ icon, link }) => {
    console.log(link);
    return (
      <div className={classes.icon}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      </div>
    );
  };
  const links = [
    { icon: <RiFacebookFill />, link: "https://web.facebook.com/cashiowallet" },
    // { icon: <RiLinkedinFill />, link: "/l" },
    {
      icon: <RiInstagramLine />,
      link: "https://www.instagram.com/cashio_wallet/",
    },
    { icon: <RiTwitterFill />, link: "https://twitter.com/cashio_wallet/" },
  ];
  return (
    <footer className={classes.main_cont}>
      <div className={classes.container}>
        <div className={classes.contact}>
          <span>Contact</span>
          <div className={classes.contact_addr}>
            <div>support@mycashiowallet.com</div>
            <div>50/52 Toyin Str, Ikeja, Lagos, Nigeria.</div>
            <div>224 Riverdale Ave, CA USA</div>
          </div>
        </div>
        <div className={classes.icon_cont}>
          {links.map((l, id) => {
            return (
              <div key={id} style={{ cursor: "pointer" }}>
                <Icon key={id} icon={l.icon} link={l.link} />
              </div>
            );
          })}
        </div>
        <div className={classes.terms}>
          <Link href="/terms-conditions">Terms of service</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
        <div className={classes.details}>
          Cashio a financial technology company is a payment platform solving
          social payment problem, helping millions using some sort of social
          media platform get the best of social financial capabilities in
          Africa.
          <br />
          <br /> Cashio has partnered with Kuda microfinance bank to provide a
          10-digit virtual account number in line with Nigeria uniform bank
          account number numbering system, such partnership has also provided
          secure management of our funds which are made available to respective
          owners through our web and mobile app. Cashio verifies users using
          encrypted hashed public tokens unique to each users along side
          appropriate personal/Business information including social asset which
          are securely connected to their Cashio wallet for social fund
          transfer.
          <br />
          <br /> Our AI powered financial bot are integrated with top social
          media platforms for seamless transactions, giving users complete
          experience of using social media platform for financial activities.
          <br />
          <br />
          The content on this website are brief descriptions of Cashio wallet
          services. By using this website, you agree to our terms and conditions
          and privacy policy.
        </div>
        <div className={classes.copy}>
          &copy; {new Date().getFullYear()} Cashio Financial Technology. All
          rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
