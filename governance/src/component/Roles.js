import styles from "./assets/css/Roles.module.scss";
import { useState } from "react";

const Roles = () => {
  const [Role, setRole] = useState([
    {
      id: "role_1",
      name: "Integrity & Security",
      content:
        "As authorized members of node operation, NCPs are responsible for facislitation of infrastucure of hardware <sup>1</sup> as required. They also play a vital role in ensuring integravity and security of the WEMIX network by continuously sharing block information to neighboring nodes.",
    },
    {
      id: "role_2",
      name: "Consensus",
      content:
        "Crucial data and network status for blockchain operation is calculated through SPoA <sub>Stake-based Proof of Authority</sub> RAFT<sub>Reliable And Fault Tolerant</sub> consensus algorithm ensuring consistency of datastores on all nodes in the cluster.",
    },
    {
      id: "role_3",
      name: "Governance",
      content:
        "NCPs are granted on-chain voting rights in decision-making process to implement changes or improvements in the blockchain protocol.",
    },
    {
      id: "role_4",
      name: "Validation",
      content:
        "The nodes of selected NCPs receive newly created blocks or transactions on the chain, authorize and validate new blocks and transfer the verified data to other NCP nodes.",
    },
  ]);

  return (
    <div className={styles.roles}>
      <h2 className={styles.title}>Roles of NCPs</h2>
      <div className={styles.contents}>
        {Role.map((role) => (
          <div key={role.id} className={styles.cell}>
            <div className={styles.cellImg}></div>
            <div className={styles.celltext}>
              <div>
                <em>{role.name}</em>
                <p>{role.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;
