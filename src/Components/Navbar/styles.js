import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  navEles: {
    fontFamily: "Poppins",
    fontSize: "0.8rem",
    letterSpacing: 2,
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "#FFCC00",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.5rem",
    },
  },
}));

export default useStyles;
