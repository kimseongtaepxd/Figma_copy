import styles from "./assets/css/Partners.module.scss";
import link from "./assets/img/ico_link.png";

const Partners = () => {
  return (
    <div className={styles.partners}>
      <div className={styles.leftContainer}>
        <em>Our Partners</em>
        <p>
          World leaders in various fields and industries, collaborating with
          WEMIX3.0 to bring about change to your on-chain experience.
        </p>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.cell}>
          <div className={styles.logoImg}></div>
          <div className={styles.textBox}>
            <a href="#Circle">
              Circle
              <img src={link} alt="링크아이콘"></img>
            </a>
            <p>
              Circle leads the global financial technology through digital
              currency innovation and creation of financial infrastructure. It
              also provides growth opportunities for businesses and investors by
              linking existing financial systems and global leading public
              chains.
            </p>
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.logoImg}></div>
          <div className={styles.textBox}>
            <a href="#Blockdaemon">
              Blockdaemon
              <img src={link} alt="링크아이콘"></img>
            </a>
            <p>
              Blockdaemon, founded in New York in 2017, provides top-tier
              infrastructure building tools for blockchain companies.
              Blockdaemon's servies help blockchain companies to swifly deploy
              and manage blocks.
            </p>
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.logoImg}></div>
          <div className={styles.textBox}>
            <a href="#Multichain">
              Multichain
              <img src={link} alt="링크아이콘"></img>
            </a>
            <p>
              As an open-source blockchain platform, Multichain provides a
              world-class solution that enables users to freely transact across
              chains, pushing the boundaries of blockchain.
            </p>
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.logoImg}></div>
          <div className={styles.textBox}>
            <a href="#DSRV_Labs">
              DSRV Labs
              <img src={link} alt="링크아이콘"></img>
            </a>
            <p>
              DSRV Labs is a blockchain validator that provides service to
              enable clients to participate safely and easily in the Proof of
              Stake network through block validation and network monitoring
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
