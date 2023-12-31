

import React, {useState} from "react";

// The Flatiron Data Fetching in REACT helped me with below code
// I probably need to put trades and grades into arrays versus variables

function TradesForm({handleSubmit}) {
    
    const [formData, setFormData] = useState({
      option1: "",
      option2: "",
      trade1: "",
      trade2: "",
      trade3: "",
      trade4: "",
      trade5: "",
      option1Trade1Grade: "",
      option1Trade2Grade: "",
      option1Trade3Grade: "",
      option1Trade4Grade: "",
      option1Trade5Grade: "",
      option2Trade1Grade: "",
      option2Trade2Grade: "",
      option2Trade3Grade: "",
      option2Trade4Grade: "",
      option2Trade5Grade: ""
      });
    
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.id]: event.target.value,
        });
      }

      // function handleSubmit(event) {
      //   event.preventDefault();
      //   console.log("Button Clicked")
      //   console.log(formData)
      //   fetch("http://localhost:3030/vita49-ecpri-trades", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   });
      // }
    
      return (
        <form onSubmit= {(event) => handleSubmit(event, formData)}>
            <br />
            <br />
            <h1> User Trade Study Matrix Input </h1>
            <br />
            <br />
        
        <label> Option1 : 
          <input
            type="text"
            id="option1"
            value={formData.option1}
            onChange={handleChange}
          />
        </label>

        <label> Option 2 : 
          <input
            type="text"
            id="option2"
            value={formData.option2}
            onChange={handleChange}
          />
        </label>

        <label> Trade # 1 : 
          <input
            type="text"
            id="trade1"
            value={formData.trade1}
            onChange={handleChange}
          />
        </label>

        <label> Trade # 2 : 
          <input
            type="text"
            id="trade2"
            value={formData.trade2}
            onChange={handleChange}
          />
        </label>

        <label> Trade # 3 :
          <input
            type="text"
            id="trade3"
            value={formData.trade3}
            onChange={handleChange}
          />
        </label>
                  
        <label> Trade # 4 : 
          <input
            type="text"
            id="trade4"
            value={formData.trade4}
            onChange={handleChange}
          />
        </label>
                  
        <label> Trade # 5:
          <input
            type="text"
            id="trade5"
            value={formData.trade5}
            onChange={handleChange}
          />
        </label> 
                  
        <label> Grade # 1 :
          <input
            type="text"
            id="option1Trade1Grade"
            value={formData.option1Trade1Grade}
            onChange={handleChange}
          />
        </label>
                  
        <label> Grade # 2 :
          <input
            type="text"
            id="option1Trade2Grade"
            value={formData.option1Trade2Grade}
            onChange={handleChange}
          />
        </label>
                  
        <label> Grade # 3 :
          <input
            type="text"
            id="option1Trade3Grade"
            value={formData.option1Trade3Grade}
            onChange={handleChange}
          />
        </label>    
        
        <label> Grade # 4 :
          <input
            type="text"
            id="option1Trade4Grade"
            value={formData.option1Trade4Grade}
            onChange={handleChange}
          />
        </label> 

        <label> Grade # 5 :
          <input
            type="text"
            id="option1Trade5Grade"
            value={formData.option1Trade5Grade}
            onChange={handleChange}
          />
        </label>   
        
        <label> Grade # 1 :
          <input
            type="text"
            id="option2Trade1Grade"
            value={formData.option2Trade1Grade}
            onChange={handleChange}
          />
        </label>    
        
        <label> Grade # 2 :
          <input
            type="text"
            id="option2Trade2Grade"
            value={formData.option2Trade2Grade}
            onChange={handleChange}
          />
        </label>    
        
        <label> Grade # 3 :
          <input
            type="text"
            id="option2Trade3Grade"
            value={formData.option2Trade3Grade}
            onChange={handleChange}
          />
        </label>      
        
        <label> Grade # 4 :
          <input
            type="text"
            id="option2Trade4Grade"
            value={formData.option2Trade4Grade}
            onChange={handleChange}
          />
        </label>

        <label> Grade # 5 :
          <input
            type="text"
            id="option2Trade5Grade"
            value={formData.option2Trade5Grade}
            onChange={handleChange}
          />
        </label>

            <br />
            <br />
          <button>Click to Input</button>
        </form>
      );
    }

// After button is hit to Input data into form, 
// I want the Display of trade data to appear above it

export default TradesForm

