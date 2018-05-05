import React from "react";
import Time from "./Time";
import Slider from "./Slider";

class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className="mycontainer">
          <Time />
          <Slider />
        </div>
      </section>
    );
  }
}

export default Home;
