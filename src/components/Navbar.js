import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const style = { fontSize: "1.35em", padding: "0.75em 2em", color: "#4fb8a6" };
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
      <h1
        style={{
          position: "absolute",
          left: "0.2em",
          top: "0.38em",
          fontSize: "2em",
        }}
      >
        LOGO
      </h1>

      <NavLink to="/" exact={true} style={style} activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/library" style={style} activeStyle={activeStyle}>
        Library
      </NavLink>
      <NavLink to="/texturing" style={style} activeStyle={activeStyle}>
        Texturing
      </NavLink>
      <NavLink to="/compose" style={style} activeStyle={activeStyle}>
        Compose
      </NavLink>
    </div>
  );
}

export default Navbar;
