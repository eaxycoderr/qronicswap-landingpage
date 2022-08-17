import Logo from "../../../../assets/logo/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import walletIcon from "../../../../assets/svgIcon/wallet.svg";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [openDropDownOne, setOpenDropDownOne] = useState(false);
  const [openDropDownTwo, setOpenDropDownTwo] = useState(false);
  const [openDropDownThree, setOpenDropDownThree] = useState(false);

  return (
    <div className="header">
      <div className="inHeader">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="menu">
            <nav>
              <ul>
                <li onClick={() => setOpenDropDownOne(openDropDownOne => !openDropDownOne)}>
                  Trade <IoIosArrowDown />
                  { openDropDownOne ?
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
                  : null
                  }
                </li>
                <li onClick={() => setOpenDropDownTwo(openDropDownTwo => !openDropDownTwo)}>
                  Earn <IoIosArrowDown />
                  {openDropDownTwo ?
                  <div className="dropDown_menu">
                    <ul>
                      <li>
                        <Link to="#">Farm</Link>
                      </li>
                      <li>
                        <Link to="#">Stake</Link>
                      </li>
                    </ul>
                  </div>
                  : null
                  }
                </li>
                <li onClick={() => setOpenDropDownThree(!openDropDownThree)}>
                  Win <IoIosArrowDown />
                  {openDropDownThree ?
                  <div className="dropDown_menu">
                    <ul>
                      <li>
                        <Link to="#">
                          Lottery <span>Soon</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  : null
                  }
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="hamburger">
          <GiHamburgerMenu className="icon" />
        </div>
        <div className="right">
          <img src={walletIcon} alt="walletIcon" />
          <Link className="site_btn walletBtn" to="#">
            Connect Wallet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
