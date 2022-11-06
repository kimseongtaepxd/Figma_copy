import styles from "../assets/css/Partners.module.scss";
import link from "../assets/img/ico_link.png";

const Partners = () => {
  const Partner = [
    {
      id: "partner_1",
      name: "Circle",
      content:
        "Circle leads the global financial technology through digital currency innovation and creation of financial infrastructure. It also provides growth opportunities for businesses and investors by linking existing financial systems and global leading public chains.",
      title: "Circle로 이동"
    },
    {
      id: "Partner_2",
      name: "Blockdaemon",
      content:
        "Blockdaemon, founded in New York in 2017, provides top-tier infrastructure building tools for blockchain companies. Blockdaemon's servies help blockchain companies to swifly deploy and manage blocks.",
      title: "Circle로 이동"
      },
    {
      id: "Partner_3",
      name: "Multichain",
      content:
        "As an open-source blockchain platform, Multichain provides a world-class solution that enables users to freely transact across chains, pushing the boundaries of blockchain.",
      title: "Multichain로 이동"  
    },
    {
      id: "Partner_4",
      name: "DSRV Labs",
      content:
        "DSRV Labs is a blockchain validator that provides service to enable clients to participate safely and easily in the Proof of Stake network through block validation and network monitoring",
      title: "DSRV Labs로 이동"
    },
  ];

  return (
    <div className={styles.partners}>
      <div className={styles.leftContainer}>
        <h2>Our Partners</h2>
        <p>
          World leaders in various fields and industries, collaborating with
          WEMIX3.0 to bring about change to your on-chain experience.
        </p>
      </div>
      <ul className={styles.rightContainer}>
        {Partner.map((partner) => (
          <li key={partner.id} className={styles.cell}>
            <div className={styles.logoImg}></div>
            <div className={styles.textBox}>
              <a href="#Circle" target="_blank" title={partner.title}>
                {partner.name}
                <img src={link}></img>
              </a>
              <p>{partner.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partners;
