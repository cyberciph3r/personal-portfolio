import { Icon, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./homeStyles";
import { Link } from "react-router-dom";

const BackHome = () => {
  const classes = useStyles();
  return (
    <>
      <Link to="/" className={classes.home}>
        <Icon>
          <img src="/back1.png" className={classes.icn} />
        </Icon>
      </Link>
    </>
  );
};

export default BackHome;
