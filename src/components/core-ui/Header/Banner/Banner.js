import React from "react";
import { Link } from "react-router-dom";
import bGCLayer from "../../../../assets/overlay-fx1.png";
import bGCLayer2 from "../../../../assets/overlay-fx2.png";

import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Next level digital marketplace to trade your favorite assets.</h1>
        <p>
          Multi-chain DEX. Get Exclusive NFT Tickets. Robust Pools Tailored for
          Your Favorite Tokens. Receive Eye-Catching Staking Rewards. High
          liquidity. Fast trade. Credit card support. No extra fees. Secure
          transaction.
        </p>
        <div className="banner-btns">
          <Link className="site_btn" to="/">
            Buy Presale
          </Link>
          <Link className="site_btn site_btn2" to="/">
            Whitepaper
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="flexBox1">
          <h3>$113,139,093</h3>
          <p>Total Value Locked</p>
        </div>
        <div className="flexBox2">
          <h3>$17,388,349,852</h3>
          <p>Total Trade Volume</p>
        </div>
        <div className="flexBox3">
          <h3>$16,073,165</h3>
          <p>Market Cap</p>
        </div>
        <div className="flexBox4">
          <h3>$4.291</h3>
          <p>Price</p>
        </div>
      </div>
      <img className="bGCLayer paternImg" src={bGCLayer} alt="" />
        <img className="bGCLayer2 paternImg" src={bGCLayer2} alt="" />
    </div>
  );
};

export default Banner;
