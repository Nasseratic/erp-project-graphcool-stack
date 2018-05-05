import React from "react";

class second_events extends React.Component {
  render() {
    return (
      <section className="events">
        <div className="mycontainer">
          <div className="eventBg d-flex align-items-center flex-wrap two">
            <div className="up align-self-end">
              <div className="bottomContent">
                <p className="float-left first">WE ARE </p>
                <hr className="firstHr" />
                <p className="float-right second">CONNECTED</p>
                <hr className="secondHr" />
                <p className="all">#DIESELREBOOT</p>
              </div>
            </div>
            <div className="down align-self-start text-center">
              <p className="latoBlack mrg-btm-10">WILL START IN APRIL</p>
              <button className="moreBtn">READ MORE</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default second_events;
