// import logo from './logo.svg';
// import './App.css';

import React, { useState, useEffect } from "react";
import "./App.css";
import TradesForm from "./TradesForm";
import DisplayTrade from "./DisplayTrade";


function App() {
  
  // const [data, setData] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);

  // console.log(data)

  // useEffect(() => {
  //   fetch("http://localhost:3030/vita49-ecpri-trades")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  // console.log(data)
  // const grade1Total = 0
  // const grade2Total = 0
  

  return (
    <div className="App">
      {/* <tbody>
        <tr>
          <th> Trade </th>
          <th> Option#1 </th>
          <th> Grade#1 </th>
          <th> Option#2 </th>
          <th> Grade#2 </th>
        </tr> */}

{/* I am trying to output the option names and Total Grades within table */}
       
        {/* {data.map((item, index) => (
          <tr key={index}>
            <td>{item.trade1}</td>
            <td>{item.option1}</td>
            <td>{item.option1Trade1Grade}</td>
            <td>{item.option2}</td>
            <td>{item.option2Trade1Grade}</td>
          </tr>
        ) )}
      
      </tbody> */}

      <DisplayTrade />
      <TradesForm />
    </div>
  );
}

export default App;


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
