import React from 'react' 
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Navbar({buy}) {
 
  const auth = localStorage.getItem('userIdOfEducation');
  const navigate = useNavigate();

  const logOut =()=>{
      localStorage.clear('userIdOfEducation');
      toast("LogOut Success");
      navigate('/login');
  }
  return (
    <>
  <div className="nav">
      
  <input type="checkbox" id="nav-check"/>

  <div className="nav-header">
    <div className="nav-title">
      <div className='animate__animated animate__backInLeft'>
     it-TEACH
      </div>
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check" className='lab'>
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
   
    <div className="nav-links"  >
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about' >About</NavLink>
    <NavLink to='/services' >Services</NavLink>
    {buy.length>0?<NavLink to='/course'>Course</NavLink>: null}
    <NavLink to='/addToCard' >Add To Card</NavLink>
    <NavLink to='/help'>Help</NavLink>
    {
      auth ? <NavLink to='/login' onClick={logOut} style={{color:'red'}}>Logout</NavLink> :<NavLink to='/login'  style={{color: "#00FF00", fontWeight: 'bold'}}>Login</NavLink>
    }
    
    </div>
    
    </div>
      </>
  )
}

export default Navbar