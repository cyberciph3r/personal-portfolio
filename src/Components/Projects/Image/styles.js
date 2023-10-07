import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageDiv: {
    overflow: "hidden",
  },
  img: {
    width: "99%",
    transition: "0.3s",
    backgroundColor: "white",
    border: "2px solid white",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  btnDiv: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#FFCC00",
    color: "black",
    marginTop: "1rem",
    fontSize: "10px",
    fontWeight: "bolder",
    fontFamily: "Montserrat",
    letterSpacing: 1,
    textTransform: "none",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },
}));

export default useStyles;
