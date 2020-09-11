import React, { Fragment } from "react";
import { Grid, Box, Typography, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  header: {
    color: "#2204",
    background: "#6200EE",
    width: "100%",
    height: "4rem",
  },
  tittle: {
    flexGrow: 1,
    margin: theme.spacing(2, 8, 2),
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item></Grid>
      <Box className={classes.header}>
        <Typography
          className={classes.tittle}
          variant="h5"
          style={{ color: "#FFFAFA" }}
        >
          Tutoriales
        </Typography>
      </Box>
    </Grid>
  );
};

export default TopBar;
