import React from "react";

class adContent extends React.Component {
  render() {
    return (
      <section className="adContentSec">
        <div className="mycontainer">
          <p className="sectionTitle">AD CONTENT</p>
          <hr className="belowSectionTitle" />
          <div className="internalAds clearfix">
            <div className="internalSingleAd position-relative">
              <div className="internalAdImg text-center">
                <img src="images/internalad.jpg" alt className="centerImg" />
              </div>
              <p className="semiBold position-absolute aboveAd white">
                Lebrons Cleveland Cavaiers Fire Coach Midseason
              </p>
            </div>
            <div className="internalSingleAd position-relative">
              <div className="internalAdImg text-center">
                <img src="images/internalad.jpg" alt className="centerImg" />
              </div>
              <p className="semiBold position-absolute aboveAd white">
                Lebrons Cleveland Cavaiers Fire Coach Midseason
              </p>
            </div>
            <div className="internalSingleAd position-relative">
              <div className="internalAdImg text-center">
                <img src="images/internalad.jpg" alt className="centerImg" />
              </div>
              <p className="semiBold position-absolute aboveAd white">
                Lebrons Cleveland Cavaiers Fire Coach Midseason
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default adContent;
