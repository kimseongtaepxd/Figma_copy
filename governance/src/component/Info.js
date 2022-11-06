import styles from "../assets/css/Info.module.scss";
import down from "../assets/img/arw_down.png";
import up from "../assets/img/arw_up.png";
import Staking from "../assets/img/ico_staking.png";
import { useState } from "react";

const Info = () => {
  const Allocations = [
    {
      id: "Allocation_1",
      content: "PMR",
      percent: "40%",
      tooltip: "tooltip",
    },
    {
      id: "Allocation_2",
      content: "Staking",
      percent: "10%",
    },
    {
      id: "Allocation_3",
      content: "Ecosystem",
      percent: "25%",
    },
    {
      id: "Allocation_4",
      content: "Maintenance",
      percent: "25%",
    },
  ];

  const togglist = (id) => {
    let findIndex = Infos.findIndex((item) => item.id === id);
    let copiedInfos = [...Infos];
    copiedInfos[findIndex].isOrder = !copiedInfos[findIndex].isOrder;
    setInfos(copiedInfos);
  };

  const [Infos, setInfos] = useState([
    {
      id: "Info_01",
      isOrder: false,
      title: "Staking Required",
      number: "1.5M",
      content: [
        "Each NCP is required to stake 1,500,000 WEMIX to their allocatedvalidator node. As official council members and representatives of the community, NCPs are then given full authority overacess to mainnet parameters through governance.",
      ],
      ico: Staking,
    },
    {
      id: "Info_02",
      isOrder: false,
      title: "Guaranteed APR",
      number: "21.024%",
      content: [
        "The PMR Permanent Minting Reward is distributed automatically as 40% to NCP (each WONDER node receives 1%*), 10% to stakers, 25% for ecosystem and 25% towards the maintenance of the mainnet and the ecosystem.",
        "*1% per node is equivalent to apporoximately 21.024% APR per node.",
      ],
    },
  ]);

  const Contents = (Con, Open) => {
    const result = [];
    for (let i = 0; i < Con.length; i++) {
      result.push(
        <p key={"content_" + i} className={Open ? styles.content : styles.hide}>
          {Con[i]}
        </p>
      );
    }
    return result;
  };

  return (
    <div className={styles.info}>
      <div className={styles.wonders}>
        <h2>
          WONDERS<sup>1</sup>,also known as NCPs<sup>2</sup>, are the authority
          members chosen to represent the interests of the WEMIX community as a
          whole via governance.
        </h2>
        <p>
          <sup>1</sup>WONDER : WEMIX On-chain Network of Decentralized ecosystem
          Regulators
          <br />
          <sup>2</sup>NCP:Node Council Partner
        </p>
      </div>
      <ul className={styles.description}>
        {Infos.map((Info) => (
          <li key={Info.id} className={styles.cell}>
            <em>{Info.title}</em>
            {Info.ico ? (
              <div className={`${styles.Staking} ${styles.number}`}>
                {Info.number}
              </div>
            ) : (
              <div className={styles.number}>{Info.number}</div>
            )}

            <button type="button" onClick={() => togglist(Info.id)}>
              <img src={Info.isOrder ? down : up} alt="더보기" />
            </button>

            {Contents(Info.content, Info.isOrder)}
          </li>
        ))}
        <li className={styles.cell}>
          <em>Allocation of rewards</em>
          <ul className={styles.flexbox}>
            {Allocations.map((all) => (
              <li key={all.id} className={styles.flexcontent}>
                {all.tooltip ? (
                  <span className={styles.tooltip}>{all.content}</span>
                ) : (
                  <span>{all.content}</span>
                )}
                <strong>{all.percent}</strong>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Info;
