import React, { useState, Fragment } from "react";
import { green, purple } from '@material-ui/core/colors';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  FormHelperText,
  Box,
  Select,
  Divider,
  Button,
} from "@material-ui/core";
import TopBar from "../Components/TopBar";
import ButtonAdd from "../Components/ButtonAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2, 2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  select: {
    display: "flex",
    flexDirection: "row",

  },

  spacing: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonDelete: {
    display: "flex",
    justifyContent: "center",
  },
  
}));

const Home = () => {
  const classes = useStyles();
  const [dataTutorials, setDataTutorials] = useState([]);

  React.useEffect(() => {
    console.log("useEffect");
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://rayentutorialtestapp.azurewebsites.net/tutorials"
    );
    const tutorials = await data.json();
    console.log(tutorials);

    setDataTutorials(tutorials);
  };

  const categories = [{ name: "Titulo" }, { name: "Fecha" }];

  const [idCategories, setIdCategories] = useState(-1);

  const handlerLoadCategories = function (e) {
    const option = e.target.value;
    console.log(option);
    setIdCategories(option);
  };

  return (
    <Fragment>
      <TopBar />
      <Grid>
        <Grid item className={classes.select}>
          <Select
          
            name="categorias"
            id="selCategorias"
            onClick={handlerLoadCategories}
          >
            <option value={-1}>Selecciona una Opcción: </option>
            {categories.map((item, i) => (
              <option key={"categoria" + i} value={i}>
                {item.name}
              </option>
            ))}
          </Select>
          </Grid>
          <Grid item>

          {
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              name="categoryTittle"
              id="selCategoryTittle"
              className={classes.root}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                className={classes.categoryTutorials}
              >
                {idCategories == 0 &&
                  dataTutorials.map((item) => (
                    <Box
                      p={0}
                      mt={0.2}
                      bgcolor="#fff"
                      key={item.id}
                      value={item.id}
                    >
                      <div className={classes.spacing}>
                        <Typography className={classes.titless}>
                          {item.nombre}
                        </Typography>
                        <div>
                          <FormHelperText>{item.fecha}</FormHelperText>
                        </div>
                      </div>
                      <div>
                        <FormHelperText>{item.profesor}</FormHelperText>
                      </div>

                      <Divider />
                    </Box>
                  ))}
              </Grid>
            </Grid>
          }

          {
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              name="categoryTittle"
              id="selCategoryTittle"
              className={classes.root}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                className={classes.categoryTutorials}
              >
                {idCategories == 1 &&
                  dataTutorials.map((item) => (
                    <Box
                      p={0}
                      mt={0.2}
                      bgcolor="#fff"
                      key={item.id}
                      value={item.id}
                    >
                      <div className={classes.spacing}>
                        <Typography className={classes.titless}>
                          {item.fecha}
                        </Typography>
                        <div>
                          <FormHelperText>{item.profesor}</FormHelperText>
                        </div>
                      </div>
                      <div>
                        <FormHelperText>{item.nombre}</FormHelperText>
                      </div>

                      <Divider />
                    </Box>
                  ))}
              </Grid>
            </Grid>
          }
        </Grid>
        <Grid item className={classes.buttonDelete}>
        <Button variant="outlined"  style={{ color: "#6200EE" , borderColor:"#6200EE"}} >
       Eliminar Todos
      </Button>
        </Grid>
       

      <ButtonAdd />

      

      
      </Grid>
    </Fragment>
  );
};

export default Home;
