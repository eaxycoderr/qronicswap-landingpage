import qronicLogo from "../../../assets/logo/fav.png";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import "./farming.css";
import { farmingData } from "./farmsData";
import { Link } from "react-router-dom";

export const Farming = () => {
  return (
    <div className="farmingStaking">
      <div className="inFarmingStaking">
        <div className="inFarmingStakingTitle farmsTitle">
          <button className="farmsTitleBtn">Farm</button>
          <Link to="/stake">
            <button className="stakeTitleBtn">Stake</button>
          </Link>
        </div>
        <div className="fSbanner">
          <h2>Farms</h2>
          <p>Stake LP tokens to earn.</p>
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
        {farmingData.map((farmingItems) => {
          return (
            <div className="farmsStakingContainer">
              <div className="farmsStakingCLeft">
                <div className="imgBox">
                  <img
                    className="smallFarmLogo"
                    src={farmingItems.smallLogo}
                    alt="smallFarmLogo"
                  />
                  <img
                    className="bigFarmLogo"
                    src={farmingItems.bigLogo}
                    alt="bigFarmLogo"
                  />
                </div>
                <div className="farmNameDetails">
                  <span>{farmingItems.title}</span>
                  <p>{farmingItems.lp}</p>
                </div>
              </div>
              <div className="farmsStakingCRight">
                <div className="flexBox2">
                  <span>Earned</span>
                  <p>${farmingItems.earned}</p>
                </div>
                <div className="flexBox3">
                  <span>APR</span>
                  <p>{farmingItems.apr}%</p>
                </div>
                <div className="flexBox4">
                  <span>Total Staked</span>
                  <p>${farmingItems.totalStaked}</p>
                </div>
                <div className="flexBox5">
                  <span>Earned</span>
                  <p>${farmingItems.earned}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
