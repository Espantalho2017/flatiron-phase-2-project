
import React, { useState, useEffect } from "react";
import TradesForm from "./TradesForm"
import DisplayTrade from "./DisplayTrade"


function Home() {
  
        const [data, setData] = useState([]);
        const [isLoaded, setIsLoaded] = useState(false);
      
        // Project is done!!!
      
        useEffect(() => {
          fetch("http://localhost:3030/vita49-ecpri-trades")
            .then((response) => response.json())
            .then((data) => {
            //   console.log(data)
              setData(data);
            });
        }, []);
        // use an empty dependencies array, so we only run the fetch request ONCE
          
        console.log(data)

   // change state of newTrade below to re-render
    // Updating state after each update of new form data with new trades.
    
    function addNewTrade(newTradeData){
      setData([...data, newTradeData]) 
    }

      function handleSubmit(event, formData) {
        event.preventDefault();
        console.log("Button Clicked")
        console.log(formData)
        
        const configObj = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
            };

            fetch("http://localhost:3030/vita49-ecpri-trades", configObj)
        .then(res => res.json())
        .then(formData => addNewTrade(formData))
      }
          
    return (
    <div>
      <DisplayTrade data = {data} />
      <TradesForm handleSubmit = {handleSubmit}/>
    </div>
    )
    }

export default Home

