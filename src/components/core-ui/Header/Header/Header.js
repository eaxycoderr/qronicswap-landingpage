import Logo from "../../../../assets/logo/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import walletIcon from "../../../../assets/svgIcon/wallet.svg";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [openDropDownOne, setOpenDropDownOne] = useState(false);
  const [openDropDownTwo, setOpenDropDownTwo] = useState(false);
  const [openDropDownThree, setOpenDropDownThree] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/farms" || location.pathname === "/stake"
          ? "header header2"
          : "header"
      }
    >
      <div className="inHeader">
        <div className="left">
          <Link to="/">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>

          <div className="menu">
            <nav className={`navMenu ${menuActive ? "open" : ""}`}>
              <ul>
                <div className="menuListBox">
                  <li onClick={() => setOpenDropDownOne(!openDropDownOne)}>
                    Trade <IoIosArrowDown />
                  </li>
                  {openDropDownOne ? (
                    <div className="dropDown_menu">
                      <ul>
                        <li>
                          <Link to="#">Liquidity</Link>
                        </li>
                        <li>
                          <Link to="#">Swap</Link>
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </div>
                <div className="menuListBox">
                  <li onClick={() => setOpenDropDownTwo(!openDropDownTwo)}>
                    Earn <IoIosArrowDown />
                  </li>
                  {openDropDownTwo ? (
                    <div className="dropDown_menu">
                      <ul>
                        <li>
                          <Link to="/farms">Farm</Link>
                        </li>
                        <li>
                          <Link to="/stake">Stake</Link>
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </div>
                <div className="menuListBox">
                  <li onClick={() => setOpenDropDownThree(!openDropDownThree)}>
                    Win <IoIosArrowDown />
                  </li>
                  {openDropDownThree ? (
                    <div className="dropDown_menu">
                      <ul>
                        <li>
                          <Link className="comingSoon" to="#">
                            Lottery <span>Soon</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </div>
                <div className="mobileConnectBtn">
                  <Link to="#" className="site_btn walletBtn">
                    Connect Wallet
                  </Link>
                  <img src={walletIcon} alt="walletIcon" />
                </div>
              </ul>
            </nav>
          </div>
        </div>
        <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
          {menuActive ? (
            <CgClose className="icon" />
          ) : (
            <GiHamburgerMenu className="icon" />
          )}
        </div>
        <div className="right">
          <img src={walletIcon} alt="walletIcon" />
          <Link
            to="#"
            className={
              location.pathname === "/farms" || location.pathname === "/stake"
                ? "site_btn walletBtn walletBtn2"
                : "site_btn walletBtn"
            }
          >
            Connect Wallet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
