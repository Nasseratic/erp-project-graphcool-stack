import React from "react";
import Home from "./Home";
import TopNews from "./TopNews";
import Videos from "./Videos";
import News from "./News";
import Live from "./Live";
import Subscribe from "./Subscribe";
import Gallery from "./Gallery";
import Ads from "./Ads";
import BelowNews from "./BelowNews";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <TopNews />
        <BelowNews />
        <Videos />
        <News />
        <Live />
        <Subscribe />
        <Gallery />
        <Ads />
      </div>
    );
  }
}

export default Index;
