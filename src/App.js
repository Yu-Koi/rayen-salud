import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import AddTutorial from './pages/AddTutorial';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/post" component={AddTutorial} />
      
    </>
  );
}

export default App;
