import React from "react";

class social extends React.Component {
  render() {
    return (
      <div className="belowSocial">
        <div className="belowNews d-inline-block">
          <ul>
            <li>
              <a href="#">
                <span className="heavy">More News on </span>
                <span className="bold">#EGYPT #SISI</span>
              </a>
            </li>
            <li>
              <a href="#" className="bold">
                <i className="fas fa-star" />FOLLOWING
              </a>
            </li>
            <li>
              <a href="#" className="bold">
                <i className="far fa-envelope" /> GET EMAIL UPDATES
              </a>
            </li>
          </ul>
        </div>
        <div className="socialIcons d-inline-block float-right">
          <a href="#" className="black">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="black">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="black">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    );
  }
}

export default social;
