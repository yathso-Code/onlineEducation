import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function SignUp() {
  const [name, setName]= useState(''); 
  const [id, setId]= useState('');
  const [password, setPassword]= useState('');
  const navigate = useNavigate();

 const isValidate =()=>{
     let isProcessor = true;
     let errMsg = "Please enter ";
     if(name=== null || name=== ''){
        isProcessor = false;
        errMsg += "Name";
        toast(errMsg);
     }
     if(id=== null || id=== ''){
       isProcessor = false;
       errMsg += "Id";
       toast(errMsg);
     }
     if(password === null || password=== ''){
        isProcessor = false;
        errMsg += "Password";
        toast(errMsg);
     }
     return isProcessor;
 }

 const sign= (e)=>{
    e.preventDefault();
    if(isValidate()){
     fetch("http://localhost:3000/user",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id, name, password})
     }).then((res)=>{
       alert("Success");
       navigate('/login');
     }).catch((err)=>{
       console.log(err.message);
     });
    }
 }

  return (
   <div className='login_box'>
   <div className='login_inner'>
        <form onSubmit={sign}>
          <h1>SignUp</h1>
          <div className="mb-3">
                   <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control"  name='email'
                     value={name} onChange={(e)=> setName(e.target.value)} />
          </div>
          <div className="mb-3">
             <label for="exampleInputPassword1" className="form-label">Email id</label>
             <input type="email" className="form-control"  name='password'
                  value={id} onChange={(e)=> setId(e.target.value)}  />
           </div>
           <div className="mb-3">
             <label for="exampleInputPassword1" className="form-label">Password</label>
             <input type="password" className="form-control"  name='password'
                   value={password} onChange={(e)=> setPassword(e.target.value)} />
           </div>
           <button type="submit" className="btn btn-primary">submit</button>
         </form>
   </div>
 </div>
  )
}

export default SignUp