import styles from "../assets/css/Moreabout.module.scss";
import medium from "../assets/img/ico_medium.png";
import telegram from "../assets/img/ico_telegram.png";
import twitter from "../assets/img/ico_twitter.png";
import youtube from "../assets/img/ico_youtube.png";
import facebook from "../assets/img/ico_facebook.png";
import wemix from "../assets/img/img_wemix.png";
import wemixplay from "../assets/img/img_wemixplay.png";
import nile from "../assets/img/img_nile.png";
import wemixfi from "../assets/img/img_wemixfi.png";
import rightArw from "../assets/img/arw_right.png";
import { useState } from "react";

const Moreabout = () => {
  const [ecosystems, setecosystems] = useState([
    {
      id: "WEMIX",
      name: wemix,
      href: "#WEMIX",
      content:
        "Welcome to the open-source programmable future of Web3 era. WEMIX3.0 is an experience-based, platform-driven and service-oriented decentrailized blockchain protocol built as the foundation of a borderless mega-ecosystem.",
    },
    {
      id: "WEMIXPLAY",
      name: wemixplay,
      href: "#WEMIXPLAY",
      content:
        "The world's largest and fastest P&E gaming platform that implements the 'Pay' segment into the experience cycle of global gamers.",
    },
    {
      id: "NILE",
      name: nile,
      href: "#NILE",
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
      id: "Medium",
      ico: medium,
      href: "#Medium",
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
        <h2>More about WEMIX3.0</h2>
      </div>
      <div className={styles.communications}>
        <h3>Communications</h3>
        <div className={styles.SNSs}>
          {snss.map((SNS) => (
            <li key={SNS.id} className={styles.snsIco}>
              <a
                href={SNS.href + "_MoreAbout"}
                target="_blank"
                title="SNS.id"
                rel="noreferrer"
              >
                <img src={SNS.ico} alt={SNS.id} />
              </a>
            </li>
          ))}
        </div>
      </div>
      <div className={styles.ecosystem}>
        <h3>WEMIX Mega-ecosystem</h3>
        <ul className={styles.rightcontainer}>
          {ecosystems.map((eco) => (
            <li key={eco.id + "_MoreAbout"} className={styles.cell}>
              {eco.href ? (
                <a
                  href={eco.href}
                  target="_blank"
                  title={eco.id}
                  rel="noreferrer"
                >
                  <img className={styles.name} src={eco.name} alt={eco.id} />
                  <img
                    className={styles.rightArw}
                    src={rightArw}
                    alt="더보기"
                  />
                </a>
              ) : (
                <>
                  <img className={styles.name} src={eco.name} alt={eco.id} />
                </>
              )}

              <p>{eco.content}</p>
              {eco.href ? (
                <></>
              ) : (
                <div className={styles.comingsoon}>COMMING SOON</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Moreabout;
