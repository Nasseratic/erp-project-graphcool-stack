import React from "react";

class Read_more extends React.Component {
  render() {
    return (
      <div className="mycontainer">
        <div className="articleBottom two text-center position-relative">
          <div className="bottomContent mrg-btm-20">
            <p className="float-left">WE ARE </p>
            <hr className="firstHr" />
            <p className="float-right">CONNECTED</p>
            <hr className="secondHr" />
            <p>#DIESELREBOOT</p>
          </div>
          <div className="main">
            <div className="more">
              <button className="moreBtn">READ MORE</button>
            </div>
            <p className="red lat">WILL START IN APRIL</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Read_more;
