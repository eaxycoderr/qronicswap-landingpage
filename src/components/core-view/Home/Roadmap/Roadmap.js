import stage1 from "../../../../assets/roadmap/stage1.png";
import stage2 from "../../../../assets/roadmap/stage2.png";
import stage3 from "../../../../assets/roadmap/stage3.png";
import stage4 from "../../../../assets/roadmap/stage2.png";
import bGCLayer from "../../../../assets/overlay-fx1.png";
import bGCLayer2 from "../../../../assets/overlay-fx2.png";

import "./roadmap.css";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <img className="bGCLayer7 paternImg" src={bGCLayer} alt="" />
      <img className="bGCLayer8 paternImg" src={bGCLayer2} alt="" />
      <div className="inRoadmap">
        <div className="title">
          <h3>QroniSwap Roadmap</h3>
          <p>
            (The Qroni team may extend the roadmap as they wish and include
            dates of possible completion or milestone)
          </p>
        </div>
        <div className="roadmapContent">
          <div className="left">
            <div className="roadmapStage stage2">
              <img src={stage2} alt="stage2" />
              <div className="stageText">
                <span>STAGE 2</span>
                <div className="road_list">
                  <li>Multi-chain DEX partnership & integration</li>
                  <li>Fiat on-ramp integration</li>
                  <li>Raffle draw</li>
                </div>
              </div>
            </div>
            <div className="roadmapStage stage1">
              <img src={stage1} alt="stage1" />
              <div className="stageText">
                <span>STAGE 1</span>
                <div className="road_list">
                  <li>Web application launch</li>
                  <li>DEX token listings</li>
                  <li>Private NFT sale</li>
                  <li>Beta testing</li>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="roadmapStage stage4">
              <img src={stage4} alt="stage4" />
              <div className="stageText">
                <span>STAGE 4</span>
                <div className="road_list">
                  <li>Ticketing for blockchain events</li>
                  <li>White labeling</li>
                  <li>Multi-chain NFT marketplace launch</li>
                  <li>Brand Partnerships</li>
                  <li>Mobile app launch</li>
                  <li>Multi-layer ID integration</li>
                  <li>Qroni launchpad Integration</li>
                </div>
              </div>
            </div>
            <div className="roadmapStage stage3">
              <img src={stage3} alt="stage3" />
              <div className="stageText">
                <span>STAGE 3</span>
                <div className="road_list">
                  <li>CEX listing</li>
                  <li>NFT series launch</li>
                  <li>QroniLock launch</li>
                  <li>NFT ticketing</li>
                  <li>Ethereum and Solana cross-chain launch</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
