import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    background: "linear-gradient(90deg,#000428,#004e92)",
    position: "relative",
    zIndex: 9,
    [theme.breakpoints.down("md")]: {
      height: "100vh",
    },
  },
  // bgImage: {
  //   height: "100%",
  //   width: "100%",
  //   zIndex: "-1",
  //   position: "absolute",
  //   backgroundImage: `url("/bgs/dark4.jpg")`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   backgroundAttachment: "fixed",
  //   opacity: "0.2",
  // },
  // bg: {
  //   color: "white",
  //   fontSize: "10rem",
  //   opacity: "0.05",
  //   fontWeight: "bolder",
  //   position: "absolute",
  //   letterSpacing: 45,
  //   width: "100%",
  //   textAlign: "center",
  //   userSelect: "none",
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // },
  heading: {
    color: "white",
    fontFamily: "Cinzel",
    textAlign: "center",
    fontSize: "2rem",
    letterSpacing: 2,
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  formStyle: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: "0.5rem",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(20px)",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  input: {
    width: "100%",
    "& .MuiFilledInput-root": {
      backgroundColor: "#F0F0F0",
      fontFamily: "Montserrat",
      fontSize: "1rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
  },
  label: {
    fontFamily: "Montserrat",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  txtarea: {
    fontFamily: "Montserrat",
    fontSize: "1rem",
    borderRadius: "5px",
    backgroundColor: "#F0F0F0",
    padding: "0.7rem",
    outline: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  btn: {
    width: "100%",
    backgroundColor: "#FFCC00",
    color: "black",
    padding: "0.5rem",
    fontSize: "1rem",
    fontWeight: "bolder",
    fontFamily: "Montserrat",
    display: "flex",
    justifyContent: "center",
    letterSpacing: 2,
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },
}));

export default useStyles;
