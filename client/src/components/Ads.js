import React from "react";

class ads extends React.Component {
  render() {
    return (
      <section className="ads">
        <div className="mycontainer">
          <p className="sectionTitle">AD SPACE</p>
          <hr className="belowSectionTitle" />
          <div className="allAds clearfix">
            <div className="singleAd">
              <div className="adImg text-center">
                <img src="images/small.jpg" alt className="centerImg" />
              </div>
              <div className="adContent">
                <p className="f-18 latoBlack">
                  <a href="#" className="black">
                    Egypt's Sisi: Defaming security forces is 'high treason'
                  </a>
                </p>
              </div>
              <hr />
              <div className="adFooter clearfix">
                <div className="float-left">
                  <span className="light  mrg-right-20">
                    <i className="fas fa-user clock" />amruismaiil
                  </span>
                  <span className="light">
                    <i className="far fa-clock clock" /> 30 min ago
                  </span>
                </div>
                <div className="float-right">
                  <a href="#" className="black bold">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="singleAd">
              <div className="adImg text-center">
                <img src="images/small.jpg" alt className="centerImg" />
              </div>
              <div className="adContent">
                <p className="f-18 latoBlack">
                  <a href="#" className="black">
                    Egypt's Sisi: Defaming security forces is 'high treason'
                  </a>
                </p>
              </div>
              <hr />
              <div className="adFooter clearfix">
                <div className="float-left">
                  <span className="light  mrg-right-20">
                    <i className="fas fa-user clock" />amruismaiil
                  </span>
                  <span className="light">
                    <i className="far fa-clock clock" /> 30 min ago
                  </span>
                </div>
                <div className="float-right">
                  <a href="#" className="black bold">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="singleAd">
              <div className="adImg text-center">
                <img src="images/small.jpg" alt className="centerImg" />
              </div>
              <div className="adContent">
                <p className="f-18 latoBlack">
                  <a href="#" className="black">
                    Egypt's Sisi: Defaming security forces is 'high treason'
                  </a>
                </p>
              </div>
              <hr />
              <div className="adFooter clearfix">
                <div className="float-left">
                  <span className="light  mrg-right-20">
                    <i className="fas fa-user clock" />amruismaiil
                  </span>
                  <span className="light">
                    <i className="far fa-clock clock" /> 30 min ago
                  </span>
                </div>
                <div className="float-right">
                  <a href="#" className="black bold">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ads;
