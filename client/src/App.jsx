import React from 'react'
import axios from 'axios';

const App = () => {

  let data = {
    name: "abhi",
    amount: 1,
    Number: '999999999',
    MID: 'MID' + Date.now(),
    transactionId: 'T'+Date.now()
  }

  const HandleClick = async () =>{

    try {
      await axios.post('http://localhost:8000/order',data).then(res =>{
        console.log(res.data);
      }).catch(err =>{
        console.log(err)
      })
    } catch (error) {
      console.log(error);
      
    }

  }

  return (
    <> 
    <button onClick={HandleClick}>Pay Now</button>
    </>
  )
}

export default App