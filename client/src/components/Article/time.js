import React from "react";

class time extends React.Component {
  constructor(props) {
    super();
    console.log('====================================');
    console.log(props.imgUrl);
    console.log('====================================');
  }
  render() {  
    return (
      <div className="aboutArticle clearfix mrg-btm-40">
        <div className="user float-left">
        
          <img src={this.props.imageUrl||''} alt />
          <span className="light f-16">{this.props.authorName||'loading'}</span>
        
        </div>
        <div className="time float-left">
          <i className="far fa-clock clock" />
          <span className="light f-16"> {this.props.date}</span>
        </div>
      </div>
    );
  }
}

export default time;
