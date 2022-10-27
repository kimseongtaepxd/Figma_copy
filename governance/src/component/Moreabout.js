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

const Moreabout = () => {
  return (
    <div className={styles.moreabout}>
      <div className={styles.title}>
        <em>More about WEMIX3.0</em>
      </div>
      <div className={styles.communications}>
        <em>Communications</em>
        <a href="#SNS" className={styles.snsIco}>
          <img src={SNS} alt="이거뭐임?" />
        </a>
        <a href="#telegram" className={styles.snsIco}>
          <img src={telegram} alt="telegram" />
        </a>
        <a href="#twitter" className={styles.snsIco}>
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#youtube" className={styles.snsIco}>
          <img src={youtube} alt="youtube" />
        </a>
        <a href="#facebook" className={styles.snsIco}>
          <img src={facebook} alt="facebook" />
        </a>
      </div>
      <div className={styles.ecosystem}>
        <em>WEMIX Mega-ecosystem</em>
        <div className={styles.rightcontainer}>
          <div className={styles.cell}>
            <a href="#wemix">
              <img className={styles.name} src={wemix} alt="wemix" />
              <img
                className={styles.rightArw}
                src={rightArw}
                alt="오른쪽화살표"
              />
            </a>
            <p>
              Welcome to the open-source programmable future of Web3 era.
              WEMIX3.0 is an experience-based, platform-driven and
              service-oriented decentrailized blockchain protocol built as the
              foundation of a borderless mega-ecosystem.
            </p>
          </div>
          <div className={styles.cell}>
            <a href="#wemixplay">
              <img className={styles.name} src={wemixplay} alt="wemixplay" />
              <img
                className={styles.rightArw}
                src={rightArw}
                alt="오른쪽화살표"
              />
            </a>
            <p>
              The world's largest and fastest P&E gaming platform that
              implements the 'Pay' segment into the experience cycle of global
              gamers.
            </p>
          </div>
          <div className={styles.cell}>
            <a href="#nile">
              <img className={styles.name} src={nile} alt="nile" />
              <img
                className={styles.rightArw}
                src={rightArw}
                alt="오른쪽화살표"
              />
            </a>
            <p>
              the next generation DAO-powered community platform built for
              creation, facilitaion and management of projects based on smart
              contracts, innovating opportunities through collective potential.
            </p>
          </div>
          <div className={styles.cell}>
            <a href="#wemixfi">
              <img className={styles.name} src={wemixfi} alt="wemixfi" />
            </a>
            <p>
              A secure on-chain DeFi platform that supports storage exchange,
              borrowing, settlement and investment of crypto-assets powered by
              oracies that collect, analyze, and broadcast data propagated form
              a variety of sources for security and vaildation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moreabout;
