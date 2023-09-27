

import React, {useState} from "react";

// The Flatiron Data Fetching in REACT helped me with below code
// I probably need to put trades and grades into arrays versus variables

function TradesForm() {
    const [formData, setFormData] = useState({
        option1: "",
        option2: "",
        trades: "",
        grade1: "",
        grade2: ""
      });
    
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.id]: event.target.value,
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
        console.log("Button Clicked")
        console.log(formData)
        fetch("http://localhost:3030/vita49-ecpri-trades", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }
    
      return (
        <form onSubmit={handleSubmit}>
            <br />
            <br />
            <textarea> User Trade Study Matrix </textarea>
            <br />
            <br />
          <input
            type="text"
            id="option1"
            value={formData.option1}
            onChange={handleChange}
          />
          <input
            type="text"
            id="option2"
            value={formData.option2}
            onChange={handleChange}
          />
          <input
            type="text"
            id="trades"
            value={formData.trades}
            onChange={handleChange}
          />
          <input
            type="text"
            id="grade1"
            value={formData.grade1}
            onChange={handleChange}
          />
          <input
            type="text"
            id="grade2"
            value={formData.grade2}
            onChange={handleChange}
          />
            <br />
            <br />
          <button>Click to Input</button>
        </form>
      );
    }


export default TradesForm


