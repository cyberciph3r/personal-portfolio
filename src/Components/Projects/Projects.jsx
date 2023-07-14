import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Navbar from "../Navbar/Navbar";
import { useMediaQuery } from "@mui/material";
import ProjectDetails from "./ProjectDetails";
import BackHome from "../BackHome/BackHome";

const Projects = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const projectDetails = ProjectDetails();
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <BackHome />
      {/* <div className={classes.bgImage}></div> */}
      <Navbar page="projects" />

      {/* <Typography className={classes.bg}>MY WORK</Typography>
      <Typography className={classes.bg} style={{ bottom: "1px" }}>
        MY WORK
      </Typography> */}

      <Grid container className={classes.mainCntnr}>
        {projectDetails.map((project, idx) => {
          if (isMobile) {
            return (
              <Grid container spacing={3} className={classes.prjctCntnr}>
                <Grid item>{project.desc}</Grid>
                <Grid item>{project.image}</Grid>
              </Grid>
            );
          } else {
            if (idx % 2 == 0) {
              return (
                <Grid container spacing={10} className={classes.prjctCntnr}>
                  <Grid item md={5}>
                    {project.image}
                  </Grid>
                  <Grid item md={7}>
                    {project.desc}
                  </Grid>
                </Grid>
              );
            } else {
              return (
                <Grid container spacing={10} className={classes.prjctCntnr}>
                  <Grid item md={7}>
                    {project.desc}
                  </Grid>
                  <Grid item md={5}>
                    {project.image}
                  </Grid>
                </Grid>
              );
            }
          }
        })}
      </Grid>
    </div>
  );
};

export default Projects;
