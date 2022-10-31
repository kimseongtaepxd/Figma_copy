import { useState } from "react";
import logo from "./assets/img/logo_wemixGovernance.png";
import writing from "./assets/img/logo_type_governance.png";
import earth from "./assets/img/GNB_Right Menu.png";
import styles from "./assets/css/Header.module.scss";

import React from "react";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleearth = () => {
    setisOpen((isOpen) => !isOpen);
  };

  const [language, setlanguage] = useState([
    {
      id: "language2_1",
      language: "english2",
      content: "English",
    },
    { id: "language2_2", language: "korean2", content: "한국어" },
  ]);

  return (
    <header>
      <h1 className={styles.logoBox}>
        <img className={styles.logo} src={logo} alt="governance logo" />
        <img
          className={styles.writing}
          src={writing}
          alt="governance writing"
        />
      </h1>
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
    </header>
  );
};

export default Header;
