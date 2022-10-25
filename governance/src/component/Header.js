import { useState } from 'react';
import logo from './assets/img/logo_wemixGovernance.png'
import writing from './assets/img/logo_type_governance.png'
import earth from './assets/img/GNB_Right Menu.png'
import styles from './assets/css/Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.logoBox}>
        <img className={styles.logo} src={logo} alt="governance logo" />
        <img className={styles.writing} src={writing} alt="governance writing" />
      </div>
      <img className={styles.earth} src={earth} alt="earth ico" />
    </header>
  );
};

export default Header;