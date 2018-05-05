import React from "react";

class topNews extends React.Component {
  render() {
    return (
      <section className="topNews">
        <div className="mycontainer clearfix">
          <p className="sectionTitle">Top News</p>
          <hr className="belowSectionTitle" />
          <div className="singleCol float-left">
            <div className="mainNews">
              <div className="img text-center">
                <img src="images/internal1.jpg" alt className="centerImg" />
              </div>
              <div className="content clearfix ">
                <p className="semiBold mrg-top-20 f-lg position-relative">
                  <a href="#">
                    Egypt's Sisi: Defaming security forces is 'high treason'
                  </a>
                </p>
                <div className="internalTopNews clearfix">
                  <div className="float-left mrg-top-20">
                    <span className="light  mrg-right-20">
                      <i className="fas fa-user clock" />amruismaiil
                    </span>
                    <span className="light">
                      <i className="far fa-clock clock" /> 30 min ago
                    </span>
                  </div>
                  <a href="#" className="readMore mrg-top-20">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="singleCol float-left">
            <div className="subNews clearfix">
              <div className="img float-left text-center">
                <img src="images/interna2.jpg" alt className="centerImg" />
              </div>
              <div className="d-flex align-items-center subNewsContent">
                <p className="semiBold f-md">
                  <a href="#">
                    Egypt's Sisi: Defaming security forces is 'high treason'
                  </a>
                </p>
              </div>
            </div>
            <div className="subNews clearfix">
              <div className="img float-left text-center">
                <img src="images/interna3.jpg" alt className="centerImg" />
              </div>
              <div className="d-flex align-items-center subNewsContent">
                <p className="semiBold f-md">
                  <a href="#">
                    Egypt's Sisi: Defaming security forces is 'high treason'
                  </a>
                </p>
              </div>
            </div>
            <div className="subNews clearfix">
              <div className="img float-left text-center">
                <img src="images/interna4.jpg" alt className="centerImg" />
              </div>
              <div className="d-flex align-items-center subNewsContent">
                <p className="semiBold f-md">
                  <a href="#">
                    Egypt's Sisi: Defaming security forces is 'high treason'
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default topNews;
