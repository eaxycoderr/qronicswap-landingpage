import qronicLogo from "../../../assets/logo/fav.png";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import "./stakingPool.css";
import { stakingPoolData } from "./stakingPoolData";
import { Link } from "react-router-dom";

export const StakingPool = () => {
  return (
    <div className="farmingStaking">
      <div className="inFarmingStaking">
        <div className="inFarmingStakingTitle stakingTitle">
          <Link to="/farms">
            <button className="farmsTitleBtn">Farm</button>
          </Link>
          <button className="stakeTitleBtn">Stake</button>
        </div>
        <div className="fSbanner">
          <h2>Staking Pools</h2>
          <p>
            Just stake some tokens to earn. <br />
            High APR, low risk.
          </p>
          <div className="qronicLogo">
            <img src={qronicLogo} alt="qronicLogo" />
          </div>
        </div>
        <div className="searchFilter">
          <div className="inputField">
            <BiSearch className="icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="inputField">
            <input className="selectInput" type="text" placeholder="Hot" />
            <IoIosArrowDown className="arrowDownIcon" />
          </div>
          <div className="inputBox inputCheckBox">
            <label class="checkBox">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p>Staked</p>
          </div>
        </div>
        {stakingPoolData.map((stakingPoolItems) => {
          return (
            <div className="farmsStakingContainer">
              <div className="farmsStakingCLeft">
                <div className="imgBox">
                  <img
                    className="smallFarmLogo"
                    src={stakingPoolItems.smallLogo}
                    alt="smallFarmLogo"
                  />
                  <img
                    className="bigFarmLogo"
                    src={stakingPoolItems.bigLogo}
                    alt="bigFarmLogo"
                  />
                </div>
                <div className="farmNameDetails">
                  <span>{stakingPoolItems.title}</span>
                  <p>{stakingPoolItems.stakeName}</p>
                </div>
              </div>
              <div className="farmsStakingCRight">
                <div className="flexBox2">
                  <span>CAKE Staked</span>
                  <p>${stakingPoolItems.earned}</p>
                </div>
                <div className="flexBox3">
                  <span>Total Staked</span>
                  <p>${stakingPoolItems.totalStaked}</p>
                </div>
                <div className="flexBox4">
                  <span>APR</span>
                  <p>{stakingPoolItems.apr}%</p>
                </div>
                <div className="flexBox5">
                  <span>Total Staked</span>
                  <p>${stakingPoolItems.totalStaked}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
