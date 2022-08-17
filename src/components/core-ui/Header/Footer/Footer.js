import Logo from "../../../../assets/logo/logo.png";
import socialIcon1 from "../../../../assets/footer/svg/telegram.svg";
import socialIcon2 from "../../../../assets/footer/svg/discord.svg";
import socialIcon3 from "../../../../assets/footer/svg/twitter.svg";
import socialIcon4 from "../../../../assets/footer/svg/youtube.svg";
import socialIcon5 from "../../../../assets/footer/svg/instagram.svg";
import { FiSend } from "react-icons/fi";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inFooter">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="lFtext">
            <p>Copyright © 2022 Qroniswap Inc.</p>
            <p>All rights reserved</p>
          </div>
          <div className="fSocial">
            <img src={socialIcon1} alt="socialIcon1" />
            <img src={socialIcon2} alt="socialIcon2" />
            <img src={socialIcon3} alt="socialIcon3" />
            <img src={socialIcon4} alt="socialIcon4" />
            <img src={socialIcon5} alt="socialIcon5" />
          </div>
        </div>
        <div className="right">
          <div className="fR1">
            <h3>Product</h3>
            <ul>
              <li>
                <Link to="#">Swap</Link>
              </li>
              <li>
                <Link to="#">Staking</Link>
              </li>
              <li>
                <Link to="#">Farming</Link>
              </li>
              <li>
                <Link to="#">Liquidity</Link>
              </li>
              <li>
                <Link to="#">NFT</Link>
              </li>
            </ul>
          </div>
          <div className="fR2">
            <h3>Support</h3>
            <ul>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">Discord</Link>
              </li>
              <li>
                <Link to="#">Tokenomics</Link>
              </li>
              <li>
                <Link to="#">Audits</Link>
              </li>
              <li>
                <Link to="#">Apply for Listing</Link>
              </li>
            </ul>
          </div>
          <div className="fR3">
            <h3>Stay up to date</h3>
            <div className="stay_up_to_date">
              <input type="text" placeholder="Your email address" />
              <button className="send_btn">
                <FiSend className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
