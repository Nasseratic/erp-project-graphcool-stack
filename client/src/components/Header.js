import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="mycontainer">
          <Link to="/">
            <img src="images/logo.png" alt className="logo" />
          </Link>
          <ul>
            <li className="tapName">
              <Link to="/">Home</Link>
            </li>
            <li className="tapName">
              <a href="#">Style</a>
            </li>
            <li className="tapName">
              <a href="#">Women</a>
            </li>
            <li className="tapName">
              <a href="#">Culture</a>
            </li>
            <li className="tapName">
              <a href="#">Grooming</a>
            </li>
            <li className="tapName">
              <a href="#">Enterainment</a>
            </li>
            <li className="tapName">
              <a href="#">Videos</a>
            </li>
            <form action className="float-right searchForm">
              <input type="text" />
              <button>
                <i className="fas fa-search" />
              </button>
            </form>
            <li className="tapName headerSearch hideSearch">
              <Link to="/search">
                <i className="fas fa-search" />Search
              </Link>
            </li>
            <li className="tapName hideSearch">
              <a href="#" className="red">
                Subscribe Now
              </a>
              <p className="thinItalic">Get the magazine</p>
            </li>
          </ul>
          <div className="float-right mynav">
            <i className="fas fa-bars white" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
