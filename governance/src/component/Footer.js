import styles from "./assets/css/Footer.module.scss";
import { useState } from "react";
import logo from "./assets/img/img_footer_governance.png";
import earth from "./assets/img/ico_earth.png";
import SNS from "./assets/img/ico_sns.png";
import telegram from "./assets/img/ico_telegram.png";
import twitter from "./assets/img/ico_twitter.png";
import youtube from "./assets/img/ico_youtube.png";
import facebook from "./assets/img/ico_facebook.png";
import down from "./assets/img/arw_down.png";

const Footer = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleearth = () => {
    setisOpen((isOpen) => !isOpen);
  };

  const [language, setlanguage] = useState([
    {
      id: "language_1",
      language: "english",
      content: "English",
    },
    { id: "language_2", language: "korean", content: "한국어" },
  ]);

  return (
    <footer>
      <h1>
        <a href="#governance">
          <img src={logo} alt="governance" />
        </a>
      </h1>
      <div className={styles.familySites}>
        Family Sites
        <img src={down} alt="더보기"></img>
      </div>
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
        <li>WEMIX.Fi</li>
      </ul>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li>
            <a href="#Terms_of_Service">Terms of Service</a>
          </li>
          <li>
            <a href="#Privacy_Policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <img
              src={earth}
              onClick={() => toggleearth()}
              alt="language"
              className={styles.earth}
            />
            <ul className={isOpen ? styles.language : styles.hide}>
              {language.map((lan) => (
                <li key={lan.id}>
                  <input
                    key={lan.language + "_input"}
                    type="radio"
                    name="language"
                    id={lan.language}
                    value={lan.language}
                  />
                  <label
                    key={lan.language + "_label"}
                    htmlFor={lan.language}
                    title={lan.language}
                  >
                    {lan.content}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <ul className={styles.sns}>
          <li>
            <a href="#SNS">
              <img src={SNS} alt="SNS" />
            </a>
          </li>
          <li>
            <a href="#telegram">
              <img src={telegram} alt="telegram" />
            </a>
          </li>
          <li>
            <a href="#twitter">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#youtube">
              <img src={youtube} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="#facebook">
              <img src={facebook} alt="facebook" />
            </a>
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
