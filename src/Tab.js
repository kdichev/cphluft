import { withStyles } from "@material-ui/core/styles";
import { Tab } from "@material-ui/core";

const styles = ({ mixins: { toolbar } }) => ({
  wrapper: {
    flexDirection: "row"
  },
  root: { minHeight: 48 }
});

export default withStyles(styles)(Tab);
