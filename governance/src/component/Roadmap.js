import styles from "./assets/css/Roadmap.module.scss";
import down from "./assets/img/arw_down.png";
import up from "./assets/img/arw_up.png";
import { useState } from "react";

const Roadmap = () => {
  const togglist = (id) => {
    let findIndex = Phase.findIndex((item) => item.id === id);
    let copiedPhase = [...Phase];
    copiedPhase[findIndex].isOrder = !copiedPhase[findIndex].isOrder;
    setPhase(copiedPhase);
  };

  const [Phase, setPhase] = useState([
    {
      id: "Phase_01",
      isOrder: false,
      name: "Phase 01",
      content: [
        "Node Council Partners, also known as WONDERS, are 40 selected members who operate secured validating nodes for the WEMIX3.0 mainnet",
        "40 WONDERS are constituted by Technology Sponsors that contribute to the secure operation and innovation of WEMIX3.0, and Ecosystem Sponsors that contribute to the establishment of the experience cycle created through the on-chain/off-chain ecosystem via WEMIX3.0.",
        "Each NCP must stake 1.5M WEMIX, and the PMR (Permanent Minting Reward) is distributed automatically to NCP (40%), Stakers (10%), Eco fund (25%) and Maintenance (25%).",
        "WEMIX Grand Staking will become available to the community which will yield the 10% Staking Reward allocated through the PMR. However, staking participants for the WEMIX Grand Staking may not withdrawal from the staking pool prior to the implementation of Phase 2.",
      ],
    },
    {
      id: "Phase_02",
      isOrder: false,
      name: "Phase 02",
      content: [
        "Upon Phase 2 launch, 1.5M fixed WEMIX Staking per validator node, which encourages active contribution of NCPs to the ecosystem, will be abolished and transformed into competitive staking.",
        "The initial distribution ratio of the PMR will be changed with thediscontinuation of 10% staking reward allocated to WEMIX Grand Staking participants in Phase 2.",
        "The 40% PMR allocated as NCP reward will be increased to 50%.",
        "In doing so, WEMIX Grand Staking participants may then choose to delegate their stake volume to any of the 40 validator nodes, effectively increasing the chosen node's total staked shares above the median; generating increased reward rate for the node and community members that are participating in the delegation.",
        "This method will stimulate active participation of the community in the governance, but if any imposed action by the node operator is regarded as malicious or harmful to the ecosystem, the governance oversight program will confiscate total staked assets of the node’sassets.",
        "This phase is expected to become operational within the first half of 2023, but may be adjusted in accordance to the state of WEMIX3.0.",
      ],
    },
    {
      id: "Phase_03",
      isOrder: false,
      name: "Phase 03",
      content: [
        "Validator node operation by 40 selected authority partners known as,WONDERS, will be discontinued and the governance module will shiftinto an open & autonomous node participation system where anyone canbecome the validators of WEMIX3.0 based on staking volume.",
        "Based on the total WEMIX staking volume per node, top 40 nodes willbe periodically selected to validate transactions, transforming froman SPoA model into a PoS model.",
        "A slashing policy will be implemented to enforce fair operation ofvalidator nodes, especially in the event of willful collusionagainst the interests of the ecosystem but also possible result of amisconfiguration of the node. Slashing will penalize the node byremoving a portion of its existing stake and is irreversible.",
        "Democratized governance is completed at this stage, and the mainnet will be upgraded to WEMIX4.0. The schedule is yet to be determined.",
      ],
    },
  ]);

  const Contents = (Contents) => {
    const result = [];
    for (let i = 0; i < Contents.length; i++) {
      result.push(
        <li key={Contents[i]} className={styles.content}>
          {Contents[i]}
        </li>
      );
    }
    return result;
  };

  return (
    <div className={styles.Roadmap}>
      <div className={styles.top}>
        <h2>Raodmap of WEMIX3.0</h2>
        <em>Decentralized technology, Democratized governance</em>
        <p>
          WEMIX3.0 mainnet, developed on a decentralized architecture, will
          introduce a multi-phase democratized governance where the community is
          empowered to impact the 40 authority node governance structure through
          the introduction of a delegated staking module. This is the
          fundamental principle of the mainnet's roadmap, a means to illustrate
          true democratization through adoption of meritocracy based on
          contribution to the ecosystem.
        </p>
      </div>
      <ul className={styles.description}>
        {Phase.map((phase) => (
          <ul
            key={phase.id}
            className={phase.isOrder ? styles.cell : styles.hide}
          >
            <li className={styles.title}>
              <em>{phase.name}</em>
              <div>
                <img
                  onClick={() => togglist(phase.id)}
                  src={phase.isOrder ? down : up}
                  alt="더보기"
                />
              </div>
            </li>
            {Contents(phase.content)}
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;
