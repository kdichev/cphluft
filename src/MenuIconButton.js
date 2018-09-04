import React from "react";
import { withProps, nest } from "recompose";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default withProps({
  color: "inherit",
  "aria-label": "Menu"
})(nest(IconButton, () => <MenuIcon />));
