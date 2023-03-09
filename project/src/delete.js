import axios  from 'axios';
import React, { useState } from 'react';
import './App.css';
function Delete () {
    const [id,setId]=useState();
    const[error,setError]=useState('');
    function del(e){
      e.preventDefault()
        // useEffect(())=>{
            axios
             .delete("http://localhost:8080/gadgets?id="+id)
             .then((response)=>{
                console.log(response.data);
                alert("User Deleted");
             })
             .catch((error)=>setError(error.message));
            //  alert("error");
        
   }
  return (
    <><center>

    <h1>Gadgets</h1>
    <h4>Gadgets Details</h4>
      
    <div className='body'>
    <form >
    
      <div>
        <label htmlFor="username">ID :</label>
        <input type="number"  onChange={(e)=> setId(e.target.value)} value={id}/>
      </div>


      <button type="submit" onClick={(e) => {
        del(e)
      }}>Delete</button>
    </form>
    </div>
    <h2>{error}</h2>
      </center>
    </>
  );
};

export default Delete;