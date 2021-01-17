import React from 'react';
import './menu.css';
import {Link} from 'react-router-dom';

export default function Menu(){
return(
<div className={"menu"}>
<nav>
<Link to="/">Home</Link>
<Link to="/mixtapes">Mixtapes</Link>
  </nav>
</div>
);
}