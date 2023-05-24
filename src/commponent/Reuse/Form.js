import React from 'react'
import './Form.css';

function Form() {
  const sendEmail = (e)=>{
    e.preventDefault();

  }
  

  return (
   <div className='form'>
   <div className='box'>
         <form action='#' onSubmit={sendEmail} method='POST'>
           <input type='text'
            name='username'
            placeholder='USERNAME'
            autoComplete='off'
            required/>
           <br></br>

           <input type='email'
           name='email'
           placeholder='Email' 
           autoComplete='off'
           required/>
           <br></br>

           <textarea id="w3review" 
           name="w3review" rows="4"
           cols="50" 
           className='mess'
            placeholder='enter your message'>
            </textarea>

           <br></br>
           <input type='submit' className='btn' value="SEND"/>
         </form>
   </div>
</div>
  )
}

export default Form