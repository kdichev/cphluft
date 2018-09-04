import React from "react";
import LogoIcon from "./LogoIcon";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  progressContainer: {
    width: 70
  }
});

export default withStyles(styles)(props => (
  <div className={props.classes.container}>
    <LogoIcon width="90" height="90" />
    <div className={props.classes.progressContainer}>
      <LinearProgress color="secondary" />
    </div>
  </div>
));
