
import React, { useState, useEffect } from "react";


function DisplayTrade({data}) {
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
    console.log(totalOption1Grades)

    const totalOption2Grades = data.map((item) => (
        parseFloat(item.option2Trade1Grade, 10) + 
        parseFloat(item.option2Trade2Grade, 10) +
        parseFloat(item.option2Trade3Grade, 10) +
        parseFloat(item.option2Trade4Grade, 10) +
        parseFloat(item.option2Trade5Grade, 10)
        )
        )

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

            <tr>
            <td>{"......"}</td>
            <td>{""}</td>
            <td>{"......"}</td>
            <td>{""}</td>
            <td>{"......"}</td>
            </tr>
            {/* replaced totalOption1Grades below */}
            <tr>
            <td>{"TOTAL"}</td>
            <td>{""}</td>
            <td>{item.option1Trade1Grade}</td>
            <td>{""}</td>
            <td>{item.option2Trade1Grade}</td>
            </tr>

            <tr>
                {/* replaced totalOption1Grades below */}
            <td>
                {item.option1Trade1Grade > item.option2Trade1Grade  
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

export default DisplayTrade;


