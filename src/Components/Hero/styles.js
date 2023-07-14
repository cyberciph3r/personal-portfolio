import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    height: "100vh",
    width: "100%",
    overflowX: "hidden",
    backgroundColor: "black",
    backgroundImage: `url("/bgs/dark1.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    userSelect: "none",
    [theme.breakpoints.down("lg")]: {
      backgroundPosition: "80%",
    },
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "70%",
    },
  },
  div: {
    height: "100vh",
    width: "100%",
  },
  heroBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "10%",
    color: "white",
  },
  helloWorld: {
    fontFamily: "Cinzel",
    letterSpacing: 4,
    color: "#999999",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  heroSpan: {
    color: "#999999",
  },
  fade: {
    zIndex: "9",
  },
  heroIcons: {
    display: "flex",
    gap: 40,
    paddingTop: "1rem",
    alignItems: "center",
    cursor: "pointer",
  },
  icon: {
    opacity: "0.5",
    "&:hover": {
      opacity: "1",
    },
  },
  heroName: {
    fontFamily: "Cinzel",
    letterSpacing: 4,
    fontSize: "5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  rotatingTxt: {
    fontFamily: "Cinzel",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  objectGrid: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  ob: {
    height: "100vh",
    width: "100vw",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      height: "80%",
      overflowX: "hidden",
      zIndex: 1,
      transform: "translate(-15%)",
    },
    [theme.breakpoints.down("xs")]: {
      transform: "translate(-30%)",
    },
  },
}));

export default useStyles;
