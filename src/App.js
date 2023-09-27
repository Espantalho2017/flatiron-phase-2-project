// import logo from './logo.svg';
// import './App.css';

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(data)

  useEffect(() => {
    fetch("http://localhost:3030/vita49-ecpri-trades")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  // return <div>{data.map((data) => data.trade)}</div>;

  // figure out how to sum the grades into a Total Grade
  // figure out how to assign option1 and option2 names to a variable
  const grade1Total = 0
  const grade2Total = 0
  const option1Name = "VITA49"
  const option2Name = "eCPRI"
  console.log (option1Name)
  console.log(grade1Total)

  return (
    <div className="App">
      <tbody>
        <tr>
          <th> Trade </th>
          <th> Option#1 </th>
          <th> Grade#1 </th>
          <th> Option#2 </th>
          <th> Grade#2 </th>
        </tr>

{/* I am trying to output the option names and Total Grades within table */}
        <tr>
        <p>{option1Name}:{grade1Total}</p>
        <p>{option2Name}: {grade2Total}</p>
      </tr> 
{/* I am trying to output the option names and Total Grades within table */}

        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.trade}</td>
            <td>{item.option1}</td>
            <td>{item.grade1}</td>
            <td>{item.option2}</td>
            <td>{item.grade2}</td>
          </tr>
        ) )}
      
      </tbody>
    </div>
  );


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
