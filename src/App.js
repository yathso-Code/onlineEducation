import './App.css';
import React from 'react';
import { Routes, Route, json } from "react-router-dom"
import Home from './commponent/Home';
import About from './commponent/About'
import Services from './commponent/Services';
import Help from './commponent/Help'
import Navbar from './commponent/Navbar';
import Footer from './commponent/Footer';
import Card from './commponent/Card';
import Course from './commponent/Course';
import SingeCard from './commponent/Reuse/SingeCard';
import GotoTop from './commponent/GotoTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"
import CourseSingle from './commponent/Reuse/CourseSingle';
import Error from './commponent/Error';
import Login from './commponent/Login';
import SignUp from './commponent/SignUp';
import PrivatCom from './commponent/PrivatCom';



function App() {
  const navigate = useNavigate();
  const [cart, setCart]= React.useState([]);
  const [buy , setBuy] = React.useState([]);
 
  
  // add to card list======
  const handleClick=(item)=>{
    if(cart.indexOf(item) !==-1) return;
    toast(`(${item.name}) courses added to your card`);
    setCart([...cart, item]);
    
  }
  // buy the corse by user============
  const buyCard = (item) => {
    let log_in = localStorage.getItem('userIdOfEducation');
    if(log_in){
    if (typeof item === "number") {
      item = [item];
    } else if (typeof item === "object") {
      item = item.map((x) => {
        return parseInt(x);
      });
    } else {
      return;
    }
  
    if (buy.indexOf(item.id) !== -1) return;
    toast("Item is buy");
    setBuy([...buy, ...item]);
    // let a= JSON.parse(log_in)
    // // let i = parseInt(item);
    // fetch("http://localhost:3000/buy",{
    //   method: "POST",
    //   headers:{'content-type': 'application/json'},
    //   body: JSON.stringify({email:a.id, buyItem:item})
    // }).then((res)=>{
    //   alert("buy corses");
    //   navigate("/course"); 
    // }).catch((err)=>{
    //   console.log("buy error");
    // })
   
    
    }else{
      toast("Login Account");
      navigate('/login');
    }
  };


   console.log("buy",buy);
  return (
    <>
    <div>
      <Navbar buy={buy}/>  
      <Routes>
        <Route path='/' element={ <Home handleClick={handleClick}/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/services' element={ <Services handleClick={handleClick}/> }/>
         <Route path='/course' element={<Course buy={buy} />}/>
        <Route path='/help' element={ <Help/> } />
        <Route path='/singecard/:id' element={< SingeCard buyCard={buyCard}/>}/>
        <Route path='/detal/:name/:id' element={<CourseSingle buy={buy}/>}/>
        <Route path='/addToCard' element={<Card cart={cart}  setCart={setCart} buyCard={buyCard}/>}/>
        <Route path='*' element={<Error/>}/>

        < Route element={< PrivatCom/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        </Route>

      </Routes>

      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <GotoTop/>
      <Footer/>
      
    </div>
    </>
  );
}

export default App;
