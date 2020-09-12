import React, { Fragment } from "react";
import { Grid, Box, Typography, Input, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

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
  backButon: {
    marginRight: theme.spacing(2),
  },
}));

const TopBarAdd = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container>
        <Box className={classes.header}>
          {/* <IconButton className={classes.backButon}>
            <NavigateBeforeIcon  />
          </IconButton> */}

          <Typography
            className={classes.tittle}
            variant="h5"
            style={{ color: "#FFFFFFDE" }}
          >
            Agregar Tutorial
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default TopBarAdd;
