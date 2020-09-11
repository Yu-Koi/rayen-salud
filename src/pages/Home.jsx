import React, { useState, Fragment } from "react";
import {
  Grid,
  Typography,
  FormControl,
  Select,
  ListItemIcon,
} from "@material-ui/core";

import TopBar from "../Components/TopBar";

const Home = () => {
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
      <Grid container justify="center">
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

          <h3>Articulos</h3>
          {
            <ul name="tutoriales" id="selTutoriales">
              {idCategories == 0 &&
                dataTutorials.map((item, id) => (
                  <li key={item.id} value={item.id}>
                    {item.nombre}
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
