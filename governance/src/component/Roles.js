import styles from "./assets/css/Roles.module.scss";

const Roles = () => {
  return (
    <div className={styles.roles}>
      <div className={styles.title}>Roles of NCPs</div>
      <div className={styles.contents}>
        <div className={styles.cell}>
          <div className={styles.cellImg}></div>
          <div className={styles.celltext}>
            <em>Integrity & Security</em>
            <p>
              As authorized members of node operation, NCPs are responsible for
              facilitation of infrastucure of hardware
              <sup>1</sup> as required. They also play a vital role in ensuring
              integravity and security of the WEMIX network by continuously
              sharing block information to neighboring nodes.
            </p>
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.cellImg}></div>
          <div className={styles.celltext}>
            <em>Consensus</em>
            <p>
              Crucial data and network status for blockchain operation is
              calculated through SPoA<sub>Stake-based Proof of Authority</sub>
              RAFT<sub>Reliable And Fault Tolerant</sub>consensus algorithm
              ensuring consistency of datastores on all nodes in the cluster.
            </p>
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.cellImg}></div>
          <div className={styles.celltext}>
            <em>Governance</em>
            <p>
              NCPs are granted on-chain voting rights in decision-making process
              to implement changes or improvements in the blockchain protocol.
            </p>
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.cellImg}></div>
          <div className={styles.celltext}>
            <em>Validation</em>
            <p>
              The nodes of selected NCPs receive newly created blocks or
              transactions on the chain, authorize and validate new blocks and
              transfer the verified data to other NCP nodes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
