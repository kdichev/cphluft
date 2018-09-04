import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Paper,
  Divider
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  withStateHandlers,
  lifecycle,
  compose,
  withProps,
  branch,
  renderComponent,
  nest
} from "recompose";
import Search from "@material-ui/icons/Search";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import FlightLand from "@material-ui/icons/FlightLand";
import FilterList from "@material-ui/icons/FilterList";
import DateRange from "@material-ui/icons/DateRange";
import Schedule from "@material-ui/icons/Schedule";
import LinearProgress from "@material-ui/core/LinearProgress";
import Tab from "./Tab";
import TextField from "./TextField";
import LogoIcon from "./LogoIcon";
import MenuIconButton from "./MenuIconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Route, withRouter } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import Card from "./Card";
import posed, { PoseGroup } from "react-pose";
import Slide from "@material-ui/core/Slide";
import Collapse from "@material-ui/core/Collapse";

import Grow from "@material-ui/core/Grow";
import LaunchScreen from "./LaunchScreen";

import SwipeableViews from "react-swipeable-views";

const withLabel = Label =>
  withProps({
    label: <Label />
  });

const withIcon = Icon => withProps({ icon: <Icon /> });

const DepartureTab = compose(
  withLabel(() => (
    <Typography color="inherit" variant="subheading">
      afgang
    </Typography>
  )),
  withIcon(FlightTakeoff)
)(Tab);

const ArrivalTab = compose(
  withLabel(() => (
    <Typography color="inherit" variant="subheading">
      ankomst
    </Typography>
  )),
  withIcon(FlightLand)
)(Tab);

const SearchToolbar = compose(
  withStyles(theme => ({
    className: {
      display: "flex",
      marginTop: 8,
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row"
      }
    }
  })),
  withProps(props => ({ className: props.classes.className }))
)(Toolbar);

const ContentContainer = compose(
  withStyles(theme => ({
    className: {
      backgroundColor: "#eeeeee",
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      height: "100%"
    }
  })),
  withProps(props => ({ className: props.classes.className }))
)(Paper);

const ContentToolbar = compose(
  withStyles(theme => ({
    className: {
      backgroundColor: "white",
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16
    }
  })),
  withProps(props => ({ className: props.classes.className, variant: "dense" }))
)(Toolbar);

const ContentToolbarTitle = withProps(props => ({
  variant: "caption"
}))(Typography);

const withSlideUpAnimation = C =>
  nest(withProps({ in: true, direction: "up", timeout: 250 })(Slide), C);

const Header = withProps({
  position: "static",
  elevation: 0,
  style: { transition: "min-height 100ms linear" }
})(AppBar);

const SearchField = compose(
  withProps({
    placeholder: "Søg på by, flyselskab eller flynummer..."
  }),
  withIcon(Search)
)(TextField);

const DateField = compose(
  withProps({
    placeholder: "Vælg dato"
  }),
  withIcon(DateRange)
)(TextField);

const TimeField = compose(
  withProps({
    placeholder: "Vælg tid"
  }),
  withIcon(Schedule)
)(TextField);

const App = ({
  value,
  onChange,
  onChangeIndex,
  open,
  toggleDrawer,
  toggle
}) => (
  <React.Fragment>
    <Header>
      <Toolbar>
        <MenuIconButton onClick={toggleDrawer} />

        <div style={{ flex: 1 }} />

        <Tabs value={value} onChange={onChange}>
          <DepartureTab />
          <ArrivalTab />
        </Tabs>
      </Toolbar>

      <SearchToolbar>
        <SearchField />
        <DateField />
        <TimeField />
      </SearchToolbar>
    </Header>
    <SwipeableViews
      index={value}
      onChangeIndex={onChangeIndex}
      slideStyle={{ overflow: "hidden" }}
    >
      <ContentContainer>
        <ContentToolbar>
          <ContentToolbarTitle>{"Explore Departures"}</ContentToolbarTitle>
          <div style={{ flex: 1 }} />
          <IconButton color="inherit">
            <FilterList />
          </IconButton>
        </ContentToolbar>
        <Divider />
        {[1, 2, 3, 4, 5, 6, 7].map(() => <Card />)}
      </ContentContainer>
      <ContentContainer>
        <ContentToolbar>
          <ContentToolbarTitle>{"Explore Arrivals"}</ContentToolbarTitle>

          <IconButton color="inherit">
            <FilterList />
          </IconButton>
        </ContentToolbar>
        <Divider />
        {[1, 2, 3, 4, 5, 6, 7].map(() => <Card />)}
      </ContentContainer>
    </SwipeableViews>
    <SwipeableDrawer open={open} onClose={toggleDrawer} onOpen={toggleDrawer}>
      <LogoIcon width="90" height="90" PathProps={{ fill: "#071143" }} />
      <List component="nav">
        <ListItem
          button
          onClick={() => {
            toggleDrawer();
          }}
        >
          <ListItemIcon>
            <Search />
          </ListItemIcon>
          <ListItemText primary="Søg på" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  </React.Fragment>
);

const withDrawerState = withStateHandlers(
  { open: false },
  { toggleDrawer: state => () => ({ open: !state.open }) }
);

const withMockLaunchScreen = compose(
  withStateHandlers({ loaded: false }),
  lifecycle({
    componentDidMount() {
      setTimeout(() => {
        this.setState({ loaded: true });
      }, 2000);
    }
  }),
  branch(({ loaded }) => !loaded, renderComponent(LaunchScreen))
);

const withTabsState = withStateHandlers(
  { value: 0 },
  {
    onChange: () => (e, value) => ({ value }),
    onChangeIndex: () => value => ({ value })
  }
);

const withContentState = withStateHandlers(
  { toggle: true },
  { handleOnCollapse: state => () => ({ toggle: !state.toggle }) }
);

const EApp = compose(
  withDrawerState,
  withTabsState,
  withMockLaunchScreen
)(App);

export default EApp;
