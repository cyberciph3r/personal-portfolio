import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  ul: {
    paddingLeft: "1rem",
  },
  li: {
    listStylePosition: "outside",
    paddingBottom: "1rem",
  },
  boldTxt: {
    color: "#FFCC00",
    fontWeight: "bolder",
  },
}));

export default useStyles;
