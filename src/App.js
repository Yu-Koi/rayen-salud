import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home'

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      {/* <Route path="/post" component={Post} /> */}
      
    </>
  );
}

export default App;
