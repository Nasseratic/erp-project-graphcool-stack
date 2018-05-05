import React from "react";

class Videos extends React.Component {
  render() {
    return (
      <section class="videos">
        <div class="mycontainer clearfix">
          <div class="mainVideo float-left text-center position-relative">
            <a href="#">
              <img src="images/video.jpg" alt="" class="centerImg" />
              <div class="position-absolute aroundMain">
                <div class="play">
                  <i class="fas fa-play white" />
                </div>
                <div class="mainOverlay whiteBg">
                  <p class="semiBold f-30 text-left">
                    Egypt's Sisi: Defaming security forces is 'high treason'
                  </p>
                  <div class="float-left passTime black">
                    <i class="far fa-clock clock" />
                    <span>25</span>
                    <span>MIN AGO</span>
                  </div>
                </div>
              </div>
              <div class="trend position-absolute light redBg">TRENDING</div>
            </a>
          </div>
          <div class="colVideo float-left">
            <div class="subVideo text-center position-relative">
              <a href="#">
                <img src="images/moo.jpg" alt="" class="centerImg" />
                <div class="subOverlay clearfix">
                  <div class="play float-left position-absolute ">
                    <i class="fas fa-play" />
                    <span>03:15</span>
                  </div>
                  <div class="videoContent position-absolute ">
                    <p class="light white text-left">
                      Lorem Ipsum is simply dummy text of the printing{" "}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="subVideo text-center position-relative">
              <a href="">
                <img src="images/belowMo.jpg" alt="" class="centerImg" />
                <div class="subOverlay clearfix">
                  <div class="play float-left position-absolute ">
                    <i class="fas fa-play" />
                    <span>03:15</span>
                  </div>
                  <div class="videoContent position-absolute ">
                    <p class="light white text-left">
                      Lorem Ipsum is simply dummy text of the printing{" "}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="subVideo text-center position-relative">
              <a href="">
                <img src="images/moo.jpg" alt="" class="centerImg" />
                <div class="subOverlay clearfix">
                  <div class="play float-left position-absolute ">
                    <i class="fas fa-play" />
                    <span>03:15</span>
                  </div>
                  <div class="videoContent position-absolute ">
                    <p class="light white text-left">
                      Lorem Ipsum is simply dummy text of the printing{" "}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Videos;
