import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const style = {
    fontSize: "1.35em",
    padding: "0.75em 2em",
    color: "#4fb8a6",
    fontFamily: "Lato, sans-serif",
  };
  const activeStyle = {
    fontWeight: "bold",
    backgroundColor: "#E6E6E6",
  };

  return (
    <div
      style={{
        // borderBottom: "0.2em solid #4183C4",
        display: "flex",
        justifyContent: "space-around",
        marginLeft: "6.5em",
        marginRight: "2.5em",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "2.9em",
          top: "0.5em",
          width: "5em",
        }}
      >
        <img
          style={{ width: "100%" }}
          src="/RETAILBUCKET_Logo_Green_v1.png"
          alt="logo"
        />
      </div>

      <NavLink to="/" exact={true} style={style} activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/library" style={style} activeStyle={activeStyle}>
        Library
      </NavLink>
      {/* <NavLink to="/texturing" style={style} activeStyle={activeStyle}>
        Texturing
      </NavLink> */}
      <NavLink to="/compose" style={style} activeStyle={activeStyle}>
        Compose
      </NavLink>
    </div>
  );
}

export default Navbar;
