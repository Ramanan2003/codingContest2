// import React, { useState } from 'react';
// import './App.css';
// function Get () {
//   return (
//     <>
   
//     <center>

//     <h1>Gadgets</h1>
//     <h4>gadgets details</h4>
      
//     <div className='body'>
      
//     <form >
    
//       <div>
//         <label htmlFor="gadget no">Gadget Id</label>
//         <input type="number" id="gadget no"  />
//       </div>

//       <button type="submit">Get</button>
//     </form>
//     </div>
//       </center>
//     </>
//   );
// };

// export default Get;


import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
function Get () {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    // using Promises
    useEffect(() => {
        axios
            .get("http://localhost:8080/gadgets")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);
  return (
    <>
    <center>
    {isError !== "" && <h2>{isError}</h2>}
            <h2>GADGETS DETAILS</h2>
    <div className='grid'>
          <table id='table'>
              <tr>
                <th>id</th>
                <th>GadgetName</th>
                <th>price</th>
                <th>brand</th>
              </tr>
      {myData.slice(0,8).map((post)=>{
        console.log(post);
        return(
          
              // <tr key={(post.id)}>
          <tr>
              <td>{post.id}</td>
              <td>{post.gadgetName}</td>
              <td> {post.price}</td>
              <td>{post.brand}</td>
            </tr>
              )
            })}
              </table>
    </div>
    
    </center>
    
    </>
  );
};

export default Get;
