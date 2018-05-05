import React from "react";

class live extends React.Component {
  render() {
    return (
      <section className="live">
        <div className="mycontainer">
          <div className="fullWidth text-center position-relative">
            <img src="images/video.jpg" alt className="centerImg" />
            <div className="whiteBg">
              <p className="float-left liveHead text-left font-weight-bold f-25 latoBlack">
                Egypt's Sisi: Defaming security forces is 'high treason'
              </p>
              <p className="float-right liveWord text-right">
                <i className="fas fa-circle" />LIVE
              </p>
            </div>
            <p className="redBg position-absolute light">
              <i className="fas fa-video" />LIVE NEWS
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default live;
