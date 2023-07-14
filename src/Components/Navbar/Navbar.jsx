import React from "react";
import useStyles from "./styles";
import FadeIn from "react-fade-in/lib/FadeIn";
import { Toolbar, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.appbar}>
        <FadeIn transitionDuration={1000}>
          <Link
            to="/about"
            className={classes.navEles}
            style={{
              color: page == "about" && "#FFCC00",
            }}
          >
            ABOUT ME
          </Link>
        </FadeIn>
        <FadeIn transitionDuration={1000}>
          <Link
            to="/projects"
            className={classes.navEles}
            style={{
              color: page == "projects" && "#FFCC00",
            }}
          >
            PROJECTS
          </Link>
        </FadeIn>
        <FadeIn transitionDuration={1000}>
          <Link
            to="/contact"
            className={classes.navEles}
            style={{
              color: page == "contact" && "#FFCC00",
            }}
          >
            CONTACT ME
          </Link>
        </FadeIn>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
