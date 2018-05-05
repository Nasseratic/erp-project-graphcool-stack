import React, { Component } from "react";

import SingleItemSearchResult from "./Item";

///  to get data from database
const itemResult = {
  srcImage: "/images/result.jpg",
  linkUri: null,
  linkText: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

class SearcgResultBox extends Component {
  render() {
    return (
      <div className="mycontainer">
        <p className="f-18 semiBold searchHead">
          <span className="resNo">
            Displaying results 1-10 out of 2106 for{" "}
          </span>
          <span className="country">Egypt</span>
        </p>
        <hr />
        <SingleItemSearchResult
          srcImage={itemResult.srcImage}
          linkUri={itemResult.linkUri}
          linkText={itemResult.linkText}
          description={itemResult.description}
        />
        <hr />
        <SingleItemSearchResult
          srcImage={itemResult.srcImage}
          linkUri={itemResult.linkUri}
          linkText={itemResult.linkText}
          description={itemResult.description}
        />
        <hr />
        <SingleItemSearchResult
          srcImage={itemResult.srcImage}
          linkUri={itemResult.linkUri}
          linkText={itemResult.linkText}
          description={itemResult.description}
        />
        <hr />
        <SingleItemSearchResult
          srcImage={itemResult.srcImage}
          linkUri={itemResult.linkUri}
          linkText={itemResult.linkText}
          description={itemResult.description}
        />
        <hr />
        <SingleItemSearchResult
          srcImage={itemResult.srcImage}
          linkUri={itemResult.linkUri}
          linkText={itemResult.linkText}
          description={itemResult.description}
        />
        <hr />
        <SingleItemSearchResult
          srcImage={itemResult.srcImage}
          linkUri={itemResult.linkUri}
          linkText={itemResult.linkText}
          description={itemResult.description}
        />
        <hr />
        <div className="pagination flex-wrap justify-content-between text-center">
          <div className="numbers semiBold f-18">
            <a href="" alt="the alt-text" className="active">
              <span>1</span>
            </a>
            <a href="" alt="the alt-text">
              <span>2</span>
            </a>
            <a href="" alt="the alt-text">
              <span>3</span>
            </a>
            <a href="" alt="the alt-text">
              <span>4</span>
            </a>
            <a href="" alt="the alt-text">
              <span>5</span>
            </a>
            <a href="" alt="the alt-text">
              <span>6</span>
            </a>
          </div>
          <div className="prev">
            <button>PREVIOUS</button>
          </div>
          <div className="next">
            <button>NEXT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearcgResultBox;
