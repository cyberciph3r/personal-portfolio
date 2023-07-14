import { Grid, Icon, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import FadeIn from "react-fade-in/lib/FadeIn";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import GitHubIcon from "@mui/icons-material/GitHub";
import Navbar from "../Navbar/Navbar";
import BackHome from "../BackHome/BackHome";

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      {/* <div className={classes.bgImage}></div> */}
      <Navbar page="about" />
      <BackHome />

      {/* <Typography className={classes.bg}>ABOUT ME</Typography>
      <Typography className={classes.bg} style={{ bottom: "1rem" }}>
        ABOUT ME
      </Typography> */}

      <Grid container className={classes.gridCntnr}>
        <Grid item md={7} sm={12} className={classes.abtDiv}>
          <FadeIn>
            <Typography className={classes.titles}>Get to know me!</Typography>
            <Typography className={classes.abtDesc}>
              I'm a passionate
              <span className={classes.boldTxt}> full-stack developer </span>
              proficient in the<span className={classes.boldTxt}> MERN </span>
              stack, bringing both
              <span className={classes.boldTxt}> front-end </span>and
              <span className={classes.boldTxt}> back-end </span>
              expertise to deliver captivating web applications. With experience
              in
              <span className={classes.boldTxt}> Flutter development</span>, I
              also enjoy building cross-platform
              <span className={classes.boldTxt}> mobile apps </span>with
              impressive user interfaces. Check out some of my work in the
              <span className={classes.boldTxt}> Projects </span>section.
              <br />
              <br />
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </Typography>
          </FadeIn>
        </Grid>
        <Grid item md={5} sm={12} className={classes.skills}>
          <FadeIn>
            <Typography className={classes.titles}>My Skills</Typography>
            <Grid container className={classes.iconsCntnr}>
              <Grid item className={classes.iconPadding}>
                <HtmlIcon fontSize="large" />
              </Grid>
              <Grid item className={classes.iconPadding}>
                <CssIcon fontSize="large" />
              </Grid>
              <Grid item className={classes.iconPadding}>
                <JavascriptIcon fontSize="large" />
              </Grid>
              <Grid item className={classes.iconPadding}>
                <Icon>
                  <img src="/SkillIcons/react.png" width="25px" />
                </Icon>
              </Grid>
              <Grid item className={classes.iconPadding}>
                <Icon>
                  <img src="/SkillIcons/node.png" width="25px" />
                </Icon>
              </Grid>
              <Grid item className={classes.iconPadding}>
                <Icon>
                  <img
                    src="/SkillIcons/threejs.png"
                    width="20px"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "3px",
                    }}
                  />
                </Icon>
              </Grid>
              <Grid item className={classes.iconPadding}>
                <Icon>
                  <img
                    src="/SkillIcons/mongo.png"
                    width="22px"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "3px",
                    }}
                  />
                </Icon>
              </Grid>
              <Grid item className={classes.iconPadding}>
                <Icon>
                  <img src="/SkillIcons/ex.png" width="30px" />
                </Icon>
              </Grid>
              <Grid item className={classes.iconPadding}>
                <Icon>
                  <img src="/SkillIcons/mui.png" width="25px" />
                </Icon>
              </Grid>
              <Grid item className={classes.iconPadding}>
                <Icon>
                  <img src="/SkillIcons/flutter.png" />
                </Icon>
              </Grid>
              <Grid item className={classes.iconPadding}>
                <Icon>
                  <img src="/SkillIcons/dart.png" width="25px" />
                </Icon>
              </Grid>
              <Grid item className={classes.iconPadding}>
                <Icon>
                  <img src="/SkillIcons/java.png" width="25px" />
                </Icon>
              </Grid>
              <Grid item className={classes.iconPadding}>
                <GitHubIcon fontSize="medium" />
              </Grid>
            </Grid>
          </FadeIn>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
