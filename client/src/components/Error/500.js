import React from "react";
import { Link } from "react-router-dom";
export default () => (
  <div>
    <div class="mycontainer">
      <div class="notFound d-flex align-content-center justify-content-center flex-wrap">
        <img src="images/500.png" alt="" class="align-self-center" />
        <p class="bold ops text-center">Oops!</p>
        <p class="medium align-self-start text-center text">
          Sorry for your inconvenience.
        </p>
        <p class="medium align-self-start text-center text">
          {" "}
          There is temporary error at system please try again later.
        </p>
        <Link to="/" className="bold text-center white align-self-start">
          GO BACK
        </Link>
      </div>
    </div>
  </div>
);
