import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui fxed menu">
      <div className="ui conatainer center">
        <Link to="/">
          <h1 style={{ margin: "20px" }}>Kharaiti</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
