import styles from "./assets/css/Moreabout.module.scss";
import SNS from "./assets/img/ico_sns.png";
import telegram from "./assets/img/ico_telegram.png";
import twitter from "./assets/img/ico_twitter.png";
import youtube from "./assets/img/ico_youtube.png";
import facebook from "./assets/img/ico_facebook.png";
import wemix from "./assets/img/img_wemix.png";
import wemixplay from "./assets/img/img_wemixplay.png";
import nile from "./assets/img/img_nile.png";
import wemixfi from "./assets/img/img_wemixfi.png";
import rightArw from "./assets/img/arw_right.png";
import { useState } from "react";

const Moreabout = () => {
  const [ecosystems, setecosystems] = useState([
    {
      id: "WEMIX",
      name: wemix,
      content:
        "Welcome to the open-source programmable future of Web3 era. WEMIX3.0 is an experience-based, platform-driven and service-oriented decentrailized blockchain protocol built as the foundation of a borderless mega-ecosystem.",
    },
    {
      id: "WEMIXPLAY",
      name: wemixplay,
      content:
        "The world's largest and fastest P&E gaming platform that implements the 'Pay' segment into the experience cycle of global gamers.",
    },
    {
      id: "NILE",
      name: nile,
      content:
        "the next generation DAO-powered community platform built for creation, facilitaion and management of projects based on smart contracts, innovating opportunities through collective potential.",
    },
    {
      id: "WEMIX.Fi",
      name: wemixfi,
      content:
        "A secure on-chain DeFi platform that supports storage exchange, borrowing, settlement and investment of crypto-assets powered by oracies that collect, analyze, and broadcast data propagated form a variety of sources for security and vaildation.",
    },
  ]);

  const [snss, setsnss] = useState([
    {
      id: "idontknow",
      ico: SNS,
      href: "#SNS",
    },
    {
      id: "telegram",
      ico: telegram,
      href: "#telegram",
    },
    {
      id: "twitter",
      ico: twitter,
      href: "#twitter",
    },
    {
      id: "youtube",
      ico: youtube,
      href: "#youtube",
    },
    {
      id: "facebook",
      ico: facebook,
      href: "#facebook",
    },
  ]);

  return (
    <div className={styles.moreabout}>
      <div className={styles.title}>
        <em>More about WEMIX3.0</em>
      </div>
      <div className={styles.communications}>
        <em>Communications</em>
        <div className={styles.SNSs}>
          {snss.map((SNS) => (
            <li key={SNS.id} className={styles.snsIco}>
              <a href={SNS.href}>
                <img src={SNS.ico} alt={SNS.id} />
              </a>
            </li>
          ))}
        </div>
      </div>
      <div className={styles.ecosystem}>
        <em>WEMIX Mega-ecosystem</em>
        <ul className={styles.rightcontainer}>
          {ecosystems.map((eco) => (
            <li key={eco.id} className={styles.cell}>
              <a href="#wemix">
                <img className={styles.name} src={eco.name} alt="wemix" />
                <img
                  className={styles.rightArw}
                  src={rightArw}
                  alt="오른쪽화살표"
                />
              </a>
              <p>{eco.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Moreabout;
