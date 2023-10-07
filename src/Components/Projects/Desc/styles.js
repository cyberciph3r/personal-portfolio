import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    width: "100%",
    display: "flex",
    color: "white",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  title: {
    paddingBottom: "1rem",
    fontFamily: "Poppins",
    fontSize: "2rem",
    fontWeight: "bolder",
    letterSpacing: 2,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  dsc: {
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));

export default useStyles;
