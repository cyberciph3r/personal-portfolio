import { Button, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import FadeIn from "react-fade-in/lib/FadeIn";

const Image = ({ src, liveURL, gitURL, isWA }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainDiv}>
      <FadeIn>
        <div className={classes.imageDiv}>
          <img src={src} className={classes.img} loading="lazy" />
        </div>
        <div className={classes.btnDiv}>
          {isWA ? (
            <Button
              className={classes.btn}
              onClick={() => {
                window.open("https://youtu.be/bkN0nfbzAW0", "_blank");
              }}
            >
              Video Demo
            </Button>
          ) : (
            <Button
              className={classes.btn}
              onClick={() => {
                window.open(liveURL, "_blank");
              }}
            >
              Website
            </Button>
          )}
          {isWA && (
            <Button
              className={classes.btn}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1wyzuHPRGTkiXgNPgYuszRz9pg11ea0sd/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              Apk
            </Button>
          )}
          <Button
            className={classes.btn}
            onClick={() => {
              window.open(gitURL, "_blank");
            }}
          >
            Code
          </Button>
        </div>
      </FadeIn>
    </Grid>
  );
};

export default Image;
