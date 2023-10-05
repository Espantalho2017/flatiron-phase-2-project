
import React, { useState, useEffect } from "react";


function DisplayTrade() {
  
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(data)

  useEffect(() => {
    fetch("http://localhost:3030/vita49-ecpri-trades")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  // figure out how to sum the grades into a Total Grade
  

  console.log(data)

  const grade1Total = 0
  const grade2Total = 0
  

  return (
    <div className="App">
        
        <textarea> Trade Study Matrix Output </textarea>

      <tbody>
        <tr>
          <th> Trade </th>
          <th> Option#1 </th>
          <th> Grade#1 </th>
          <th> Option#2 </th>
          <th> Grade#2 </th>
        </tr>

       
{/* I am trying to output the option names and Total Grades within table */}

        {data.map((item, index) => (
          <tr key={index}>
            {/* I want this to be a separate row */}
            <td>{""}</td>
            <td>{item.option1}</td>
            <td>{""}</td>
            <td>{item.option2}</td>
            <td>{""}</td>

            {/* I want this to be a separate row */}
            <td>{item.trade1}</td>
            <td>{""}</td>
            <td>{item.option1Trade1Grade}</td>
            <td>{""}</td>
            <td>{item.option2Trade1Grade}</td>

            {/* I want this to be a separate row */}
            <td>{item.trade2}</td>
            <td>{""}</td>
            <td>{item.option1Trade2Grade}</td>
            <td>{""}</td>
            <td>{item.option2Trade2Grade}</td>

            {/* I want this to be a separate row */}
            <td>{item.trade3}</td>
            <td>{""}</td>
            <td>{item.option1Trade3Grade}</td>
            <td>{""}</td>
            <td>{item.option2Trade3Grade}</td>

            {/* I want this to be a separate row */}
            <td>{item.trade4}</td>
            <td>{""}</td>
            <td>{item.option1Trade4Grade}</td>
            <td>{""}</td>
            <td>{item.option2Trade4Grade}</td>

            {/* I want this to be a separate row */}
            <td>{item.trade5}</td>
            <td>{""}</td>
            <td>{item.option1Trade5Grade}</td>
            <td>{""}</td>
            <td>{item.option2Trade5Grade}</td>

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


