import styles from "./assets/css/Info.module.scss";
import down from "./assets/img/arw_down.png";
import up from "./assets/img/arw_up.png";
import { useState } from "react";

const Info = () => {
  const [Allocations, setAllocations] = useState([
    {
      id: "idontknow",
      content: "PMR",
      percent: "40%",
    },
    {
      id: "idontknow",
      content: "Staking",
      percent: "10%",
    },
    {
      id: "idontknow",
      content: "Ecosystem",
      percent: "25%",
    },
    {
      id: "idontknow",
      content: "Maintenance",
      percent: "25%",
    },
  ]);

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
    },
    {
      id: "Info_02",
      isOrder: false,
      title: "Guaranteed APR",
      number: "21.024%",
      content: [
        "The PMR<sub>Permanent Minting Reward</sub> is distributed automatically as 40% to NCP (each WONDER node receives 1%*), 10% to stakers, 25% for ecosystem and 25% towards the maintenance of the mainnet and the ecosystem.",
        "*1% per node is equivalent to apporoximately 21.024% APR per node.",
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
      <ul className={styles.description}>
        {Infos.map((Infos) => (
          <li key={Infos.id} className={styles.cell}>
            <em>{Infos.title}</em>
            <div className={styles.number}>{Infos.number}</div>
            <img
              onClick={() => togglist(Infos.id)}
              src={Infos.isOrder ? down : up}
              alt="더보기"
            />
            <p className={Infos.isOrder ? styles.content : styles.hide}>
              {Contents(Infos.content)}
            </p>
          </li>
        ))}
        <li className={styles.cell}>
          <em>Allocation of rewards</em>
          <div className={styles.flexbox}>
            {Allocations.map((all) => (
              <div className={styles.flexcontent}>
                <span>{all.content}</span>
                <b>{all.percent}</b>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Info;
