
import React, { useState, useEffect } from "react";


function DisplayTrade() {
  
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
  
  console.log(data)
  const grade1Total = 0
  const grade2Total = 0
  

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
       
{/* I am trying to output the option names and Total Grades within table */}

        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.trade1}</td>
            <td>{item.option1}</td>
            <td>{item.option1Trade1Grade}</td>
            <td>{item.option2}</td>
            <td>{item.option2Trade1Grade}</td>
          </tr>
        ) )}
      
      </tbody>

    </div>
  );
}

export default DisplayTrade;


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


