import arw from "../assets/img/ico_arrow.png";
import styles from "../assets/css/Top.module.scss";

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.left}>
        <div className={styles.leftBox}>
          <h2>
            40 WONDERS : <br />
            The best-in-class global Node Council Partners
          </h2>
          <p>
            40 Node Council Partners will become the foundation of a new Web3
            life built on WEMIX3.0 by contributing to the development and growth
            of the mega-ecosystem while providing impenetrable security on our
            new layer 1mainnet.
          </p>
        </div>
        <span className={styles.scroll}>
          <img src={arw} alt="스크롤 더 있음" />
          SCROLL
        </span>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Top;
