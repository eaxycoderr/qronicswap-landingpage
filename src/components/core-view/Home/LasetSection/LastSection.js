import { Link } from "react-router-dom";
import "./lastSection.css";

const LastSection = () => {
  return (
    <div className="last_section">
      <div className="inlast_section">
        <div className="left">
          <h3>Welcome Home to DeFi</h3>
          <p>Join other startups already growing with Qroni.</p>
        </div>
        <div className="right">
          <div className="lSbtn">
            <Link to ="#">Learn more</Link>
            <Link to ="#">Connect Wallet</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
