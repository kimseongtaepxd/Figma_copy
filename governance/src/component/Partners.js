import styles from "./assets/css/Partners.module.scss";
import link from "./assets/img/ico_link.png";
import { useState } from "react";

const Partners = () => {
  const [Partner, setPartner] = useState([
    {
      id: "partner_1",
      name: "Circle",
      content:
        "Circle leads the global financial technology through digital currency innovation and creation of financial infrastructure. It also provides growth opportunities for businesses and investors by linking existing financial systems and global leading public chains.",
    },
    {
      id: "Partner_2",
      name: "Blockdaemon",
      content:
        "Blockdaemon, founded in New York in 2017, provides top-tier infrastructure building tools for blockchain companies. Blockdaemon's servies help blockchain companies to swifly deploy and manage blocks.",
    },
    {
      id: "Partner_3",
      name: "Multichain",
      content:
        "As an open-source blockchain platform, Multichain provides a world-class solution that enables users to freely transact across chains, pushing the boundaries of blockchain.",
    },
    {
      id: "Partner_4",
      name: "DSRV Labs",
      content:
        "DSRV Labs is a blockchain validator that provides service to enable clients to participate safely and easily in the Proof of Stake network through block validation and network monitoring",
    },
  ]);

  return (
    <div className={styles.partners}>
      <div className={styles.leftContainer}>
        <h2>Our Partners</h2>
        <p>
          World leaders in various fields and industries, collaborating with
          WEMIX3.0 to bring about change to your on-chain experience.
        </p>
      </div>
      <div className={styles.rightContainer}>
        {Partner.map((partner) => (
          <div key={partner.id} className={styles.cell}>
            <div className={styles.logoImg}></div>
            <div className={styles.textBox}>
              <a href="#Circle">
                {partner.name}
                <img src={link} alt="링크아이콘"></img>
              </a>
              <p>{partner.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
