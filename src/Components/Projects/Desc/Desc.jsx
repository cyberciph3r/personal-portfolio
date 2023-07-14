import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import FadeIn from "react-fade-in/lib/FadeIn";

const Desc = ({ title, description }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainDiv}>
      <FadeIn>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.dsc}>{description}</Typography>
      </FadeIn>
    </Grid>
  );
};

export default Desc;
