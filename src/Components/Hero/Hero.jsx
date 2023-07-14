import React from "react";
import useStyles from "./styles";
import Canvas3D from "../../Canvas3D";
import { Grid, Typography } from "@material-ui/core";
import FadeIn from "react-fade-in/lib/FadeIn";
import ReactRotatingText from "react-rotating-text";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <Navbar />
      <Grid container className={classes.div}>
        <Grid item md={7} className={classes.heroBox}>
          <FadeIn transitionDuration={1000} className={classes.fade}>
            <Typography className={classes.helloWorld}>
              Hello, World!
            </Typography>
            <Typography className={classes.heroName}>
              <span className={classes.heroSpan}>I'm</span> Varun,
            </Typography>
            <ReactRotatingText
              className={classes.rotatingTxt}
              items={["Full-stack Developer", "Flutter Developer"]}
            />
            <div className={classes.heroIcons}>
              <GitHubIcon
                className={classes.icon}
                onClick={() => {
                  window.open("https://github.com/cyberciph3r", "_blank");
                }}
              />
              <LinkedInIcon
                className={classes.icon}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/varun-gudamsetti-b8a743206/",
                    "_blank"
                  );
                }}
              />
            </div>
          </FadeIn>
        </Grid>
        <Grid item md={5} className={classes.objectGrid}>
          <div className={classes.ob}>
            <Canvas3D />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
