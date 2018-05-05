import React from "react";

class home_internal extends React.Component {
  render() {
    return (
      <section className="home internal">
        <header>
          <div className="mycontainer">
            <img src="images/logo.png" alt className="logo" />
            <ul>
              <li className="tapName">
                <a href="#">Home</a>
              </li>
              <li className="tapName">
                <a href="#">Style</a>
              </li>
              <li className="tapName">
                <a href="#">Women</a>
              </li>
              <li className="tapName">
                <a href="#">Culture</a>
              </li>
              <li className="tapName">
                <a href="#">Grooming</a>
              </li>
              <li className="tapName">
                <a href="#">Enterainment</a>
              </li>
              <li className="tapName">
                <a href="#">Videos</a>
              </li>
              <form action className="float-right searchForm">
                <input type="text" />
                <button>
                  <i className="fas fa-search" />
                </button>
              </form>
              <li className="tapName headerSearch hideSearch">
                <a href="#">
                  <i className="fas fa-search" />Search
                </a>
              </li>
              <li className="tapName hideSearch">
                <a href="#" className="red">
                  Subscribe Now
                </a>
                <p className="thinItalic">Get the magazine</p>
              </li>
            </ul>
            <div className="float-right mynav">
              <i className="fas fa-bars white" />
            </div>
          </div>
        </header>
        <div className="mycontainer">
          <div className="date">
            <p className="day black">03</p>
            <p className="month">MARCH, 2018</p>
          </div>
          <div className="slider">
            <div className="sliderHeader mrg-btm-30">
              <span>News</span>
              <span className="bgColor">Cultre</span>
            </div>
            <div className="swiper-container swiper-slider-1">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slideContent">
                    <p className="f-lg semiBold mrg-btm-20">
                      Blandit Rutrum, Erat et Sagittis. Lorem Ipsum Dolor, Sit
                      Amet A
                    </p>
                    <p className="thin">
                      Blandit rutrum, erat et egestas ultricies, dolor tortor
                      egestas enim, quiste rhoncus sem purus eu sapien.
                      Curabitur a orci nec risus lacinia vehic. Lorem ipsum
                      dolor adipcising elit. Erat egestan sagittis lorem aupo
                      dolor sit ameta, auctor libero tempor...
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slideContent">
                    <p className="f-lg semiBold mrg-btm-20">
                      Blandit Rutrum, Erat et Sagittis. Lorem Ipsum Dolor, Sit
                      Amet A
                    </p>
                    <p className="thin">
                      Blandit rutrum, erat et egestas ultricies, dolor tortor
                      egestas enim, quiste rhoncus sem purus eu sapien.
                      Curabitur a orci nec risus lacinia vehic. Lorem ipsum
                      dolor adipcising elit. Erat egestan sagittis lorem aupo
                      dolor sit ameta, auctor libero tempor...
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slideContent">
                    <p className="f-lg semiBold mrg-btm-20">
                      Blandit Rutrum, Erat et Sagittis. Lorem Ipsum Dolor, Sit
                      Amet A
                    </p>
                    <p className="thin">
                      Blandit rutrum, erat et egestas ultricies, dolor tortor
                      egestas enim, quiste rhoncus sem purus eu sapien.
                      Curabitur a orci nec risus lacinia vehic. Lorem ipsum
                      dolor adipcising elit. Erat egestan sagittis lorem aupo
                      dolor sit ameta, auctor libero tempor...
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slideContent">
                    <p className="f-lg semiBold mrg-btm-20">
                      Blandit Rutrum, Erat et Sagittis. Lorem Ipsum Dolor, Sit
                      Amet A
                    </p>
                    <p className="thin">
                      Blandit rutrum, erat et egestas ultricies, dolor tortor
                      egestas enim, quiste rhoncus sem purus eu sapien.
                      Curabitur a orci nec risus lacinia vehic. Lorem ipsum
                      dolor adipcising elit. Erat egestan sagittis lorem aupo
                      dolor sit ameta, auctor libero tempor...
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default home_internal;
