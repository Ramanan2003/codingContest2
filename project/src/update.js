import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
function Login () {
  const [id,setId]=useState('');
  const[GadgetName,setGadgetName]=useState(''); 
  const[price,setPrice]=useState('');
  const[Brand,setBrand]=useState('');

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://localhost:8080/postgadgets",{

        id:id,
        gadgetName:GadgetName,
        price:price,
        brand:Brand,
        
  
      

      });
      alert("Added");
      setId("");
      setGadgetName("");
      setPrice("");
      setBrand("");

    }
    catch(err){
      alert(" Added")
    }
  }
  return (
    <>
   
    <center>

    <h1>Gadgets</h1>
    <h4>Gadgets Details</h4>
      
    <div className='body'>
      
    <form >
    
      <div>
        <label htmlFor="username">ID :</label>
        <input type="number" value={id} onChange={(event)=>setId(event.target.value)}/>
      </div>


      <div>
        <label htmlFor="Gadgetname">GadgetName :</label>
        <input type="text" value={GadgetName} onChange={(event)=>setGadgetName(event.target.value)} / >
      </div>

      <div>
        <label htmlFor="price">Price :</label>
        <input type="text" value={price} onChange={(event)=>setPrice(event.target.value)} / >
      </div>

      <div>
        <label htmlFor="Brand">Brand :</label>
        <input type="text" value={Brand} onChange={(event)=>setBrand(event.target.value)} / >
      </div>
      

     
      <button type="submit" onClick={save}>Update</button>
    </form>
    </div>
      </center>
    </>
  );
};


export default Login;