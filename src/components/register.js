//frontend:

import axios from 'axios';
import { useState } from "react";
import { Button } from "react-bootstrap";
import '../styles/register.css'


export default function Register(){
    //let users=useContext(UserContext)
    let [name,setName]=useState('');
    let [email,setEmail]=useState('');
    let [pass,setPass]=useState('');
    let [phoneno,setPhoneno]=useState('');

 
    function handleSubmit(e){
        e.preventDefault()
        console.log(name,email,pass,phoneno)
        //users.users.push({name,email,password:pass,amount:1000})
        let item=({name:name,email:email,phoneno:phoneno,password:pass,amount:1000})
        axios.post('https://bank-server-ni3f.onrender.com/create',item)
    }

    return(<>
      <div id="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <div class="mb-3">
          <label class="form-label">Full Name:</label>
          <input type="text" onChange={(e)=>{setName(e.target.value)}} class="form-control" placeholder="Enter the Name:" ></input>
        </div>
        <div class="mb-3">
          <label  class="form-label">Email Address:</label>
           <input type="text" onChange={(e)=>{setEmail(e.target.value)}} class="form-control" placeholder="Enter the Email:"></input>
        </div>
        <div class="mb-3">
          <label  class="form-label">Phone No:</label>
          <input type="text" onChange={(e)=>{setPhoneno(e.target.value)}} class="form-control" placeholder="Enter the PhoneNo:"></input>
        </div>
        <div class="mb-3">
          <label  class="form-label">Password:</label>
           <input type="text" onChange={(e)=>{setPass(e.target.value)}} class="form-control" placeholder="Enter the Password:"></input>
         </div>
        
         <Button type="submit" class="btn btn-primary">Register</Button>
       </form>
       </div>
              </>)
       }


// Assignment

// import UserContext from "./context";
// import { useContext, useState } from "react";
// import { Button } from "react-bootstrap";
// import '../styles/register.css'

// export default function Register(){
//     let users=useContext(UserContext)

//     let [name,setName]=useState('');
//     let [email,setEmail]=useState('');
//     let [pass,setPass]=useState('');
//     let [phoneno,setPhoneno]=useState('');


//     function handleSubmit(e){
//         e.preventDefault()
//         console.log(name,email,pass,phoneno)
//         users.users.push({name,email,password:pass,phoneno:phoneno,amount:1000})
//     }

//     return(<>
// <div id="register">
// <h1>Register</h1>
// <form onSubmit={handleSubmit}>
// <div class="mb-3">
//     <label class="form-label">Full Name:</label>
//     <input type="text" onChange={(e)=>{setName(e.target.value)}} class="form-control" placeholder="Enter the Name:" ></input>
//   </div>
//   <div class="mb-3">
//     <label  class="form-label">Email Address:</label>
//     <input type="text" onChange={(e)=>{setEmail(e.target.value)}} class="form-control" placeholder="Enter the Email:"></input>
//   </div>
//   <div class="mb-3">
//     <label  class="form-label">Phone No:</label>
//     <input type="text" onChange={(e)=>{setPhoneno(e.target.value)}} class="form-control" placeholder="Enter the PhoneNo:"></input>
//   </div>
//   <div class="mb-3">
//     <label  class="form-label">Password:</label>
//     <input type="text" onChange={(e)=>{setPass(e.target.value)}} class="form-control" placeholder="Enter the Password:"></input>
//   </div>
  
//   <Button type="submit" class="btn btn-primary">Register</Button>
// </form>
// </div>
//         </>)
// }