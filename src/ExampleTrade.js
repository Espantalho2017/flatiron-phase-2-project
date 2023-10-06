
import React from "react";

function ExampleTrade() {
   
   // Example data that is 1st object in db.json is copied here,
   // so we do not have to waste a Fecth to server in this component

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
      "option1Trade1Grade": 1,
      "option1Trade2Grade": 2,
      "option1Trade3Grade": 3,
      "option1Trade4Grade": 4,
      "option1Trade5Grade": 5,
      "option2Trade1Grade": 6,
      "option2Trade2Grade": 7,
      "option2Trade3Grade": 8,
      "option2Trade4Grade": 9,
      "option2Trade5Grade": 10
     }
    ]
   
    console.log(data)

// Adding up the Trade Grades by option to determine better trade option 
const totalOption1Grades = data.map((item) => (
parseFloat(item.option1Trade1Grade, 10) + 
parseFloat(item.option1Trade2Grade, 10) +
parseFloat(item.option1Trade3Grade, 10) +
parseFloat(item.option1Trade4Grade, 10) +
parseFloat(item.option1Trade5Grade, 10)
)
)

const totalOption2Grades = data.map((item) => (
    parseFloat(item.option2Trade1Grade, 10) + 
    parseFloat(item.option2Trade2Grade, 10) +
    parseFloat(item.option2Trade3Grade, 10) +
    parseFloat(item.option2Trade4Grade, 10) +
    parseFloat(item.option2Trade5Grade, 10)
    )
    )

  return (
    <div>
        
        <h1> Trade Study Matrix Output </h1>

        <tbody>

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

            <tr>
            <td>{"......"}</td>
            <td>{""}</td>
            <td>{"......"}</td>
            <td>{""}</td>
            <td>{"......"}</td>
            </tr>

            <tr>
            <td>{"TOTAL"}</td>
            <td>{""}</td>
            <td>{totalOption1Grades}</td>
            <td>{""}</td>
            <td>{totalOption2Grades}</td>
            </tr>

            <tr>
            <td>
                {totalOption1Grades > totalOption2Grades  
                ? item.option1 : item.option2 }
            </td>
            <td>{"is better "}</td>
            <td>{"graded "}</td>
            <td>{"trade "}</td>
            <td>{"option "}</td>
            </ tr>

          </table>
        ) )}
      
      </tbody>

    </div>
  );
}

export default ExampleTrade 

