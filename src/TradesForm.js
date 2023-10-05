

import React, {useState} from "react";

// The Flatiron Data Fetching in REACT helped me with below code
// I probably need to put trades and grades into arrays versus variables

function TradesForm() {
    const [formData, setFormData] = useState({
      id: 1,
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
            <textarea> User Trade Study Matrix Input </textarea>
            <br />
            <br />
        
        {/* unknown what to do to advance id input into array in db */}
        <input
            type="text"
            id="id"
            value={formData.id}
            onChange={handleChange}
          />
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
            id="trade1"
            value={formData.trade1}
            onChange={handleChange}
          />
          <input
            type="text"
            id="trade2"
            value={formData.trade2}
            onChange={handleChange}
          />
          <input
            type="text"
            id="trade3"
            value={formData.trade3}
            onChange={handleChange}
          />
          <input
            type="text"
            id="trade4"
            value={formData.trade4}
            onChange={handleChange}
          />
          <input
            type="text"
            id="trade5"
            value={formData.trade5}
            onChange={handleChange}
          />
          <input
            type="text"
            id="option1Trade1Grade"
            value={formData.option1Trade1Grade}
            onChange={handleChange}
          />
          <input
            type="text"
            id="option1Trade2Grade"
            value={formData.option1Trade2Grade}
            onChange={handleChange}
          />
          <input
            type="text"
            id="option1Trade3Grade"
            value={formData.option1Trade3Grade}
            onChange={handleChange}
          />
          <input
            type="text"
            id="option1Trade4Grade"
            value={formData.option1Trade4Grade}
            onChange={handleChange}
          />
          <input
            type="text"
            id="option1Trade5Grade"
            value={formData.option1Trade5Grade}
            onChange={handleChange}
          />
          <input
            type="text"
            id="option2Trade1Grade"
            value={formData.option2Trade1Grade}
            onChange={handleChange}
          />
          <input
            type="text"
            id="option2Trade2Grade"
            value={formData.option2Trade2Grade}
            onChange={handleChange}
          />
          <input
            type="text"
            id="option2Trade3Grade"
            value={formData.option2Trade3Grade}
            onChange={handleChange}
          />
          <input
            type="text"
            id="option2Trade4Grade"
            value={formData.option2Trade4Grade}
            onChange={handleChange}
          />
          <input
            type="text"
            id="option2Trade5Grade"
            value={formData.option2Trade5Grade}
            onChange={handleChange}
          />
            <br />
            <br />
          <button>Click to Input</button>
        </form>
      );
    }


export default TradesForm


