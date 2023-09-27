// import logo from './logo.svg';
// import './App.css';

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  
  const [request, setRequest] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(request)

  useEffect(() => {
    fetch("http://localhost:3030/vita49-ecpri-trades")
      .then((response) => response.json())
      .then((data) => {
        setRequest(data);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  return <div>{request.map((request) => request.trade)}</div>;
}

  // function handleClick() {
  //   fetch("http://localhost:3030/vita49-ecpri-trades")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }
  
  // return <button onClick={handleClick}>Click to get Example Matrix!</button>;
  
  // return (
  //   <div className="App">
  //   </div>
  // );


export default App;

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
