import Banner from "../../core-ui/Header/Banner/Banner";
import BTCimg from "../../../assets/svgIcon/bitcoin.svg";
import ETHimg from "../../../assets/svgIcon/eth.svg";
import BNBimg from "../../../assets/svgIcon/bnb.svg";
import USDTimg from "../../../assets/svgIcon/usdt.svg";
import CHARTimg from "../../../assets/svgIcon/chart-state.svg";
import Feactureimg from "../../../assets/svgIcon/Featured.svg";
import S4img1 from "../../../assets/svgIcon/S4-icon/Featured-icons4.svg";
import S4img2 from "../../../assets/svgIcon/S4-icon/Featured-icons4-1.svg";
import S4img3 from "../../../assets/svgIcon/S4-icon/Featured-icons4-2.svg";
import S4img4 from "../../../assets/svgIcon/S4-icon/Featured-icons4-3.svg";
import S4img5 from "../../../assets/svgIcon/S4-icon/Featured-icons4-4.svg";
import S4img6 from "../../../assets/svgIcon/S4-icon/Featured-icons4-5.svg";
import bGCLayer from "../../../assets/overlay-fx1.png";
import bGCLayer2 from "../../../assets/overlay-fx2.png";
import LiqImg from "../../../assets/Liquidity-img.png";
import FarmingImg from "../../../assets/Farming-img.png";
import NftS5Img from "../../../assets/nftSection.png";
// import tPimg from "../../../assets/logo/fav.png";
import tPimg from "../../../assets/partners/Qroni.png";
import tPimg2 from "../../../assets/partners/photo_2022-08-14.png";
import tPimg3 from "../../../assets/partners/binance.png";
import tPimg4 from "../../../assets/partners/vince.png";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import "./home.css";
import Roadmap from "./Roadmap/Roadmap";
import Partner from "./Partner/Partner";
import LastSection from "./LasetSection/LastSection";

