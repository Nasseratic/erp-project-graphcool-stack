import React from "react";

class video extends React.Component {
  render() {
    return (
      <a href="#">
        <div className="articleImg text-center position-relative">
          <img src="images/articleHome.jpg" alt className="centerImg" />
          <div className="position-absolute play-and-white">
            <div className="play white">
              <i className="fas fa-play" />
            </div>
            <div className="whiteBg text-left">
              <span className="light videoTime ">3:55</span>
              <p className="semiBold videoHead">
                Egypt's Sisi: Defaming security forces is 'high treason'
              </p>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default video;
