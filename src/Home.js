
import React, { useState, useEffect } from "react";
import TradesForm from "./TradesForm"
import DisplayTrade from "./DisplayTrade"


function Home() {
  
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
          
        console.log(data)


        
    return (
    <div>
      <DisplayTrade data = {data} />
      <TradesForm />
    </div>
    )
}

export default Home

