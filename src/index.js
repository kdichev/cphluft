import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");

const theme = createMuiTheme({
  palette: {
    primary: { main: "#071143" },
    secondary: {
      main: "#fecb00"
    },
    background: {
      default: "#071143"
    }
  }
});
console.log(theme);

const Bootstrap = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Router>{children}</Router>
    </ThemeProvider>
  </MuiThemeProvider>
);

if (rootElement) {
  ReactDOM.render(
    <Bootstrap>
      <App />
    </Bootstrap>,
    rootElement
  );
}
