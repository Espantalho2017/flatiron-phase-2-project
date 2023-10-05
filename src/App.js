
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";


import "./App.css";
import TradesForm from "./TradesForm";
import DisplayTrade from "./DisplayTrade";
import NavBar from "./NavBar"; 
import Home from "./Home";
import ExampleTrade from "./ExampleTrade"
import Instructions from "./Instructions"


function App() {
  
  return (
    <div className="App">

      <NavBar />
      <Switch>
        <Route exact path="/Instructions">
          <Instructions />
        </Route>
        <Route exact path="/ExampleTrade">
          <ExampleTrade />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
