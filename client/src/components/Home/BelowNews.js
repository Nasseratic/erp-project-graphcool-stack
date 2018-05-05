import React from "react";

class More_News extends React.Component {
  render() {
    return (
      <div className="mycontainer clearfix">
        <div className="belowNews float-left">
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
      </div>
    );
  }
}

export default More_News;