const Home = () => {
  return (
    <div className="blur-home">
      <div className="home">
        <Banner />

        <div className="sectionTwo">
          <h2>Top movers</h2>
          <div className="inSectionTwo">
            <div className="chartBox">
              <div className="top">
                <div className="left">
                  <img src={BTCimg} alt="" />
                  <span>BTC</span>
                  <button disabled>BITCOIN</button>
                </div>
                <div className="right">
                  <button>
                    <BsArrowUpRight className="icon" />
                  </button>
                </div>
              </div>
              <hr />
              <div className="bottom">
                <div className="left">
                  <span>$56,623.54</span>
                  <p>1.41%</p>
                </div>
                <div className="right">
                  <img src={CHARTimg} alt="CHARTimg" />
                </div>
              </div>
            </div>
            <div className="chartBox">
              <div className="top">
                <div className="left">
                  <img src={ETHimg} alt="" />
                  <span>ETH</span>
                  <button disabled>ETHEREUM</button>
                </div>
                <div className="right">
                  <button>
                    <BsArrowUpRight className="icon" />
                  </button>
                </div>
              </div>
              <hr />
              <div className="bottom">
                <div className="left">
                  <span>$56,623.54</span>
                  <p>1.41%</p>
                </div>
                <div className="right">
                  <img src={CHARTimg} alt="CHARTimg" />
                </div>
              </div>
            </div>
            <div className="chartBox">
              <div className="top">
                <div className="left">
                  <img src={BNBimg} alt="" />
                  <span>BNB</span>
                  <button disabled>BINANCE</button>
                </div>
                <div className="right">
                  <button>
                    <BsArrowUpRight className="icon" />
                  </button>
                </div>
              </div>
              <hr />
              <div className="bottom">
                <div className="left">
                  <span>$56,623.54</span>
                  <p>1.41%</p>
                </div>
                <div className="right">
                  <img src={CHARTimg} alt="CHARTimg" />
                </div>
              </div>
            </div>
            <div className="chartBox">
              <div className="top">
                <div className="left">
                  <img src={USDTimg} alt="" />
                  <span>USDT</span>
                  <button disabled>TETHER</button>
                </div>
                <div className="right">
                  <button>
                    <BsArrowUpRight className="icon" />
                  </button>
                </div>
              </div>
              <hr />
              <div className="bottom">
                <div className="left">
                  <span>$56,623.54</span>
                  <p>1.41%</p>
                </div>
                <div className="right">
                  <img src={CHARTimg} alt="CHARTimg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sectionThree">
          <div className="inSectionThree">
            <div className="title">
              <img src={Feactureimg} alt="Feactureimg" />
              <h2>Trending Pools</h2>
            </div>
            <div className="trendingPoolS3">
              <div>
                <span>Stake Qroni - Earn Qroni</span>
                <strong>Up to 50%</strong>
                <p>APY</p>
                <img className="tPimg" src={tPimg} alt="tPimg" />
              </div>
              <div>
                <span>Stake Pinksale - Earn Qroni</span>
                <strong>Up to 50%</strong>
                <p>APY</p>
                <img className="tPimg2" src={tPimg2} alt="tPimg" />
              </div>
              <div>
                <span>Stake BNB - Earn Qroni</span>
                <strong>Up to 50%</strong>
                <p>APY</p>
                <img className="tPimg3" src={tPimg3} alt="tPimg" />
              </div>
              <div>
                <span>Stake Vince - Earn Qroni</span>
                <strong>Up to 50%</strong>
                <p>APY</p>
                <img className="tPimg4" src={tPimg4} alt="tPimg" />
              </div>
            </div>
          </div>
          <img className="bGCLayer3 paternImg" src={bGCLayer2} alt="" />
        </div>

        <div className="sectionFour">
          <div className="inSectionFour">
            <div className="title">
              <h2>Take Your Crypto Trading To The NEXT LEVEL!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque gravida sed eget ut viverra vitae. Sit dui feugiat
                elementum sed.
              </p>
            </div>
            <div className="s4content">
              <div>
                <img src={S4img1} alt="S4img1" />
                <h3>Instant crypto trading</h3>
                <p>Buy crypto with your debit/credit card. Instant deposit.</p>
              </div>
              <div>
                <img src={S4img2} alt="S4img2" />
                <h3>Multi-chain decentralized exchange (DEX)</h3>
                <p>
                  Trade in a cross-chain DEX. Avoid impermanent loss and low
                  capital efficiency.
                </p>
              </div>
              <div>
                <img src={S4img3} alt="S4img3" />
                <h3>Fiat on-ramp</h3>
                <p>Trade highly liquid assets. Convert to fiat instantly.</p>
              </div>
              <div>
                <img src={S4img4} alt="S4img4" />
                <h3>Secure crypto trading</h3>
                <p>Qroni Swap applies top-security protocols and audits.</p>
              </div>
              <div>
                <img src={S4img5} alt="S4img5" />
                <h3>Crypto staking</h3>
                <p>
                  Stake your Qroni Tokens (QNI) in farm and syrup pools. Earn up
                  to [%] APY.
                </p>
              </div>
              <div>
                <img src={S4img6} alt="S4img6" />
                <h3>Lorem Ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  pharetra, ac morbi blandit ipsum massa.
                </p>
              </div>
            </div>
          </div>
          <img className="bGCLayer4 paternImg" src={bGCLayer} alt="" />
        </div>

        <div className="sectionFive">
          <div className="title">
            <h2>A growing community for an evolving DeFi Platform</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in varius arcu duis eget. Tortor quis nulla sem vehicula risus
              purus nibh in porta. Pharetra donec mattis elitduis.
            </p>
          </div>

          <div className="inSectionFive">
            <div className="top">
              <div className="left">
                <h3>Staking Pool</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus integer lacus dolor magna. Eget morbi.
                </p>
                <li>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="14" fill="#F4EBFF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                  Support the network with your tokens
                </li>
                <li>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="14" fill="#F4EBFF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                  Earn huge interest rates
                </li>
                <li>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="14" fill="#F4EBFF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                  Stake your NFTs too!
                </li>
                <div className="sF_btn">
                  <Link className="site_btn" to="#">
                    Get started
                  </Link>
                </div>
              </div>
              <div className="right">
                <img src={LiqImg} alt="LiqImg" />
              </div>
            </div>
          </div>

          <div className="inSectionMid">
            <img className="bGCLayer5 paternImg" src={bGCLayer2} alt="" />
            <img className="bGCLayer6 paternImg" src={bGCLayer} alt="" />
            <div className="top">
              <div className="left">
                <img src={FarmingImg} alt="FarmingImg" />
              </div>
              <div className="right">
                <h3>Farming</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  dui, pellentesque dictum eu nulla non cras scelerisque nunc.
                  Tristique.
                </p>
                <li>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="14" fill="#F4EBFF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                  Provide liquidity in our protocol
                </li>
                <li>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="14" fill="#F4EBFF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                  Get liquidity pool (LP) tokens
                </li>
                <li>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="14" fill="#F4EBFF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                  Earn up to [%] APY returns
                </li>
                <div className="sF_btn">
                  <Link className="site_btn" to="#">
                    Start farming
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="inSectionFiveBottom">
            <div className="top">
              <div className="left">
                <h3>NFT ticketing</h3>
                <p>
                  We adopt industry-best technology to provide secure &
                  peer-to-peer NFT ticketing
                </p>
                <li>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="14" fill="#F4EBFF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                  Mint unique NFT tickets
                </li>
                <li>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="14" fill="#F4EBFF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                  Buy and sell NFT tickets
                </li>
                <li>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="14" fill="#F4EBFF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                  Stake idle tickets all in one place!
                </li>
                <div className="sF_btn">
                  <Link className="site_btn" to="#">
                    Start minting tickets
                  </Link>
                </div>
              </div>
              <div className="right">
                <img src={NftS5Img} alt="LiqImg" />
              </div>
            </div>
          </div>
        </div>
        <Roadmap />
        <Partner />
        <LastSection />
      </div>
    </div>
  );
};

export default Home;
