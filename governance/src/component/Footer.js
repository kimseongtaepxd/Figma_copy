import styles from "../assets/css/Footer.module.scss";
import { useState } from "react";
import logo from "../assets/img/img_footer_governance.png";
import earth from "../assets/img/ico_earth.png";
import medium from "../assets/img/ico_medium.png";
import telegram from "../assets/img/ico_telegram.png";
import twitter from "../assets/img/ico_twitter.png";
import youtube from "../assets/img/ico_youtube.png";
import facebook from "../assets/img/ico_facebook.png";
import down from "../assets/img/arw_down.png";

const Footer = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleearth = () => {
    setisOpen((isOpen) => !isOpen);
  };

  const language = [
    {
      id: "language_1",
      language: "english",
      content: "English",
    },
    { id: "language_2", language: "korean", content: "한국어" },
  ];

  const snss = [
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
  ];

  const menus = [
    {
      id: "Terms_of_Service",
      href: "#Terms_of_Service",
      content: "Terms of Service",
    },
    {
      id: "Privacy_Policy",
      href: "#Privacy_Policy",
      content: "Privacy Policy",
    },
    {
      id: "Contact",
      href: "#Contact",
      content: "Contact",
    },
  ];

  const sites = [
    {
      id: "WEMIX",
      href: "#WEMIX",
      name: "WEMIX",
    },
    {
      id: "WEMIXPLAY",
      href: "#WEMIX_PLAY",
      name: "WEMIX PLAY",
    },
    {
      id: "NILE",
      href: "#NILE",
      name: "NILE",
    },
    {
      id: "WEMIX.Fi",
      name: "WEMIX.Fi",
    },
  ];

  return (
    <footer id="footer">
      <h1>
        <a href="#governance">
          <img src={logo} alt="governance" />
        </a>
      </h1>
      <div className={styles.familySites}>
        Family Sites
        <button>
          <img src={down} alt="더보기"></img>
        </button>
      </div>

      <ul className={styles.sites}>
        {sites.map((site) => (
          <li key={site.id + "_footer"}>
            {site.href ? (
              <a
                href={site.href}
                target="_blank"
                title={site.id}
                rel="noreferrer"
              >
                {site.name}
              </a>
            ) : (
              <>{site.name}</>
            )}
            {!site.href && 
              <div className={styles.comingsoon}>COMING SOON</div>
            }
          </li>
        ))}
      </ul>
      <div className={styles.container}>
        <ul className={styles.menu}>
          {menus.map((menu) => (
            <li key={menu.id + "_footer"}>
              <a
                href={menu.href}
                target="_blank"
                title={menu.id}
                rel="noreferrer"
              >
                {menu.content}
              </a>
            </li>
          ))}
          <li>
            <button type="button" onClick={() => toggleearth()}>
              <img src={earth} alt="언어선택" className={styles.earth} />
            </button>
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
          {snss.map((SNS) => (
            <li key={SNS.id + "_footer"}>
              <a
                href={SNS.href}
                target="_blank"
                title={SNS.id}
                rel="noreferrer"
              >
                <img src={SNS.ico} alt={SNS.id} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.copyright}>
        © WEMIX PTE. LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
