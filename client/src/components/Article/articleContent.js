import React from "react";
import time from "./time";
import frist_content from "./frist_content";
import video from "./video";
import second_content from "./second_content";
import social from "./social";
import toHome from "./toHome";
import readMore from "../Shared/ReadMore";

class articleContent extends React.Component {
  render() {
    return (
      <section className="articleContent">
        <div className="mycontainer">
          <p className="bold head">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <time />
          <hr />
          <frist_content />
          <video />
          <second_content />
          <social />
          <toHome />
          <readMore />
        </div>
      </section>
    );
  }
}

export default articleContent;
