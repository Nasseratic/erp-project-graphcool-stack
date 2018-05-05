import React from "react";

class SingleItemSearchResult extends React.Component {
  constructor(props) {
    super();
    this.itemSrcImage = props.srcImage;
    this.itemLinkUri = props.linkUri;
    this.itemLinkText = props.linkText;
    this.itemDescription = props.description;
  }
  render() {
    return (
      <div className="singleResult clearfix position-relative">
        <div className="resultImg text-center">
          <img
            src={this.itemSrcImage}
            alt="result-alt-text"
            className="centerImg"
          />
        </div>
        <div className="resultContent">
          <p className="semiBold mrg-btm-20 head">
            <a href={this.itemLinkUri} alt="the alt-text" className="black">
              {this.itemLinkText}
            </a>
          </p>
          <p className="light description">{this.itemDescription}</p>
        </div>
      </div>
    );
  }
}

export default SingleItemSearchResult;
