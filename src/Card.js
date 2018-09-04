import React from "react";
import { Typography, Paper } from "@material-ui/core";

export default props => (
  <Paper style={{ height: 90, margin: 5, display: "flex" }}>
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Typography variant="caption">SCHEDULED</Typography>
      <Typography>08:05</Typography>
    </div>
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Typography variant="caption">STATUS</Typography>
      <Typography>On time 08:05</Typography>
    </div>
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Typography variant="caption">TERMINAL</Typography>
      <Typography>T2</Typography>
    </div>
  </Paper>
);
