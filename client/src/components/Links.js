import React from "react";

class links extends React.Component {
  render() {
    return (
      <div className="mycontainer d-none d-md-block">
        <hr />
        <ul className="tabs d-flex justify-content-between">
          <li>
            <a href className="active">
              SPORTS
            </a>
          </li>
          <li>
            <a href>LIFE</a>
          </li>
          <li>
            <a href>MONEY</a>
          </li>
          <li>
            <a href>TECH</a>
          </li>
          <li>
            <a href>TRAVEL</a>
          </li>
          <li>
            <a href>STYLE</a>
          </li>
          <li>
            <a href>WATCHER</a>
          </li>
          <li>
            <a href>HEALTH</a>
          </li>
          <li>
            <a href>JOB</a>
          </li>
          <li>
            <a href>NETWORK</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default links;
