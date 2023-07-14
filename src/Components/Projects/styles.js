import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    background: "linear-gradient(90deg,#03001e,#7303c0,#ec38bc)",
    position: "relative",
    paddingTop: "1rem",
    zIndex: 1,
  },
  // bgImage: {
  //   height: "100%",
  //   width: "100%",
  //   zIndex: "-1",
  //   position: "fixed",
  //   backgroundImage: `url("/bgs/dark5.jpg")`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   opacity: "0.2",
  // },
  // bg: {
  //   position: "absolute",
  //   color: "white",
  //   fontFamily: "Cinzel",
  //   fontSize: "10rem",
  //   opacity: "0.1",
  //   fontWeight: "bolder",
  //   letterSpacing: 85,
  //   width: "100%",
  //   textAlign: "center",
  //   userSelect: "none",
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // },
  mainCntnr: {
    marginTop: "4rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "2.5rem",
    },
  },
  prjctCntnr: {
    margin: "1rem",
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(20px)",
    padding: "1rem",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      padding: "0rem",
    },
  },
}));

export default useStyles;
