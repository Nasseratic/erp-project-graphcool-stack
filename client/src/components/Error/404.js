import React from "react";
import { Link } from "react-router-dom";
export default () => (
  <div class="mycontainer">
    <div class="notFound d-flex align-content-center justify-content-center flex-wrap">
      <img src="images/404.png" alt="" class="align-self-center" />
      <p
        class="semiBold align-self-start text-center text"
        style={{ width: "100%" }}
      >
        The page you were looking for doesn't exist
      </p>
      <Link
        to="/"
        className="backtohome bold text-center white align-self-start"
      >
        GO BACK
      </Link>
    </div>
  </div>
);
