import partnerImg1 from "../../../../assets/partners/Qroni.png"
import partnerImg2 from "../../../../assets/partners/photo_2022-08-14.png"
import partnerImg3 from "../../../../assets/partners/binance.png"
import partnerImg4 from "../../../../assets/partners/vince.png"
import "./partner.css";

const Partner = () => {
  return (
    <div className="partner">
      <div className="inPartner">
        <div className="title">
            <h2>Partners</h2>
            {/* <p></p> */}
        </div>
        <div className="partnerList">
            <img src={partnerImg1} alt="partnerImg1" />
            <img src={partnerImg2} alt="partnerImg2" />
            <img src={partnerImg3} alt="partnerImg3" />
            <img src={partnerImg4} alt="partnerImg4" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
