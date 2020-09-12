import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, TextField, Grid, Box, Button } from "@material-ui/core";

import TopBarAdd from "../Components/TopBarAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2, 2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  input: {
    width: "100%",
  },
  position: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
    background: "#6200EE",

  },
}));

const AddTutotial = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <TopBarAdd />
      <Grid>
        <Grid item className={classes.root}>
          <FormControl>
            <Grid item className={classes.root}>
              <TextField
                id="outlined-password-input"
                label="Titulo"
                type="titulo"
                autoComplete="current-password"
                variant="outlined"
              />
            </Grid>

            <Grid item className={classes.root}>
              <TextField
                id="outlined-password-input"
                label="Profesor"
                type="profesor"
                autoComplete="current-password"
                variant="outlined"
              />
            </Grid>

            <Grid item className={classes.root}>
              <TextField
                id="outlined-password-input"
                label="Materia"
                type="materia"
                autoComplete="current-password"
                variant="outlined"
              />
            </Grid>

            <Grid item className={classes.root}>
              <TextField
                id="outlined-password-input"
                label="Fecha"
                type="fecha"
                autoComplete="current-password"
                variant="outlined"
              />
            </Grid>
          </FormControl>
        </Grid>
        <Button type="submit" variant="contained" color="primary" className={classes.position}>
          AGREGAR
        </Button>
      </Grid>
    </Fragment>
  );
};

export default AddTutotial;
