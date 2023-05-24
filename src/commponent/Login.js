import React, { useState } from 'react'
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


function Login() {
 const [email, setEmail]= useState('');
 const [pass, setPass] = useState('');
 const navigate = useNavigate();

 const validate= ()=>{
  let result = true;
  let errMessage = "Please enter the ";
  //  it check wither user enter email====
  if(email === ''|| email === null){
    result = false;
    errMessage += ' email';
    toast(errMessage);
  }
    //  it check wither user enter password====
  if(pass === ''|| pass=== null){
    result = false;
    errMessage += 'password';
    toast(errMessage);
  }
  return result;
 }

const login =(e)=>{
    e.preventDefault();
    if(validate()){
     axios.get(`http://localhost:3000/user/${email}`).then((resp)=>{
         let data = resp.data;
         if(data.password === pass){
             toast("LOGIN SUCCESS");
             delete data.password;
             localStorage.setItem("userIdOfEducation", JSON.stringify(data));
             navigate('/')
         }else{
           toast("LOGIN FAIL please check your password")
         }
     }).catch((err)=>{
         toast(" User is found please try again");
         console.log(err.message);
     })
    }
}

 const signUp =()=>{
   navigate('/signUp')
 }
  return (
   <div className='login_box'>
     <div className='login_inner'>
          <form  onSubmit={login}>
          <h1>LogIn</h1>
            <div className="mb-3">
                     <label for="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control"  name='email'
                      value={email} onChange={(e)=> setEmail(e.target.value)}  />
            </div>
            <div className="mb-3">
               <label for="exampleInputPassword1" className="form-label">Password</label>
               <input type="password" className="form-control"  name='password'
                  value={pass} onChange={(e)=> setPass(e.target.value)} />
             </div>
  
             <button type="submit" className="btn btn-primary">Login</button>
             <button onClick={signUp} className="btn btn-primary">SignUp</button>
           </form>
     </div>
   </div>
   
  )
}

export default Login