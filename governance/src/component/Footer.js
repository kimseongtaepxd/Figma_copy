import styles from "./assets/css/Footer.module.scss";
import logo from "./assets/img/img_footer_governance.png";
import earth from "./assets/img/ico_earth.png";
import SNS from "./assets/img/ico_sns.png";
import telegram from "./assets/img/ico_telegram.png";
import twitter from "./assets/img/ico_twitter.png";
import youtube from "./assets/img/ico_youtube.png";
import facebook from "./assets/img/ico_facebook.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="governance" />
      <div className={styles.title}>Family Sites</div>
      <ul className={styles.sites}>
        <li>
          <a href="#WEMIX">WEMIX</a>
        </li>
        <li>
          <a href="#WEMIX_PLAY">WEMIX PLAY</a>
        </li>
        <li>
          <a href="#NILE">NILE</a>
        </li>
        <li>
          <a href="#WEMIX.Fi">WEMIX.Fi</a>
        </li>
      </ul>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
          <li>
            <img src={earth} alt="지구아이콘" />
          </li>
        </ul>
        <ul className={styles.sns}>
          <li>
            <img src={SNS} alt="SNS" />
          </li>
          <li>
            <img src={telegram} alt="telegram" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={youtube} alt="youtube" />
          </li>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
        </ul>
      </div>

      <div className={styles.copyright}>
        © WEMIX PTE. LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
