
import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "90px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "maroon",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/ExampleTrade"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
        Example Trade
      </NavLink>

      <NavLink
        to="/Instructions"
        exact
        style={linkStyles}
        activeStyle={{
          background: "maroon",
        }}
      >
        Instructions
      </NavLink>
    </div>
  );
}

export default NavBar

