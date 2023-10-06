
import React from "react";

// Changing code in ExampleTrade Component so it doesn't Fecth to Server
function ExampleTrade() {
   
   // Example data that is 1st object in db.json is copied here

   const data = 
    [
     {
      "id": 0,
      "option1": "VITA49",
      "option2": "eCPRI",
      "trade1": "Bandwidth",
      "trade2": "Power",
      "trade3": "Heat rejection",
      "trade4": "Processing",
      "trade5": "Cost",
      "option1Trade1Grade": "1",
      "option1Trade2Grade": "2",
      "option1Trade3Grade": "3",
      "option1Trade4Grade": "4",
      "option1Trade5Grade": "5",
      "option2Trade1Grade": "6",
      "option2Trade2Grade": "7",
      "option2Trade3Grade": "8",
      "option2Trade4Grade": "9",
      "option2Trade5Grade": "10"
     }
    ]
   
    console.log(data)
  return (
    <div className="App">
        
        <h1> Trade Study Matrix Output </h1>

        <tbody>

{/* I am trying to output the option names and Total Grades within table */}

        {data.map((item, index) => (
            <table>

        <tr>
          <th> Trade </th>
          <th> Option#1 </th>
          <th> Grade#1 </th>
          <th> Option#2 </th>
          <th> Grade#2 </th>
        </tr>

          <tr key={index}>
            <td>{""}</td>
            <td>{item.option1}</td>
            <td>{""}</td>
            <td>{item.option2}</td>
            <td>{""}</td>
            </ tr>

        <tr>
            <td>{item.trade1}</td>
            <td>{""}</td>
            <td>{item.option1Trade1Grade}</td>
            <td>{""}</td>
            <td>{item.option2Trade1Grade}</td>
        </ tr>

        <tr>

            <td>{item.trade2}</td>
            <td>{""}</td>
            <td>{item.option1Trade2Grade}</td>
            <td>{""}</td>
            <td>{item.option2Trade2Grade}</td>
            </ tr>

            <tr>

            <td>{item.trade3}</td>
            <td>{""}</td>
            <td>{item.option1Trade3Grade}</td>
            <td>{""}</td>
            <td>{item.option2Trade3Grade}</td>
            </ tr>

            <tr>

            <td>{item.trade4}</td>
            <td>{""}</td>
            <td>{item.option1Trade4Grade}</td>
            <td>{""}</td>
            <td>{item.option2Trade4Grade}</td>
            </ tr>

            <tr>
            <td>{item.trade5}</td>
            <td>{""}</td>
            <td>{item.option1Trade5Grade}</td>
            <td>{""}</td>
            <td>{item.option2Trade5Grade}</td>
          </tr>


          </table>
        ) )}
      
      </tbody>

    </div>
  );
}

export default ExampleTrade 

