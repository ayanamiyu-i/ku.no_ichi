import React from "react";
import "./styles.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./componentes/home/home";
import Menu from "./componentes/menu/menu"
import Mixtapes from "./componentes/mixtapes/mixtapes";


export default function App() {
  return (
 
      <BrowserRouter>
      <Menu/> 
      <div className="App">
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/mixtapes" component={Mixtapes}/>
    </Switch> 
     </div>
      </BrowserRouter>
   
  );
}
