import React from "react";

class time extends React.Component {
  render() {
    return (
      <div className="aboutArticle clearfix mrg-btm-40">
        <div className="user float-left">
          <img src="images/profile.jpg" alt />
          <span className="light f-16">AMRUISMAIIL</span>
        </div>
        <div className="time float-left">
          <i className="far fa-clock clock" />
          <span className="light f-16"> 25MIN AGO</span>
        </div>
      </div>
    );
  }
}

export default time;
