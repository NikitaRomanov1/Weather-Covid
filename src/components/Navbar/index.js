import React from "react";
import { NavbarStyle, Text } from "../../styles/styles";
import Search from "../Search";

const Navbar = () => {
  return (
    <NavbarStyle>
      <Text>Погода и Ковид</Text>
      <Search />
    </NavbarStyle>
  );
};

export default Navbar;
