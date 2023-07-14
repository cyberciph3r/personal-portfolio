import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  home: {
    height: "2.5rem",
    width: "2.5rem",
    zIndex: "1",
    position: "fixed",
    bottom: "0",
    left: "0",
    margin: "1rem",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.5s",
    [theme.breakpoints.down("sm")]: {
      height: "2rem",
      width: "2rem",
    },
    "&:hover": {
      backgroundColor: "#FFCC00",
    },
  },
  icn: {
    width: "100%",
    height: "100%",
  },
}));

export default useStyles;
