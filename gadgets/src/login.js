import React, { useState } from 'react';
import axios from 'axios';
function GadgetForm() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Send form data to server or perform validation here
    
  }
  
  return (
    <div className="form-wrapper">
      <h1>Gadget Details Form</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter the name of the gadget" value={name} onChange={(event) => setName(event.target.value)} required />
          </li>
          <li>
            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" name="brand" placeholder="Enter the brand of the gadget" value={brand} onChange={(event) => setBrand(event.target.value)} required />
          </li>
          <li>
            <label htmlFor="model">Model:</label>
            <input type="text" id="model" name="model" placeholder="Enter the model of the gadget" value={model} onChange={(event) => setModel(event.target.value)} required />
          </li>
          <li>
            <label htmlFor="year">Year of Release:</label>
            <input type="number" id="year" name="year" placeholder="Enter the year of release" value={year} onChange={(event) => setYear(event.target.value)} required />
          </li>
          <li>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" placeholder="Enter a description of the gadget" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GadgetForm;
