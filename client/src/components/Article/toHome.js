import React from "react";
import {Link} from "react-router-dom";
class toHome extends React.Component {
  render() {
    return (
      <div className="backHome text-center">
        <Link className="backtohome bold text-center" to="/"  >Back To Home</Link>
      </div>
    );
  }
}

export default toHome;
