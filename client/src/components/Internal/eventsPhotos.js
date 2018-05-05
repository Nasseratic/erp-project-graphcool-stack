import React from "react";

class eventsPhotos extends React.Component {
  render() {
    return (
      <section className="eventsPhotos">
        <div className="mycontainer">
          <p className="sectionTitle">PHOTOS</p>
          <hr className="belowSectionTitle" />
          <div className="swiper-container events-slider differentArrows">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="myphoto text-center">
                  <img src="images/internal1.jpg" alt className="centerImg" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="myphoto text-center">
                  <img src="images/internal1.jpg" alt className="centerImg" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="myphoto text-center">
                  <img src="images/internal1.jpg" alt className="centerImg" />
                </div>
              </div>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
      </section>
    );
  }
}

export default eventsPhotos;
