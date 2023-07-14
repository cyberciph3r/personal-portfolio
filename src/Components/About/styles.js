import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    height: "100vh",
    width: "100%",
    display: "flex",
    boxSizing: "border-box",
    background: "linear-gradient(#200122,#6f0000)",
    overflow: "hidden",
    zIndex: "1",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "2rem",
    },
  },
  // bgImage: {
  //   height: "100vh",
  //   width: "100%",
  //   zIndex: "-1",
  //   position: "absolute",
  //   backgroundImage: `url("/bgs/dark3.jpg")`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   opacity: "0.2",
  // },
  // bg: {
  //   color: "white",
  //   position: "absolute",
  //   fontSize: "10rem",
  //   opacity: "0.05",
  //   fontWeight: "bolder",
  //   letterSpacing: 81,
  //   width: "100%",
  //   textAlign: "center",
  //   paddingTop: "1rem",
  //   paddingLeft: "2rem",
  //   userSelect: "none",
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // },
  gridCntnr: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  abtDiv: {
    color: "white",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      height: "50%",
      padding: "1rem",
      display: "flex",
      alignItems: "center",
    },
  },
  titles: {
    paddingBottom: "1rem",
    fontFamily: "Cinzel",
    fontSize: "2rem",
    fontWeight: "bolder",
    textAlign: "center",
    color: "white",
    letterSpacing: 2,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  abtDesc: {
    fontFamily: "Montserrat",
    letterSpacing: 2,
    fontSize: "1rem",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
  },
  skills: {
    display: "flex",
    alignItems: "center",
    padding: "2rem",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      height: "50%",
      padding: "2rem",
      display: "flex",
      alignItems: "start",
    },
  },
  iconsCntnr: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconPadding: {
    padding: "1.3rem",
    paddingBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.6rem",
    },
  },
  boldTxt: {
    color: "#FFCC00",
    fontWeight: "bolder",
  },
}));

export default useStyles;
