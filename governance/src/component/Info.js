import { useState } from "react";
import styles from "./assets/css/Info.module.scss";

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.wonders}>
        <em>
          WONDERS<sup>1</sup>,also known as NCPs<sup>2</sup>, are the authority
          members chosen to represent the interests of the WEMIX community as a
          whole via governance.
        </em>
        <p>
          <sup>1</sup>WONDER : WEMIX On-chain Network of Decentralized ecosystem
          Regulators
          <br />
          <sup>2</sup>NCP:Node Council Partner
        </p>
      </div>
      <div className={styles.description}>
        <div className={styles.cell}>
          <em>Staking Required</em>
          <div>1.5M</div>
          <p>
            Each NCP is required to stake 1,500,000 WEMIX to their allocated
            validator node. As official council members and representatives of
            the community, NCPs are then given full authority over consensus and
            acess to mainnet parameters through governance.
          </p>
        </div>
        <div className={styles.cell}>
          <em>Guaranteed APR</em>
          <div>21.024%</div>
          <p>
            The PMR<sub>Permanent Minting Reward</sub> is distributed
            automatically as 40% to NCP (each WONDER) node receives 1%*), 10% to
            stakers, 25% for ecosystem and 25% towards the maintenance of the
            mainnet and the ecosystem.
          </p>
          <p>
            &1% per node is equivalent to apporoximately 21.024% APR per node.
          </p>
        </div>
        <div className={styles.cell}>
          <em>Allocation of rewards</em>
          <div>PMR</div>
          <em>40%</em>
          <p>1% per WONDER</p>
          <div>Staking</div>
          <em>10%</em>
          <div>Ecosystem</div>
          <em>25%</em>
          <div>Maintenance</div>
          <em>25%</em>
        </div>
      </div>
    </div>
  );
};

export default Info;
