import React from "react";
import Time from "./Time";
import FristContent from "./FristContent";
import Video from "./Video";
import SecondContent from "./SecondContent";
import Social from "./Social";
import ToHome from "./ToHome";
import ReadMore from "./ReadMore";

class articleContent extends React.Component {
  render() {
    return (
      <section className="articleContent">
        <div className="mycontainer">
          <p className="bold head">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <Time />
          <hr />
          <FristContent />
          <Video />
          <SecondContent />
          <Social />
          <ToHome />
          <ReadMore />
        </div>
      </section>
    );
  }
}

export default articleContent;
