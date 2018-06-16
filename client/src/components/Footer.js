import React from "react";

class footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="upperFooter">
          <div className="mycontainer">
            <div className=" d-flex justify-content-between flex-wrap">
              <div className="logowrapper upper">
                <img src="/images/logo.png" alt className="logo" />
              </div>
              <div className="middle clearfix upper">
                <div className="contact float-left">
                  <p className="f-12 white mrg-btm-10">CONTACT US</p>
                  <p className="float-right f-12 white footerNxt">NEXT</p>
                  <p className="f-25 light white mrg-btm-30">AMRU ISMAIIL|</p>
                  <p className="f-12">
                    <span>MESSAGE</span>{" "}
                    <span>
                      <i className="fas fa-circle" />FIRST NAME
                    </span>{" "}
                    <span>
                      <i className="fas fa-circle" />LAST NAME
                    </span>
                    <span>
                      <i className="fas fa-circle" />EMAIL
                    </span>
                  </p>
                </div>
              </div>
              <div className="send upper">
                <p className="f-12 medium white">sign up for our newsletter</p>
                <form action className="mrg-top-20">
                  <input type="text" placeholder="YOUR EMAIL ADDRESS" />
                  <button className="white f-12 light">SEND</button>
                </form>
              </div>
            </div>
            <ul className="d-block d-md-flex justify-content-between">
              <li>
                <a href="#" className="white">
                  <i className="fab fa-facebook-f" />FACEBOOK
                </a>
              </li>
              <li>
                <a href="#" className="white">
                  <i className="fab fa-twitter" />TWITTER
                </a>
              </li>
              <li>
                <a href="#" className="white">
                  <i className="fab fa-youtube" />YOUTUBE
                </a>
              </li>
              <li>
                <a href="#" className="white">
                  <i className="fab fa-linkedin-in" />LINKED IN
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lowerFooter">
          <div className="mycontainer">
            <div className>
              <ul className="d-block d-md-flex justify-content-between">
                <li className>
                  <p>52 El-Batal Ahmed Abd El-Aziz</p>
                  <p>Giza - Egypt</p>
                </li>
                <li className>
                  <p>Email : contact@newsextra.com</p>
                  <p>Phone : +20 01 23 45 67 89 </p>
                </li>
                <li className>
                  <p>© 2018 All rights reserved.</p>
                  <p>Legal notice</p>
                  <p>Designed by DOTDEV</p>
                </li>
                <li className>
                  <p>AR EN</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
