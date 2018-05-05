import React from "react";

class events extends React.Component {
  render() {
    return (
      <section className="events">
        <div className="mycontainer">
          <p className="sectionTitle">EVENTS</p>
          <hr className="belowSectionTitle" />
          <div className="eventBg d-flex align-items-center flex-wrap">
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
              <p className="mrg-btm-10 latoBlack mrg-btm-10">
                WILL START IN APRIL
              </p>
              <button className="moreBtn f-18 medium">READ MORE</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default events;
