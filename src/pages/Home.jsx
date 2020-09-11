import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  FormControl,
  Box,
  Select,
  Divider,
  
} from "@material-ui/core";
import TopBar from "../Components/TopBar";


const useStyles = makeStyles((theme) => ({
  transtationState: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tittle: {
    flexGrow: 1,
    margin: theme.spacing(2, 16, 2),
  },
  titless: {
    fontFamily: "Montserrat",
    fontWeight: "Bold",
    fontSize: "15px"
  },
  title2: {
    fontFamily: "Montserrat",
    fontSize: "13px"
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

  const [stateSelected, setStateSelected] = useState("");

  const selected = () => {
    setStateSelected(setDataTutorials);
  };

  const handlerLoadCategories = function (e) {
    const option = e.target.value;
    console.log(option);
    setIdCategories(option);
  };

  return (
    <Fragment>
      <TopBar />
      <Grid  >
        <Grid item>
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

          <h3>Titulos</h3>
          {
            <Grid name="categoryTittle" id="selCategoryTittle" className={classes.transtationState}>
              {idCategories == 0 &&
                dataTutorials.map((item) => (
                  <Box key={item.id} value={item.id}  className={classes.titless}>
                    {item.nombre} {item.profesor}
                    <Divider />
                  </Box>
                 
                ))}
                 
            </Grid>
          }


{
            <ul name="categoryDate" id="selCategoryDate">
              {idCategories == 1 &&
                dataTutorials.map((item) => (
                  <li key={item.id} value={item.id}>
                    {item.fecha}
                  </li>
                ))}
            </ul>
          }
        </Grid>

        <Grid>
          <Select name="tutoriales">
            {dataTutorials.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nombre}
              </option>
            ))}
          </Select>
        </Grid>

        <Grid item>
          <h3>Home</h3>
          <ul>
            {dataTutorials.map((item, i) => (
              <li key={i}>
                {item.id}
                {item.nombre}
                {item.profesor}
                {item.materia}
                {item.fecha}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
